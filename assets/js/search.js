// 검색 기능 구현
(function() {
  function displaySearchResults(results, searchQuery) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length) {
      let htmlContent = '';
      
      results.forEach(function(item) {
        let title = item.title || '';
        let year = item.year || '';
        let tags = item.tags ? item.tags.join(', ') : '';
        let content = item.content || '';
        let img = item.img || '';
        let type = item.type || '';
        
        // 이미지 경로가 상대 경로인 경우 절대 경로로 변환
        if (img && !img.startsWith('http') && !img.startsWith('/')) {
          img = '/' + img;
        }
        
        // 내용 미리보기 (100자 제한)
        let contentPreview = content.substring(0, 150) + (content.length > 150 ? '...' : '');
        
        // 문서 타입에 따른 배지 스타일 설정
        let typeBadge = '';
        if (type === 'paper') {
          typeBadge = '<span class="badge badge-primary mr-2">Paper</span>';
        } else if (type === 'article') {
          typeBadge = '<span class="badge badge-info mr-2">Article</span>';
        }
        
        htmlContent += `
          <a href="${item.url}" class="list-group-item list-group-item-action">
            <div class="d-flex w-100">
              ${img ? `<div class="mr-3" style="width: 80px; height: 80px; overflow: hidden;">
                <img src="${img}" alt="${title}" class="img-fluid" style="object-fit: cover; width: 100%; height: 100%;">
              </div>` : ''}
              <div class="flex-grow-1">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${typeBadge}${title}</h5>
                  <small>${year}</small>
                </div>
                ${tags ? `<div class="mb-1"><small class="text-muted">Tags: ${tags}</small></div>` : ''}
                <p class="mb-1 text-muted small">${contentPreview}</p>
              </div>
            </div>
          </a>
        `;
      });
      
      searchResults.innerHTML = htmlContent;
    } else {
      searchResults.innerHTML = `<p class="list-group-item">No results found for "${searchQuery}"</p>`;
    }
  }

  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  function performSearch() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const activeTypeFilter = document.querySelector('.type-filter.active').getAttribute('data-type');
    
    if (searchTerm === '' && activeTypeFilter === 'all') {
      document.getElementById('search-results').innerHTML = '';
      return;
    }

    fetch('/search_data.json')
      .then(response => response.json())
      .then(data => {
        // 문서 타입 필터링
        let filteredData = data;
        if (activeTypeFilter !== 'all') {
          filteredData = data.filter(item => item.type === activeTypeFilter);
        }
        
        // 검색어 필터링
        const results = filteredData.filter(item => {
          if (searchTerm === '') return true; // 검색어가 없을 때는 모든 문서 반환
          
          const titleMatch = item.title && item.title.toLowerCase().includes(searchTerm);
          const contentMatch = item.content && item.content.toLowerCase().includes(searchTerm);
          const tagMatch = item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
          
          return titleMatch || contentMatch || tagMatch;
        });
        
        displaySearchResults(results, searchTerm);
      })
      .catch(error => console.error('Error loading search data:', error));
  }
  
  // 모든 태그 표시 함수
  function displayAllTags() {
    fetch('/search_data.json')
      .then(response => response.json())
      .then(data => {
        // 모든 태그 수집
        const allTags = new Set();
        data.forEach(item => {
          if (item.tags && Array.isArray(item.tags)) {
            item.tags.forEach(tag => allTags.add(tag));
          }
        });
        
        // 태그 목록 HTML 생성
        const tagsList = document.getElementById('tags-list');
        if (tagsList) {
          let tagsHTML = '';
          allTags.forEach(tag => {
            tagsHTML += `<button class="btn btn-sm btn-outline-primary m-1 tag-btn" data-tag="${tag}">${tag}</button>`;
          });
          tagsList.innerHTML = tagsHTML;
          
          // 태그 버튼에 이벤트 리스너 추가
          document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.addEventListener('click', function() {
              const tag = this.getAttribute('data-tag');
              document.getElementById('search-input').value = tag;
              performSearch();
            });
          });
        }
      })
      .catch(error => console.error('Error loading tags:', error));
  }

  // 문서 타입 버튼에 이벤트 리스너 추가
  document.querySelectorAll('.type-filter').forEach(btn => {
    btn.addEventListener('click', function() {
      // 활성화된 버튼 클래스 토글
      document.querySelector('.type-filter.active').classList.remove('active');
      this.classList.add('active');
      
      // 검색 수행
      performSearch();
    });
  });
  
  // 검색 입력란에 이벤트 리스너 추가
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      performSearch();
    });

    // URL에서 검색어 파라미터가 있으면 검색 수행
    const searchTerm = getQueryVariable('q');
    if (searchTerm) {
      searchInput.value = searchTerm;
      performSearch();
    } else {
      // 초기 로드 시 전체 문서 표시
      performSearch();
    }
    
    // 모든 태그 표시
    displayAllTags();
  }
})(); 