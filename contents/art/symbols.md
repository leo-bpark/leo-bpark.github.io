---
layout: distill
bibliography: all.bib
giscus_comments: false
disqus_comments: false
date: 2025-11-15
featured: true
img: assets/img/feigenbaum.png
title: 'Symbols'
description: ""
_styles: >
    .pioneer-container {
        background: #000;
        color: #fff;
        font-family: 'Times New Roman', serif;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .pioneer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #d4af37;
    }
    .pioneer-title {
        font-size: 1.5rem;
        font-weight: normal;
        margin: 0;
    }
    .pioneer-subtitle {
        font-size: 1.5rem;
        font-weight: normal;
        margin: 0;
        position: relative;
    }
    .pioneer-subtitle::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background: #d4af37;
        border-radius: 1px;
    }
    .pioneer-intro {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        text-align: left;
    }
    .pioneer-table {
        width: 100%;
        border-collapse: collapse;
    }
    .pioneer-table th {
        text-align: left;
        font-weight: normal;
        font-size: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #d4af37;
        color: #fff;
    }
    .pioneer-table td {
        padding: 0.8rem 0;
        border-bottom: 1px solid #333;
        font-size: 0.95rem;
        vertical-align: top;
    }
    .pioneer-table tr:hover {
        background: rgba(212, 175, 55, 0.05);
    }
    .pioneer-date {
        width: 15%;
        font-variant-numeric: tabular-nums;
        padding-right: 2rem;
    }
    .pioneer-title-col {
        width: 60%;
        font-weight: 500;
    }
    .pioneer-media {
        width: 25%;
        color: #d4af37;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
    }
    .pioneer-link {
        color: #fff;
        text-decoration: none;
    }
    .pioneer-link:hover {
        color: #d4af37;
        text-decoration: underline;
    }
    /* 모바일 반응형 스타일 */
    @media (max-width: 768px) {
        d-article {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            box-sizing: border-box;
        }
        d-article * {
            max-width: 100%;
            box-sizing: border-box;
        }
        d-article p, d-article h1, d-article h2, d-article h3, d-article h4, d-article h5, d-article h6, d-article li, d-article a {
            word-wrap: break-word;
            overflow-wrap: break-word;
        }
        d-article img, d-article iframe, d-article video {
            max-width: 100% !important;
            height: auto !important;
        }
        .pioneer-container {
            padding: 1rem;
        }
    }
---


## AI Symbol Table (v0.1)

## Intro: 심볼을 만드는 방법
AI 심볼은 **핵심 의미만 남기고**, **점/선/면의 최소 요소**로 표현한다.  
각 심볼은 다음 원칙을 따른다:

1. **단순성** — 디테일을 제거하고 본질만 표현한다.  
2. **메타포성** — 개념을 가장 잘 연상시키는 기초 기하 형태를 선택한다.  
3. **일관성** — 동일 카테고리는 유사한 형태적 문법을 공유한다.  
4. **추상성** — 실제 구조 그대로 그리지 않고 ‘상징적 형태’로 재구성한다.  

아래는 AI 전 분야를 아우르는 **정식 심볼 테이블**이다.

