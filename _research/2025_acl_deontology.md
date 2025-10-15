---
layout: default
authors: 
    - name: <strong> Bumjin Park </strong>
      affiliations:
        name: KAIST
    - name: Jinsil Lee
      affiliations:
        name: KAIST
    - name: Jaesik Choi
      affiliations:
        name: KAIST
bibliography: all.bib
giscus_comments: false
disqus_comments: false
date: 2025-02-03
featured: true
img: assets/img/logos/acl2025.png
title: 'Deontological Keyword Bias of LLMs'
category: 'Research Highlights'
tags: ['ACL2025-main', LLM, 'Bias', 'Philosophical']
description: 'Deontological Keyword Bias: The Impact of Modal Expressions on Normative Judgments of Language Models'
_styles: >
    .table {
        padding-top:200px;
        margin-bottom: 2.5rem;
        border-bottom: 2px;
    }
    .p {
        font-size:20px;
    }
    .styled-image {
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin: 20px auto;
        transition: transform 0.3s ease;
        display: block;
    }
    .styled-image:hover {
        transform: scale(1.2);
    }    
---

<style>
/* Base reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #ffffff;
  color: #222;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Header */
header {
  text-align: center;
  margin-bottom: 1rem;
}

header h1 {
  font-size: 2.8rem;
  color: #990000;
  margin-bottom: 0.5rem;
}

header h2 {
  font-size: 1.4rem;
  font-weight: normal;
  color: #333;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600; /* 강조된 소제목 */
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  color: #222;
}

header p {
  font-size: 1rem;
  color: #555;
}

/* Section Titles */
section h3 {
  font-size: 1.6rem;
  color: #222;
  border-bottom: 2px solid #ddd;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
}

/* Paragraphs & Lists */
p {
  margin-bottom: 1rem;
}

ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.4rem;
}

