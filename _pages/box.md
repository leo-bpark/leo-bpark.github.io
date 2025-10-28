---
layout: default
title: AI Research
permalink: /box/
description: 
---

<div class="research-container">
  <div class="header-section">
    <h1 class="sub-title">Box</h1>
    <div class="subtitle-line"></div>
  </div>
  
  <div class="description-section">
    <p>AI Research invites you to explore cutting-edge interpretability research. An extension of our academic pursuits, this is a collection of interdisciplinary insights—a place that ignites thought, encourages curiosity, and cultivates understanding of artificial intelligence.</p>
  </div>
  
  <div class="research-table">
    <div class="table-header">
      <div class="header-cell">Item</div>
    </div>
    <div class="header-line"></div>
    <div class="table-content">
      {%- assign sorted_papers = site.box | reverse -%}
      {%- for paper in sorted_papers -%}
        <div class="table-row">
          <div class="data-cell media-cell">
            <a href="{%- if paper.redirect -%}{{ paper.redirect }}{%- elsif paper.url -%}{{ paper.url | relative_url }}{%- else -%}#{%- endif -%}" class="media-link">{{ paper.title }} </a>
          </div>
        </div>
      {%- endfor -%}
    </div>
  </div>
</div>

<style>
body {
  background-color: #FFFFFF;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.research-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  padding: 2em;
  background-color: #FFFFFF;
}

.header-section {
  margin-bottom: 2em;
}

.main-title {
  font-size: 2rem;
  font-weight: normal;
  color: #000000;
  margin: 0 0 0.5em 0;
  font-family: 'Georgia', serif;
}

.title-line {
  height: 2px;
  background-color: #C8A24F;
  width: 100%;
  margin-bottom: 1em;
}

.sub-title {
  font-size: 2rem;
  font-weight: normal;
  color: #000000;
  margin: 0 0 0.5em 0;
  font-family: 'Georgia', serif;
  text-align: center;
}

.subtitle-line {
  height: 2px;
  background-color: #C8A24F;
  width: 60%;
  margin: 0 auto 2em auto;
}

.description-section {
  margin-bottom: 2em;
}

.description-section p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #000000;
  margin: 0;
  font-family: 'Georgia', serif;
}

.research-table {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1em;
  background-color: #FFFFFF;
}

.header-cell {
  font-size: 1rem;
  font-weight: normal;
  color: #000000;
  font-family: 'Georgia', serif;
}

.header-line {
  height: 1px;
  background-color: #C8A24F;
  width: 100%;
}

.table-content {
  padding: 0 1em 1em 1em;
}

.table-row {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 1em 0;
  border-bottom: 1px solid #f0f0f0;
}

.table-row:last-child {
  border-bottom: none;
}

.data-cell {
  font-size: 1rem;
  color: #000000;
  font-family: 'Georgia', serif;
  display: flex;
  align-items: center;
}

.date-cell {
  font-family: monospace;
}

.title-cell {
  font-weight: normal;
}

.media-cell {
  /* justify-content: flex-end; */
}

.media-link {
  color:rgb(88, 0, 143);
  text-decoration: none;
  font-family: 'Georgia', serif;
}

.media-link:hover {
  text-decoration: underline;
}
</style>
  