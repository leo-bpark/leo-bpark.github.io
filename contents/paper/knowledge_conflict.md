---
layout: distill-reading
bibliography: all.bib
giscus_comments: false
disqus_comments: false
date: 2025-12-22
featured: true
img: assets/img/feigenbaum.png
title: 'Knowledge Conflict'
category: 'AI'
description: ''
_styles: >
    table {
        padding-top: 200px;
        margin-bottom: 2.5rem;
        border-bottom: 2px;
        width: 120%;
        margin-left: -10%;
        margin-right: -10%;
        table-layout: fixed;
    }
    .table {
        padding-top: 200px;
        margin-bottom: 2.5rem;
        border-bottom: 2px;
        width: 120%;
        margin-left: -10%;
        margin-right: -10%;
        table-layout: fixed;
    }
    .p {
        font-size: 20px;
        font-weight: 250;
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
    td, th {
        font-size: 1.10rem;
        font-family: 'Times New Roman', Times, serif;
    }
---


기존의 Knowledge Conflict 연구들은 대체로 명제의 상태를 중심으로 충돌을 정의해왔다. 즉, 특정 명제 $Q$가 참인지 혹은 거짓인지($Q$ or $\neg Q$)를 구분하고, 모델이 attention이나 제약(constraint)을 통해 해당 상태를 만족하도록 유도하는 방식이다. 이때 conflict는 제약 조건 간의 불일치로 다뤄지며, 주된 목적은 모델의 상태(state)를 교정하는 데 있다.

그러나 LLM의 생성은 본질적으로 조건적이며, conflict는 단순한 상태의 불일치가 아니라 implication을 통한 추론 과정에서 도출되어야 한다. 예를 들어 다음과 같은 규칙을 고려하자.
해로운 요청이 주어질 경우 거절한다는 규칙은 $A \rightarrow B$로 표현할 수 있다.

이때 $A$가 성립하지 않는 경우에는 $B$가 유도되지 않는 것이 자연스럽다. 더 나아가, 특정한 요청에 대해 거절하지 않는다는 규칙이 $C \rightarrow \neg B$로 주어진다고 하자. 모델에게 $A$와 $C$가 각각 주어졌을 때, 두 규칙 중 하나를 선택하여 $B$ 혹은 $\neg B$를 산출했다면, 이는 규칙에 따른 조건적 선택으로 해석할 수 있으며 이를 곧바로 conflict라고 정의할 수는 없다.

반면, 모델이 $A$와 $C$가 동시에 성립한다는 사실을 인지하고 있다면, 상황은 달라진다. 이 경우 모델은 동일한 결론에 대해 상반된 결과를 유도하는 두 implication 규칙이 충돌한다는 사실을 인식해야 하며, 그 결과로 $B$와 $\neg B$ 중 어느 것도 단정할 수 없다는 판단에 도달할 수도 있다.

따라서 implication 기반 규칙 적용에서 conflict는 단순히 positive 혹은 negative polarity를 선택했는지로 정의될 수 없다. 모델이 조건에 따라 추론을 분기하여 적절한 결론을 산출했다면 이는 정상적인 추론 결과이며, 특정 polarity를 선택했다는 사실만으로 conflict가 발생했다고 볼 수는 없다.

하지만 동일한 전제에 대해 상반된 결론을 직접적으로 유도하는 규칙, 즉 $A \rightarrow B$와 $A \rightarrow \neg B$가 동시에 주어진 경우에는 명확한 논리적 충돌이 발생한다. 이때 모델은 두 규칙이 서로 양립 불가능하다는 사실을 인식해야 한다.

더 복잡한 추론 구조를 고려해보자. 예를 들어 $A \rightarrow C \rightarrow B$, $\neg A \rightarrow C \rightarrow \neg B$, 그리고 $\rightarrow C \rightarrow \neg B$와 같은 규칙들이 주어진 경우, 모델은 현재 어떤 전제가 성립한다고 가정하고 있는지, 그에 따라 어떤 규칙이 활성화되는지, 그리고 그 과정에서 규칙 간 충돌이 발생하는지를 명시적으로 구분할 수 있어야 한다.

결과적으로, 모델이 현재 가정하고 있는 상태와 그로 인해 선택된 규칙, 그리고 해당 규칙 집합 내에서의 충돌 여부를 분간하는 능력은 주어진 조건들과 그로부터 도출되는 추론 결과 사이의 conflict를 명시적으로 파악하는 데 핵심적이다.

이에 본 연구에서는 규칙 전이와 초기 사실들이 주어졌을 때, 모델이 규칙 기반 추론을 수행하여 주어진 질의에 대해 참 또는 거짓을 정확히 판별할 수 있는지를 살핀다. 더 나아가, 규칙 집합 자체에 모순이 존재하는 경우 모델이 이를 단순한 오답이 아닌 명시적인 conflict로 인식하고 표현할 수 있는지를 분석한다.

우리는 이러한 능력을 논리 명제 수준에서의 conflict에 대한 기초적 이해라고 정의하며, 본 연구는 LLM의 해당 이해 수준을 체계적으로 평가하고 이를 개선하기 위한 방법론을 제안한다.

---


1. LLM은 충돌이 발생했음을 인지하는가?  
   $Q$와 $\neg Q$의 동시 성립에 대한 인식  
   (명시적 동시 발현에 대한 이해)

2. LLM은 조건에 따라 서로 다른 형태의 충돌을 구분하는가?  
   $A \rightarrow Q$ 와 $B \rightarrow \neg Q$  
   (조건 차이에 따른 결론 부정의 구분)

3. LLM은 premise negation에 대해 적절히 반응하는가?  
   $A \rightarrow Q$ 와 $\neg A \rightarrow \neg Q$  
   (동일한 premise atom에 대한 부정 구분)

4. 규칙 내부에 명시적으로 드러나지 않는 충돌을 인지하는가?  
   $A \rightarrow C$ 그리고 $C \rightarrow Q$,  
   $B \rightarrow D$ 그리고 $D \rightarrow \neg Q$  
   이 경우 premise는 다르지만, 다단계 추론(multi-hop reasoning)을 통해
   동일한 결론 $Q$와 $\neg Q$가 유도되며,
   이는 추론 경로 수준에서 발생하는 충돌에 해당한다.

기존 연구들은 주로 1번과 같이 $Q$와 $\neg Q$가 명시적으로 동시에 주어지는 경우의
충돌만을 다뤄왔다. 그러나 실제 LLM의 추론 능력을 평가하기 위해서는,
조건에 따라 논리를 명확히 추론하고, 서로 다른 충돌 유형을 구분하는 능력을
체계적으로 분석할 필요가 있다.

이에 본 연구에서는 다음을 수행한다.
1. LLM의 충돌 인식 및 구분 능력을 정량적으로 평가한다.
2. Fine-tuning을 통해 이러한 능력이 어느 정도까지 개선되는지를 분석한다.
3. External Rule Manager를 도입하여, 규칙 기반 추론 하에서의 belief 관리 및
   충돌 대응 메커니즘을 탐구한다.

| 도메인 | 기준 A (A → B) | 기준 C (C → ¬B) | B의 의미 | 왜 자연스러운가 |
|---|---|---|---|---|
| **제품 품질 평가** | 성능 점수가 기준 이상이면 우수하다 | 안정성 테스트 실패 시 우수하지 않다 | 제품이 “우수함” | 성능과 안정성은 독립적인 품질 기준 |
| **논문 심사** | 연구 기여도가 높으면 채택 추천 | 윤리 위반이 있으면 채택 불가 | 논문 채택 여부 | 학술적 가치 vs 윤리 기준 |
| **의료 진단** | 임상 증상이 명확하면 질병 의심 | 검사 결과가 음성이면 질병 아님 | 질병 존재 여부 | 증상 기반 판단 vs 검사 기반 판단 |
| **시스템 배포 결정** | 기능 테스트 통과 시 배포 가능 | 보안 점검 실패 시 배포 불가 | 배포 가능 여부 | 기능 완성도 vs 보안 기준 |
| **채용 평가** | 기술 인터뷰 우수 시 합격 추천 | 문화 적합성 낮으면 불합격 | 채용 여부 | 기술 역량 vs 조직 적합성 |
| **추천 시스템** | 사용자 만족도 예측 높음 → 추천 | 부작용 위험 높음 → 비추천 | 추천 여부 | 효용 극대화 vs 리스크 최소화 |
| **신용 평가** | 소득 안정적이면 대출 승인 | 연체 기록 있으면 대출 거절 | 대출 승인 여부 | 상환 능력 vs 신용 이력 |
| **자율 시스템 판단** | 주행 성능 정상 → 자동 모드 유지 | 센서 신뢰도 낮음 → 자동 모드 해제 | 자동 모드 유지 여부 | 제어 성능 vs 정보 신뢰성 |

```
{
  "atoms": {
    "A": "High performance criterion is satisfied",
    "B": "Safety or stability criterion is violated",
    "C": "The product is technically excellent",
    "D": "The product is high-risk",
    "Q": "The product should be approved"
  },

  "cases": {
    "1_explicit_conflict": {
      "facts": [],
      "rules": [
        "If true, then {Q}.",
        "If true, then ~{Q}."
      ]
    },

    "2_condition_based_conflict": {
      "facts": ["{A}", "{B}"],
      "rules": [
        "If {A}, then {Q}.",
        "If {B}, then ~{Q}."
      ]
    },

    "3_premise_negation": {
      "facts": ["~{A}"],
      "rules": [
        "If {A}, then {Q}.",
        "If ~{A}, then ~{Q}."
      ]
    },

    "4_multi_hop_reasoning_conflict": {
      "facts": ["{A}", "{B}"],
      "rules": [
        "If {A}, then {C}.",
        "If {C}, then {Q}.",
        "If {B}, then {D}.",
        "If {D}, then ~{Q}."
      ]
    }
  }
}
```