| **Symbol Name** | **Meaning** | **Shape Specification** |
|-----------------|-------------|--------------------------|
| Embedding Vector | 의미 공간에서의 위치 | 점 1개 + 한 방향으로 뻗는 가늘고 긴 화살표 |
| Latent Space Cloud | 잠재 공간 분포 | 점 5~7개가 느슨한 클러스터로 모임 |
| Key–Value Memory | LLM 내부 메모리 | 병렬 세로선 2개 → 얇은 직사각형 1개 |
| Neuron Activation Bars | 뉴런 활성도 | 높이가 다른 세로 막대 4~6개 |
| Superposition Wave | 중첩 표현 | 서로 약간 어긋난 두 개의 파동선 |
| Attention Lens | 주의집중 | 3×3 격자 + 특정 칸 간 연결선 1개 |
| Token Stream | 언어 시퀀스 | 작은 사각형 4~6개가 일렬로 배치 |
| CoT Steps | 사고 단계 | 점 3~5개가 점차 커지며 이어짐 |
| Retrieval Slot | 외부 지식 불러오기 | 얇은 서랍 상자 + 아래 화살표 |
| Gradient ∇ | 경사/학습 방향 | 사선 + ∆ 형태의 작은 화살촉 |
| Loss Valley | 손실 지형 | U자 곡선 + 최저점 점 1개 |
| Backprop Pulse | 역전파 흐름 | 굵은 → 와 얇은 점선 ← 이 나란히 |
| L1 Shrink | sparsity | 3개 막대 중 가운데만 매우 얇게 남음 |
| L2 Smooth | L2 정규화 | 막대 높이가 점차 동일해짐 |
| Diffusion Cycle | 노이즈–복원 과정 | 조밀→흩어짐→조밀 점 배열 |
| Convolution Kernel | CNN 필터 | 작은 3×3 격자 + 이동하는 정사각형 |
| Feature Stack | Feature map | 얇은 격자판 3장 겹침 |
| Residual Skip | skip connection | 박스 2개 + 위로 휘어진 우회 화살표 |
| Vision Patch | ViT 입력 패치 | 큰 사각형을 4등분 |
| Optical Flow Field | 움직임 정보 | 짧은 벡터(→) 여러 개가 일정 방향으로 |
| Multi-head Merge | multi-head attention | 세로 가는 선 3개 → 굵은 선 1개 |
| Positional Wave | 위치정보 | 사인곡선 1개 |
| Mask Window | 마스크 | 격자 + 특정 칸에 X |
| Temporal Window | 시계열 구간 | 가로선 + 특정 영역만 사각 프레임 |
| Recurrent Loop | RNN 상태 | 원 안에서 도는 작은 루프 |
| Forecast Horizon | 미래예측 | 현재 점 → 점선 → 화살표 |
| Default Break | default rule 예외 | 기본 화살표 → 끝에서 작은 X |
| Circumscription Ring | 최소 비정상성 | 동심원 3개 + 외곽 희미 |
| Attack Edge | Dung AF 공격 | 원 ○ → 원 ○ |
| Assumption Box | ABA 가정 | 점선 박스 + 작은 entailment 화살표 |
| Preference Ladder | ABA+ 선호도 | 점 3개 수직 정렬, 맨 위를 굵게 |
| Knowledge Clash | 지식 충돌 | 두 화살표가 교차·충돌점 강조 |
| Bayes Update | 사전→사후 | 두 원 겹침 + 업데이트 화살표 |
| Markov Step | 상태전이 | 원 3개 → → |
| HMM Layer | hidden/observed | 위 원, 아래 사각형 + 상하 화살표 |
| Gaussian Bell | 확률 분포 | 종 형태 곡선 + 평균선 |
| RL Loop | 강화학습 루프 | 원형 순환 화살표 |
| Reward Star | 보상 | 작은 ★ 또는 강조된 점 |
| Policy Branch | 정책 π | Y자 분기 화살표 |
| Trajectory Path | 에피소드 | 원 4개가 선으로 연결 |
| Explore–Exploit | 탐험 vs 이용 | 직선 화살표 ↔ 지그재그 화살표 |
| Data Pipeline | 처리 과정 | 직사각 박스 3–4개 직렬 |
| Fusion Node | 모달 결합 | 원 + 사각형이 중앙에서 합쳐짐 |
| Graph Mesh | 그래프 구조 | 다각형 노드 4개 + 연결선 |
| Embedding Cloud | 임베딩 군집 | 작은 점 구름 형태 |
| RAG Gate | 검색 기반 생성 | DB 박스 → 모델 박스 |
| Stream Line | 스트리밍 | 점선 → 실선 흐름 |