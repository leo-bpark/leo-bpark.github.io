---
layout: default
authors: 
    - name: <strong> Bumjin Park </strong>
      affiliations:
        name: KAIST
    - name: Jaesik Choi
      affiliations:
        name: KAIST, INEEJI
bibliography: all.bib
giscus_comments: false
disqus_comments: false
date: 2024-02-01
featured: true
img: assets/img/logos/ijcai2024.png
title: 'Document Memory for LLMs'
category: 'Research Highlights'
tags: ['IJCAI2024', Memory, LLM, Interpretability]
description: 'A novel document-wise memory architecture and guidance loss for tracking and manipulating document memories in large language models.'
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

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Guidance in LLMs (IJCAI 2024)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>Memorizing Documents with Guidance</h1>
  <h2>Memorizing Documents with Guidance in Large Language Models </h2>
  <p><strong>IJCAI 2024 Main Conference</strong></p>
  <p>
    <a href="https://leo-bpark.github.io">Bumjin Park</a>, 
    Jaesik Choi<br/>
    KAIST AI, INEEJI<br/>
    <a href="mailto:bumjin@kaist.ac.kr">bumjin@kaist.ac.kr</a>
  </p>
</header>

<div class="styled-logo-container">
  <img src="/assets/img/logos/ijcai2024.png" class="styled-logo">
</div>


<section id="resources">
  <h3>Resources</h3>
  <ul>
    <li>
    <a href="https://www.ijcai.org/proceedings/2024/0714.pdf" target="_blank">  📄 Paper (IJCAI) </a> / 
    <a href="https://arxiv.org/abs/2406.15996" target="_blank">📄 Arxiv</a></li>
    <li><a href="https://github.com/fxnnxc/DocGuidanceLLM" target="_blank">💻 Code & Datasets</a></li>
  </ul>
</section>

<section id="tldr">
  <h3>TL;DR</h3>
  <p>
    We propose a <strong><u>document-wise memory architecture</u></strong> and <strong><u>document guidance loss</u></strong> to track memory entries per document. This enables <strong>controlled generation</strong> and <strong>traceable knowledge location</strong> in LLMs, promoting safer and more explainable AI.
  </p>
</section>

<section id="overview">
  <h3>Key Concepts</h3>
  <ul>
    <li><strong>Document-wise Memory</strong>: Memory structure aligned with document representations</li>
    <li><strong>Document Guidance Loss</strong>: Encourages disentangled memory entries across documents</li>
    <li><strong>Continuity Assumption</strong>: Lipschitz-based theoretical guarantee for memory space geometry</li>
  </ul>
</section>

<section id="task">
  <h3>Research Task</h3>

  <h4> Document-specific Memory Selection</h4>
  <p>
    This section defines the core problem: how can large language models (LLMs) select different memory entries depending on the document? 
    The idea is to associate each document with a unique memory footprint to trace and control document-specific content during generation.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_1.png" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> The model learns to select different memory entries per document, laying the foundation for document-specific memory design.
  </p>

  <br>
  <h4> Result Highlight: Learning Dynamics of Memory Competition</h4>
  <p>
    We visualize how document memories evolve during training. 
    As training progresses, documents increasingly specialize their memory entries, competing for distinct slots—leading to better separation and less contamination.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_dynamics.gif" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> Competitive learning dynamics promote distinct memory entries across documents over training steps.
  </p>
</section>

<section id="analysis">
  <h3>Analysis Highlights</h3>


  <h4> Key-Value Memory Selection Architecture</h4>
  <p>
    This figure illustrates how document representations modulate memory selection. 
    A key vector derived from a document representation is used to mask or activate specific memory entries in the MLP layers of a transformer, forming a soft selection mechanism.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_2.png" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> Document-based key vectors enable selective activation in the key-value memory structure of LLMs.
  </p>

<br>
  <h4> Document Guidance Loss</h4>
  <p>
    We introduce a training method based on guidance loss to align memory entries with document semantics. 
    This loss increases the likelihood of the document text when using the correct document representation, while reducing it when using negative document representations.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_3.png" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> Document guidance loss entangles memory selection with the intended document while forgetting others.
  </p>

<br>
  <h4> Continuity in Document-to-Memory Mapping</h4>
  <p>
    We theorize and visualize how small changes in document representations should lead to smooth changes in memory selection. 
    This Lipschitz continuity ensures stability and consistency across the memory selection manifold.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_4.png" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> The continuity assumption preserves similarity between documents and their corresponding memory entries.
  </p>

  <br>
  <h4> Improved Accuracy with Document-wise Memory</h4>
  <p>
    Experiments show that our method significantly improves the accuracy of content recall for the target document, compared to shared memory baselines.
    We evaluate this using ROUGE and IV-ROUGE scores on Wikitext-103.
  </p>
  <img src="https://d2acbkrrljl37x.cloudfront.net/research/publication/ijcai2024_exp1.png" width="90%" height="auto" class="styled-image"/>
  <p class="caption">
    <strong>Figure:</strong> Document-wise memories improve generation quality by focusing on document-specific information.
  </p>
</section>


<section id="citation">
  <h3>Citation</h3>
  <pre>
@inproceedings{park2024guidance,
  title     = {Memorizing Documents with Guidance in Large Language Models},
  author    = {Park, Bumjin and Choi, Jaesik},
  booktitle = {Proceedings of the 33rd International Joint Conference on Artificial Intelligence (IJCAI)},
  year      = {2024},
}
  </pre>
</section>


<section id="contact">
  <h3>Contact</h3>
  <p>If you have questions or collaboration ideas, feel free to reach out:</p>
  <p><strong>Email:</strong> <a href="mailto:bumjin@kaist.ac.kr">bumjin@kaist.ac.kr</a></p>
</section>

<footer>
  <p>© 2025 Bumjin Park · KAIST AI · IJCAI 2025</p>
</footer>

</body>


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
  color:rgb(43, 0, 215);
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
  color:rgb(43, 0, 215);
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
  color:rgb(43, 0, 215);
  text-decoration: underline;
}
</style>
