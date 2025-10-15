---
layout: default
title: Research
permalink: /box/
description: 
---

<div class="research-articles">
  <ul class="box-list">
    {%- assign sorted_papers = site.box | sort: "date" | reverse -%}
    {%- for paper in sorted_papers -%}
      <li style="background-color: {{ paper.background_color | default: 'rgb(225, 225, 225)' }};">
        <a href="{%- if paper.redirect -%}{{ paper.redirect }}{%- elsif paper.url -%}{{ paper.url | relative_url }}{%- else -%}#{%- endif -%}">
          <span class="box-title">{{ paper.title }}</span>
          <span class="box-date">{{ paper.date | date: "%Y.%m.%d" }}</span>
        </a>
      </li>
    {%- endfor -%}
  </ul>


<style>
body {
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  min-height: 100vh;
}

.research-articles {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  background: rgba(255, 255, 255, 0.95);
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin-top: 2em;
  margin-bottom: 2em;
}

.box-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.box-list li {
  margin-bottom: 0.2em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.2em;
  padding: 1em;
  border-radius: 8px;
  margin-bottom: 0.2em;
}

.box-list li:last-child {
  border-bottom: none;
}

.box-list a {
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
}

.box-list a:hover {
  color: #666;
}

.box-title {
  font-size: 1.1em;
  font-weight: 500;
  color: #333;
}

.box-date {
  font-size: 0.9em;
  color: #888;
  font-family: monospace;
}
</style>
  