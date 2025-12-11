---
layout: default
title: Research
permalink: /research/
display_categories: ['Research Highlights', 'Projects', ]
---
<!-- pages/projects.md -->
<div class="projects">
  {%- if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {%- for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_projects = site.research | where: "category", category -%}
    {%- assign sorted_projects = categorized_projects | sort: "date" %}
    {%- assign sorted_projects = sorted_projects | reverse %}

    <!-- Generate cards for each project -->
    {% if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.html %}
      {%- endfor %}
      </div>
    </div>
    {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.html %}
      {%- endfor %}
    </div>
    {%- endif -%}
    {% endfor %}
  
  {%- else -%}
  <!-- Display projects without categories -->
    {%- assign sorted_projects = site.research | sort: "date" -%}
    {%- assign sorted_projects = sorted_projects | reverse %}

    <!-- Generate cards for each project -->
    {% if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.html %}
      {%- endfor %}
      </div>
    </div>
    {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.html %}
      {%- endfor %}
    </div>
    {%- endif -%}
  {%- endif -%}
  </div>
  

--- 

<h3> Papers  </h3>

<style>
.papers-list {
  list-style: none;
  padding-left: 0;
}

.papers-list li {
  position: relative;
  padding-left: 20px;
}

.papers-list li:before {
  content: "-";
  position: absolute;
  left: 0;
}
</style>

<ul class="papers-list">
  <li>
  Deontological Keyword Bias: The Impact of Modal Expressions on Normative Judgments of Language Models, <em> <strong>Bumjin Park</strong>, Jinsil Lee, Jaesik Choi, <strong>Association for Computational Linguistics (ACL)</strong></em>, 2025 [<a href="https://openreview.net/forum?id=YSguiCzp8G&noteId=YSguiCzp8G">pdf</a>]
  </li>

  <li>
  Memorizing Documents with Guidance in Large Language Models, <em> <strong>Bumjin Park</strong>, Jaesik Choi, <strong>International Joint Conference on Artificial Intelligence (IJCAI)</strong></em>, 2024 [<a href="https://www.ijcai.org/proceedings/2024/0714.pdf" target="_blank">pdf</a>]
  </li>

  <li>
  Identifying the Source of Generation for Large Language Models, <em> <strong>Bumjin Park</strong>, Jaesik Choi, <strong> Pattern Recognition and Artificial Intelligence. ICPRAI, </strong></em> 2024 [<a href="https://link.springer.com/chapter/10.1007/978-981-97-8705-0_7" target="_blank">pdf</a>]
  </li>

  <li>
  Message Action Adapter Framework in Multi-Agent Reinforcement Learning, <em> <strong>Bumjin Park</strong>, Jaesik Choi, <strong>Applied Sciences</strong></em>, 2024 [<a href="https://www.mdpi.com/2076-3417/14/21/10079" target="_blank">pdf</a>]
  </li>

  <li>
  [<tag style="color:#0000FF">MS Thesis</tag>] Partitioned Channel Gradient for Reliable Saliency Map in Image Classification, Bumjin Park, supervised by Jaesik Choi [<a href="https://1drv.ms/b/c/ae042a624064f8ca/EWrkp660zT1BuTF8JjPcSa4B6IWTS5NT6V_URVY-WOKzgg?e=Y4GPkz">📂 Drive</a>]
  </li>



  <li>
  Cooperative multi-robot task allocation with reinforcement learning, <em> <strong>Bumjin Park</strong>, Cheongwoong Kang, Jaesik Choi, <strong>Applied Sciences</strong></em>, 2021 [<a href="https://www.mdpi.com/2076-3417/12/1/272" target="_blank">pdf</a>]
  </li>

  <li>
  Scheduling PID attitude and position control frequencies for time-optimal quadrotor waypoint tracking under unknown external disturbances, <em> Cheongwoong Kang, <strong>Bumjin Park</strong>, Jaesik Choi <strong>Sensors</strong></em>, 2021 [<a href="hhttps://www.mdpi.com/1424-8220/22/1/150" target="_blank">pdf</a>]
  </li>

<li>
  Generating Multi-agent Patrol Areas by Reinforcement Learning, <em> <strong> Bumjin, Park </strong>  , Cheongwoong Kang, and Jaesik Choi</em>, 21st International Conference on Control, Automation and Systems (<strong>ICCAS</strong>), 2021 [<a href="https://ieeexplore.ieee.org/abstract/document/9650047/" target="_blank">pdf</a>]
  </li>

</ul>



<br>

---


<h3> Preprint </h3>

* Representation Interpretation of Refusal Mechanism In Large Language Models, <i><strong>Bumjin Park</strong>, Yeonjea Kim, Jinsil Lee, Youngju Joung and Jaesik Choi</i> [[drive](https://1drv.ms/b/s!Asr4ZEBiKgSu31tqfZFXUAwuBzmo?e=gHKzl6)]
*  Incomplete Prompt Jailbreak, <i>Yeonjea Kim, Jinsil Lee, <strong>Bumjin Park</strong>, Youngju Joung and Jaesik Choi </i>  [[drive](https://1drv.ms/b/s!Asr4ZEBiKgSu31oUG7M9LPr3ctQv?e=aDKGyb)]
* ParchGrad: Controlled Internal Gradients for Reliable Saliency Map, <i>  <strong>Bumjin Park </strong>, Giyoung Jeon, and Jaesik Choi </i> [[pdf](https://drive.google.com/file/d/1E_7MIQFcM3livmezMwD1fHmz6gwHm4j1/view?usp=sharing)]
* Explanation on Pretraining Bias of Finetuned Vision Transformer,  <i>  <strong> Bumjin Park  </strong> and Jaesik Choi. </i>  [[pdf](https://arxiv.org/abs/2211.15428)].


<br>
<br>

---