/* Images */
img {
  max-width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Preformatted citation */
pre {
  background: #f4f4f4;
  padding: 1rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  overflow-x: auto;
}

/* Links */
a {
  color: #990000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.caption {
  font-size: 0.9rem;
  color: #555;
  margin-top: -0.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.styled-logo-container {
  text-align: center;
  margin: 0rem 0;
}

.styled-logo {
  width: 33%;
  border-radius: 15px;
  display: inline-block;
}

#contact a {
  color: #990000;
  text-decoration: underline;
}
</style>


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deontological Keyword Bias (ACL 2025)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Deontological Keyword Bias</h1>
    <h2>The Impact of Modal Expressions on Normative Judgments of Language Models</h2>
    <p><strong>ACL 2025 Main Conference</strong></p>
    <p>
      <a href="https://leo-bpark.github.io">Bumjin Park</a>, 
      Jinsil Lee, 
      Jaesik Choi<br/>
      KAIST AI, INEEJI<br/>
      <a href="mailto:bumjin@kaist.ac.kr">bumjin@kaist.ac.kr</a>
    </p>
  </header>

<div class="styled-logo-container">
  <img src="/assets/img/logos/acl2025.png" class="styled-logo">
</div>


  <!-- Paper & Code -->
  <section id="resources">
    <h3>Resources</h3>
    <ul>
      <li><a href="" target="_blank">📄 Paper (ACL Anthology, TBD)</a> / <a href="https://arxiv.org/abs/2506.11068" target="_blank">📄 Arxiv </a> / <a href="https://openreview.net/forum?id=YSguiCzp8G&noteId=YSguiCzp8G" target="_blank">📄 OpenReview</a></li>
      <li><a href="https://github.com/fxnnxc/deontological-keyword-bias" target="_blank">💻 Code & Datasets</a></li>
    </ul>
  </section>

  <!-- Key Concepts -->
  <section id="concepts">
    <h3>Key Concepts</h3>
    <ul>
      <li><strong>DKE</strong>: Deontological Keyword Effect</li>
      <li><strong>DKB</strong>: Deontological Keyword Bias</li>
      <li><strong>Alignment</strong>: Human-model judgment agreement</li>
    </ul>
  </section>

<section id="tldr">
  <h3>TL;DR</h3>
  <p>
    Large language models (LLMs) show a <strong><u>systematic bias</u></strong> toward interpreting sentences as obligations 
    when <strong><u>modal expressions</u></strong> like <em>must</em> or <em>should</em> are present—even when humans do not. 
    We identify this as <strong>Deontological Keyword Bias (DKB)</strong> and propose a <strong><u>reasoning-based few-shot method</u></strong> 
    to effectively reduce it.
  </p>
</section>


<section id="task">
  <h3>Research Task</h3>

  <h4>1. Philosophical Foundations of Deontic Logic</h4>
  <p>
    The task is rooted in long-standing philosophical discussions of moral obligation. 
    Drawing from <strong>Immanuel Kant's</strong> (1785) concept of moral duty and <strong>von Wright's</strong> (1951) formalization of deontic logic, 
    our study examines how well LLMs understand and replicate deontic reasoning. 
    We extend this analysis into the computational domain, testing how context and language shape model behavior.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_task1.jpeg" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> From Kant's moral imperative to modern deontic logic, obligation is both a philosophical and computational question.
  </p>

  <h4>2. Verifying Normative Judgments in LLMs</h4>
  <p>
    This study investigates whether large language models (LLMs) can accurately assess whether a sentence expresses an <strong>obligation</strong>. 
    The presence of <em>modal expressions</em> — such as <strong>must, ought to, should</strong> — can alter the perceived normative meaning of a sentence.
    To test this, we compare human and model judgments across both <em>deontological</em> and <em>commonsense</em> scenarios.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_task2.jpeg" width="90%" height="auto" class="styled-image"/>

  <p class="caption">
    <strong>Figure:</strong> Humans and LLMs are asked whether a sentence expresses obligation, with or without modal expressions.
  </p>
</section>




<section id="analysis">
  <h3>Analysis Highlights</h3>

  <h4>1. Human vs. LLM Judgment Patterns</h4>
  <p>
    While both humans and LLMs increase obligation judgments when modal expressions are included, 
    LLMs exhibit significantly <strong>lower variance and higher consistency</strong>. This indicates that 
    models are more rigidly influenced by modal keywords such as <em>must</em> or <em>ought to</em>, 
    often ignoring contextual nuance. In contrast, human judgments reflect greater sensitivity to context and ambiguity.
  </p>

<img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_exp1.jpeg" width="90%" height="auto" class="styled-image"/>

  <h4>2. Bias Across Language Models</h4>
  <p>
    The effect of modal expressions is consistent across model families — including GPT-4o, LLaMA3, and Gemma2 — 
    but the <strong>magnitude of Deontological Keyword Bias (DKB)</strong> varies. Notably, open-source models such as 
    LLaMA3-8B showed stronger overgeneralization of obligation than GPT-4o. Even in <em>negated forms</em> 
    (e.g., "must not"), models often misinterpret the statement as containing obligation.
  </p>

<img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_exp2.jpeg" width="90%" height="auto" class="styled-image"/>

  <h4>3. Impact of Question Framing</h4>
  <p>
    We tested three question levels — <em>General</em>, <em>Explicit</em>, and <em>Strict</em>. 
    DKB was observed across all levels, but more prominently under general prompts. 
    Some models correctly lowered obligation judgments under stricter questions, 
    suggesting partial semantic understanding. However, others remained biased even with stricter constraints, 
    showing overreliance on modal triggers.
  </p>

  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_exp3.jpeg" width="90%" height="auto" class="styled-image"/>


  <h4>4. Debiasing through In-Context Reasoning</h4>
  <p>
    To mitigate DKB, we apply <strong>few-shot examples</strong> with and without modal expressions, 
    along with <strong>reasoning-based prompts</strong>. While few-shot examples help, the inclusion of 
    reasoning consistently reduces obligation judgments in non-deontic contexts. 
    This demonstrates that <em>explicit moral reasoning</em> enables models to override lexical bias.
  </p>
<img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/acl2025_exp4.jpeg" width="90%" height="auto" class="styled-image"/>


</section>

  <!-- Citation -->
  <section id="citation">
    <h3>Citation</h3>
    <pre>
@inproceedings{park2025dkb,
  title={Deontological Keyword Bias: The Impact of Modal Expressions on Normative Judgments of Language Models},
  author={Park, Bumjin and Lee, Jinsil and Choi, Jaesik},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL)},
  year={2025}
}
    </pre>
  </section>

<section id="contact">
  <h3>Contact</h3>
  <p>If you have questions or would like to discuss this research, feel free to reach out:</p>
  <p><strong>Email:</strong> <a href="mailto:bumjin@kaist.ac.kr">bumjin@kaist.ac.kr</a></p>
</section>

  <!-- Footer -->
  <footer>
    <p>© 2025 Bumjin Park · KAIST AI · ACL 2025</p>
  </footer>

  

</body>

