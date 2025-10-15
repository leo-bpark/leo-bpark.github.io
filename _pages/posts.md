---
layout: default
title: Notes
permalink: /essay/
description: 
---

<h2> </h2>

<hr>

<!-- Featured Posts Cards Section -->
<div class="featured-posts">
  <div class="featured-grid">
    <!-- New Post Card -->
    <div class="post-card new-card">
      <div class="card-image">
        <img src="/assets/img/modeling_love.jpeg" alt="Latest Research" />
        <div class="card-badge">NEW</div>
      </div>
      <div class="card-content">
        <h3 class="card-title">Towards Understanding Symbolic AI </h3>
        <p class="card-description">Methods with explicit representations</p>
        <div class="card-meta">
          <span class="card-date">2025/09/20</span>
          <span class="card-category">Symbolic AI</span>
        </div>
      </div>
      <div class="card-overlay">
        <a href="symbolic_ai" class="card-link">Read More</a>
      </div>
    </div>

    <!-- Highlight Post Card 1 -->
    <div class="post-card highlight-card">
      <div class="card-image">
        <img src="/assets/img/phd_essay1.jpeg" alt="Key Research" />
        <div class="card-badge ">Highlight</div>
      </div>
      <div class="card-content">
        <h3 class="card-title"> PhD Essay </h3>
        <p class="card-description">Finding What Cannot Be Achieved by Moore’s Law</p>
        <div class="card-meta">
          <span class="card-date">2025/02/06</span>
          <span class="card-category">PhD Life</span>
        </div>
      </div>
      <div class="card-overlay">
        <a href="phd_essay1/" class="card-link">Read More</a>
      </div>
    </div>

  </div>
</div>

<hr>

<div class="research-articles">
  {%- assign sorted_papers = site.essay | sort: "date" | reverse -%}
  {%- assign last_month = "" -%}
  {%- assign last_year = "" -%}
  {%- for paper in sorted_papers -%}
    {%- assign paper_year = paper.date | date: "%Y" -%}
    {%- assign paper_month = paper.date | date: "%B %Y" -%}
    {%- if paper_month != last_month -%}
      {%- if forloop.first == false -%}
        </div>
      {%- endif -%}
      <div class="month-section">
        <div class="month-header">{{ paper_month | upcase }}</div>
    {%- endif -%}
    <a class="paper-link-block" href="{%- if paper.redirect -%}{{ paper.redirect }}{%- elsif paper.url -%}{{ paper.url | relative_url }}{%- else -%}#{%- endif -%}" style="text-decoration:none;color:inherit;">
      <div class="paper-list-item{% if paper.highlight %} highlight{% endif %}" {% if paper.background_color %}style="background-color: {{ paper.background_color }};"{% endif %}>
        <div class="paper-title">
          {%- if paper.italic_title -%}
            <em>{{ paper.title }}</em>
          {%- else -%}
            <strong>{{ paper.title }}</strong>
          {%- endif -%}
          {%- if paper.year or paper.authors -%}
            <span class="paper-authors">
              {%- if paper.authors -%}
                {{ paper.authors }}
              {%- endif -%}
              {%- if paper.year -%}
                , {{ paper.year }}
              {%- endif -%}
            </span>
          {%- endif -%}
        </div>
        <div class="paper-desc">{{ paper.description }}</div>
      </div>
    </a>
    {%- assign last_month = paper_month -%}
    {%- assign last_year = paper_year -%}
    {%- if forloop.last -%}
      </div>
    {%- endif -%}
  {%- endfor -%}

</div>

<style>
/* Featured Posts Cards Styles */
.featured-posts {
  max-width: 1200px;
  margin: 2em auto;
  padding: 0 1em;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em;
  margin-bottom: 3em;
}

.post-card {
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 320px;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .card-image img {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 1em;
  right: 1em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.new-card .card-badge {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
}

.highlight-card .card-badge {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
}

.card-content {
  padding: 1.5em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  z-index: 1;
}

.card-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 0 0.5em 0;
  color: #2c3e50;
  line-height: 1.3;
}

.card-description {
  font-family: 'Times New Roman', serif;
  color: #7f8c8d;
  font-size: 0.95em;
  line-height: 1.5;
  margin: 0 0 1em 0;
  flex-grow: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5em;
  border-top: 1px solid #ecf0f1;
}

.card-date {
  font-family: 'Times New Roman', serif;
  color: #95a5a6;
  font-size: 0.85em;
  font-weight: 500;
}

.card-category {
  font-family: 'Times New Roman', serif;
  background: #ecf0f1;
  color: #34495e;
  padding: 0.3em 0.8em;
  border-radius: 15px;
  font-size: 0.75em;
  font-weight: 500;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2em 1.5em 1.5em;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.post-card:hover .card-overlay {
  opacity: 1;
}

.card-link {
  color: white;
  text-decoration: none;
  font-family: 'Times New Roman', serif;
  font-weight: 600;
  font-size: 0.9em;
  display: inline-block;
  padding: 0.5em 1em;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: background 0.3s ease;
}

.card-link:hover {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
  
  .post-card {
    height: 300px;
  }
  
  .card-image {
    height: 140px;
  }
  
  .card-content {
    padding: 1.2em;
  }
  
  .card-title {
    font-size: 1.2em;
  }
}

.research-articles {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Times New Roman', serif;
}
.month-header {
  font-family: 'Times New Roman', serif;
  font-weight: bold;
  font-size: 1.1em;
  /* margin-top: 2em; */
  /* margin-bottom: 0.5em; */
  /* border-top: 2px solid #aaa; */
  padding-top: 1em;
  letter-spacing: 1px;
  padding-left: 0.5em;
  background:#ffffff;
}
.month-section {
  background: #faf8f5;
  /* border: 1px solid #e0e0e0; */
  margin-bottom: 1em;
  border-radius: 0px;
  /* padding: 1em 1.5em 0em 0em; */
  padding-left: 0em;
}
.paper-list-item {
  font-family: 'Times New Roman', serif;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  background-color: rgb(250, 250, 250);
}
.paper-list-item:last-child {
  border-bottom: none;
}
.paper-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  margin-bottom: 0.2em;
}
.paper-title em, .paper-title strong {
  font-family: 'Times New Roman', serif;
  font-size: 1.0em;
}
.paper-authors {
  font-style: italic;
  color: #888;
  margin-left: 0.5em;
  font-size: 0.95em;
}
.paper-desc {
  font-family: 'Times New Roman', serif;
  color: #333;
  font-size: 1em;
  margin-top: 0.2em;
}
.highlight {
  background: #f5ecd7;
  border-left: 4px solid #bfa14a;
  padding-left: 1em;
}
</style>
  