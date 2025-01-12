---
title: 네이버에서 개발한 초대규모 언어모델 HyperCLOVA X! 사용 후기
author: orion
date: 2023-10-07 18:28:00 +0900
categories: [Extracurricular, NAVER AI RUSH 2023]
tags: [AIRUSH, 네이버클라우드, HyperCLOVA, HyperCLOVA X, 생성형 AI, chatgpt, bard, 하이퍼클로바X]
img_path: /assets/img/posts/2023-10-07/Naver-AI-Rush-2
---

>**- 본 포스팅은 네이버 클라우드 - AI RUSH 앰배서더 활동의 일환으로 작성되었습니다.**  
>**- 상세 내용은 앰배서더 개인 의견으로 회사의 입장을 반영하지는 않습니다.**  
{: .prompt-info }

## 들어가며
오늘은 네이버에서 개발한 초대규모 언어모델 HyperCLOVA X에 대해 알아보도록 하겠습니다! 

네이버 AI RUSH 앰배서더로서 활동하고 있기 때문에 HyperCLOVA X 기반 대화형 AI인 `CLOVA X` 를 미리 체험해볼 수 있었는데요. 

네이버가 만든 생성형 AI인 `HyperCLOVA X` 는 `어떤 기능`과 `어떤 특징`을 가지고 있는지, 그리고 `다른 생성형 AI와의 차이점`이 있는지, `활용 방법`에는 무엇이 있는지 사용해본 경험을 바탕으로 자세히 알아보도록 하겠습니다!

> **중요 포인트는요!**
>  
> 지금과 같이 `노란색 박스`에는 `Key Point`가 `초록색 박스`에는 `팁 / 참고사항`이 있으니  
> 꼭 읽어보시길 권합니다! `중요한 내용`이 담겨 있습니다!!  
{: .prompt-warning}

## 생성형 AI 란?
먼저 소개에 앞서 생성형 AI 에 대해 알아야겠죠! 

**생성형 AI(Generative AI)는 인공지능 기술을 이용하여 텍스트, 이미지, 음성 등 다양한 형태의 콘텐츠를 생성하는 기술입니다.**

OpenAI 의 `ChatGPT`, Google의 `Bard`, Naver의 `CLOVA X` 와 같은 텍스트 기반의 대화형 AI 서비스의 대표적인 예가 되겠습니다. 물론 이외에 DALL-E, Stable Diffusion 과 같은 이미지 생성형 AI, 음성 생성형 AI, 영상 생성형 AI 등 여러 종류의 생성형 AI가 존재합니다. 

생성형 AI는 다음과 같은 특징을 가지고 있습니다.

>**생성형 AI의 특징**
>
>* **창의성** : 인간의 창의성을 모방하여 새로운 콘텐츠 생성
>* **자동화** : 콘텐츠 생성 과정을 자동화 하여 시간과 비용을 절약
>* **정확성** : 학습 데이터의 양과 질에 따라 정확성이 달라짐
{: .prompt-warning}

물론 저작권, 윤리적 문제, 사실 왜곡(hallucination), 개인정보 유출 등 생성형 AI에 관한 문제점 역시 존재하지만, 초기단계이기도 하고 빠르게 발전하고 있는 기술인 만큼 이에 대한 해결책 역시 마련될 것이라 생각합니다 🙃🙃

그중에서도 오늘 알아볼 `ChatGPT`, `Bard`, `CLOVA X`와 같이 가장 널리 알려져 있는 대화형 AI는 어떤 기술이 사용되었는지 간단하게 알아보겠습니다. 

### 대화형 AI
대화형 AI는 `자연어 처리(Natural Language Processing, NLP)` 기술을 통해 사용자와 인간과 같은 대화를 나눌 수 있는 인공 지능 시스템입니다. 

> **자연어란?**  
>
> 컴퓨터에서 사용하는 프로그램 작성 언어 또는 기계어와 구분하기 위해 인간이 일상생활에서 의사소통을 위해 사용하는 언어를 가리키는 말.  
> 
> 쉽게 말해 `사람이 일상적으로 사용하는 언어`입니다.
{: .prompt-tip}

NLP는 이러한 자연어의 의미를 분석해서 컴퓨터가 처리할 수 있도록하는 즉, 쉽게 말해 `컴퓨터에게 인간의 언어를 가르치는 과정`입니다.

><details>
><summary>컴퓨터가 사용하는 언어는 무엇일까?</summary>
><div markdown="1">
> * `기계어`는 컴퓨터가 직접 이해하고 실행할 수 있는 언어로, 0과 1로 이루어진 이진수로 표현됩니다. 사람이 이해하기 어렵기 때문에 다른 언어로 번역해야 합니다. <br>
> * `어셈블리어`는 기계어와 1:1로 대응되는 기호로 이루어진 언어로, 기계어보다 사람이 이해하기 쉽습니다. 하지만 여전히 어렵기 때문에 고급 언어가 등장하게 되었습니다. <br>
> * `고급 언어`는 인간이 일상생활에서 사용하는 자연어와 비슷한 형태와 구조를 가진 언어로, 대표적으로 C, Java, Python 등이 있습니다. <br>
> 
> 쉽게 비교하자면 인간이 이해하기 쉬울수록 컴퓨터가 이해하기 어렵고, 컴퓨터가 이해하기 쉬울수록 인간이 이해하기 어려운 것이죠 <br>
></div>
></details> 
{: .prompt-tip }

자연어 처리의 과정은 음성이나 텍스트 등으로 입력된 자연어를 컴퓨터가 이해하는 `자연어의 이해(Natural Language Understanding, NLU)`와 컴퓨터가 이해하고 처리한 데이터를 다시 자연어로 생성해내는 `자연어의 생성(Natural Language Generation, NLG)`으로 나뉘는데요. 

이해를 돕기 위해 그림을 준비해봤습니다.

![NLP](NLP.png)
_자연어 처리_

`자연어 이해` 과정을 통해 대화형 AI가 언어를 처리하고 사용자의 의도와 문맥을 이해하고, `자연어 생성` 과정을 통해 상황에 맞는 적절한 응답을 언어적으로 자연스러운 문장으로 구성합니다. 이런 식으로 AI와 사람이 대화할 수 있다고 생각하면 될 것 같습니다. 물론 이 과정에서 일어나는 분석 과정도 있지만, 그 부분에 대해서는 생략하도록 하겠습니다 ㅎㅎ

자 그럼 우리는 생성형 AI, 그중에서도 대화형 AI에 대해 알아보았습니다. 그럼 이제 본격적으로 HyperCLOVA X에 대해 알아봐야겠죠? 🚗💨💨

## HyperCLOVA X 소개

![HyperClova X](HyperClovaX.jpg)
_네이버 HyperCLOVA X_

지난 2021년 네이버에서 HyperCLOVA 를 출시한 적이 있었습니다. 그때는 지금처럼 생성형 AI 에 대한 관심이 크지 않던 때라 아마 모르시는 분들이 꽤 계실듯한데요.

![HyperClova 출시](HyperClova 출시.png)
_HyperCLOVA_

2020년 5월에 GPT-3가 처음 공개된 이후로 우리나라(네이버)가 전 세계에서 세 번째로 발표했습니다.  
(수백억 개 이상의 파라미터를 가진 언어 생성 AI 기준)

이러한 HyperCLOVA의 업그레이드 모델인 HyperCLOVA X는 네이버의 `초대규모(HyperScale) AI` 입니다. 굉장히 초대규모를 강조하는 것 같은데, 자 그럼 초대규모 AI는 무엇이느냐?

바로 말 그대로 대규모 데이터와 파라미터를 가진 다양한 종류의 AI모델을 포괄하는 개념입니다. 여기서 초대규모 AI는 대규모 언어모델 (Large Language Model, LLM)을 포함하는 포괄적인 개념으로 이해하시면 될 것 같습니다.

### 특징
HyperCLOVA X는 LLM의 한계인 사실 왜곡(hallucination), 수식 연산, 정의하지 않은 정보 제공 등의 어려움을 보완하여 더 좋은 성능과 품질을 제공하는데요.

이 뿐만 아니라 CLOVA Studio를 통해 직접 AI 서비스를 만들 수 있게 도와주는 개발 도구도 존재합니다. 기업의 자체 보유 데이터를 학습시켜 이에 최적화된 AI 서비스를 구현할 수 있다고 합니다.

> **HyperCLOVA X의 특징**
>
> * **생산성 향상** : 개인과 기업의 효율 향상을 위한 도구로 정보 탐색, 지식 습득, 반복 업무, 커뮤니케이션, 콘텐츠 창작 등 다양한 분야의 편의성을 높여 작업 시간 단축과 자동화에 기여
> * **생태계 확장** : 네이버의 다양한 서비스뿐만 아니라 외부 서비스와 연결되어 AI 생태계 확장 및 최신 정보 제공
> * **AI 커스텀** : CLOVA Studio를 통해 기업이 보유한 자체 데이터 셋을 활용한 특화된 LLM 구축
{: .prompt-warning }

기본적으로 생성형 AI의 특징을 계승하지만, `AI를 사용자의 뜻에 따라 폭넓게 사용`할 수 있다는 점이 가장 큰 특징인 것 같습니다 🤩

> **사실 왜곡(Hallucination, 할루시네이션) 이란?**
> 
> - AI 언어 모델에서 '할루시네이션'은 주어진 데이터 또는 맥락에 근거하지 않은 잘못된 정보나 허위 정보를 생성하는 것을 뜻합니다. 즉, 잘 모르는 것에 대해 질문 했을 때 거짓된 답변을 자신있게 대답하는 문제입니다.  
> 할루시네이션을 줄이기 위해서는 고품질의 학습 데이터를 제공함과 동시에, 자연어 처리 기술을 통해 문맥을 분석하고 추가 정보를 제공하는 등의 노력이 필요합니다. 또한 사용 목적에 맞는 데이터를 이용해 기본 모델을 미세하게 조정하는 파인 튜닝을 진행하기도 합니다.  
> HyperCLOVA X의 경우,  다양한 산업 분야에 특화될 필요가 있어 RAG를 비롯한 롱 컨텍스트, 자체 기술로 환각을 해소하고 있습니다.  
>[관련 기사 바로가기](https://n.news.naver.com/mnews/article/092/0002309091?sid=105, "국내 기업들은 'AI 허언증' 어떻게 줄일까")  
{: .prompt-tip }

### HyperCLOVA X 를 만날 수 있는 서비스
HyperCLOVA X를 적용한 내부 사례에 대해서 소개해드리도록 하겠습니다!

다들 아시다시피 ChatGPT, Bard 와 같은 대화형 AI 서비스인 `CLOVA X`, 생성형 AI 검색 서비스인 `Cue:`, 창작과 생산을 위한 도구인 `CLOVA for Writing` 등 여러 네이버 서비스가 존재하는 반면, 위에서 말씀드렸던 특징 중 `생태계 확장`과 `AI 커스텀` 과 같이 다양한 서비스와 접목되어 사용된것을 확인할 수 있습니다.

<!--
대표적으로 4가지 제품을 가져와보았습니다. 사실 적용된 제품이 엄청 많은데, 다 소개드리기엔 너무 많네요 ㅎㅎ 

특히, 현대백화점의 경우 원래 카피라이팅 업무에만 `2주`가 걸렸으나, 루이스 활용하면 `3시간`이면 끝난다고 합니다. AI 활용 정말 대단하지 않나요?  

> [HyperCLOVA X 내부 사례](https://clova.ai/hyperclova#case, "HyperCLOVA X 내부 사례")

![루이스](루이스.png){: width="700" height="1000"}
_마케팅 문구 제작 카피라이팅 시스템 루이스_

![챗와인](챗와인.png){: width="700" height="1000"}
_사용자의 취향 분석 후, 어울리는 와인을 추천하는 챗와인_

![AI템플릿](AI템플릿.png){: width="700" height="1000"}
_키워드 입력으로 높은 퀄리티의 문장을 생성하는 AI 템플릿_

![아나트](아나트.png){: width="700" height="1000"}
_간단한 설정으로 창의적인 스토리라인을 생성하는 아나트_

AI가 발달하면서 정말 많은 서비스들이 연계하여 나오고 있는데, 생산성 향상에 큰 도움을 줄 것 같습니다.
-->
### AI의 윤리 문제에 대한 네이버의 노력!
AI가 굉장히 똑똑해지면서, 편향성, 공정성, 악용 등에 관련한 윤리적 문제 또한 발생할 수 있습니다. 

네이버에서는 이를 통해 사회적으로 민감하거나 편향된 발언을 하지 않도록 하는 부분을 데이터로 만들어 더욱 안전한 모델을 만들 수 있도록 노력을 했다고 합니다.

실제 `민감한 질문에 대한 응답`, `사회적 편향 위험 완화`에 관련한 논문을 게재하기도 하였습니다. 특히 데이터셋을 만든 과정에 대한 프로토콜을 설명해놓았기 때문에, 언어, 민감 이슈를 가리지 않고 안전한 모델을 만들 수 있다고 합니다.

[SQuARe: A Large-Scale Dataset of Sensitive Questions and Acceptable Responses Created Through Human-Machine Collaboration](https://arxiv.org/abs/2305.17696, "SQuARe")

![SQuARe](SQuARe.png)

[KoSBi: A Dataset for Mitigating Social Bias Risks Towards Safer Large Language Model Application](https://arxiv.org/abs/2305.17701, "KoSBi")

![KoSBi](KoSBi.png)

[Korean Safety Benchmarks](https://github.com/naver-ai/korean-safety-benchmarks, "Korean Safety Benchmarks")

![KSB](KSB.png)
_Korean Safety Benchmarks_Github_

네이버에서는 이뿐만 아니라 AI 윤리 준칙을 만들고 준수하고 있습니다.

[네이버 AI 윤리 준칙](https://www.navercorp.com/value/aiCodeEthics, "네이버 AI 윤리 준칙")

![Naver AI 윤리 준칙](Naver AI 윤리 준칙.png)
_네이버 AI 윤리 준칙_

## CLOVA X를 활용해보다!
대화형 AI인 CLOVA X 를 사용해봐야겠죠! 간단한 질문을 CLOVA X 에게 물어봤습니다.

### 첫 번째 질문. 별찍기 코드 작성
AI 가장 능숙할법한 언어 파이썬으로 오른쪽 위가 직각인 삼각형에 대한 별찍기에 대해 질문해보겠습니다.

> Q. 오른쪽 위가 직각인 삼각형 별표로 출력하는 코드를 파이썬으로 작성해줘
{: .prompt-warning }

<!--
**1. ChatGPT**  
역시 ChatGPT 답게 정확한 코드를 주석과 함께 작성해줬습니다. 다만, 다른 대화형 AI와는 다르게 결과물에 대한 출력은 없는 모습입니다. 

![chatgpt1](chatgpt1.png)
_질문에 대한 ChatGPT 답변_

코드에 대한 실행 역시 제가 원한대로 잘 나왔습니다. 

![chatgpt1result](chatgpt1_result.png){: width="500" height="600"}
_코드에 대한 실행 결과_

**2. Bard**  
바드도 생각보다 질문에 대한 답이 정확하지 않습니다. 두가지의 코드를 작성해줬으나, 두 코드 모두 각기 다른 별을 출력하는 코드이고, 심지어 바드는 자신이 제시한 두가지의 코드가 같은 코드이지만 아래의 코드가 더 효율적이다 라고 하는 걸 보니 정확성이 많이 떨어지는 모습을 볼 수 있습니다.  

![bard11](bard1_1.png)
_질문에 대한 바드의 답변1_

![bard12](bard1_2.png)
_질문에 대한 바드의 답변2, 답변이 상당히 길다_

코드에 대한 실행중 하나는 제대로 된 별을 출력하지 못하고 있습니다.

![bard1result](bard1_result.png){: width="500" height="600"}
_코드에 대한 실행 결과_
-->
코드와 코드에 대한 출력을 답변해줬으나, 코드에 대한 출력이 잘못되었고, 잘못된 코드를 답변해주었습니다. 조금은 아쉬운듯한 느낌이 들긴 하네요.

![clovax1](clovax1.png)
_질문에 대한 CLOVA X의 답변_

![clovax1result](clovax1_result.png){: width="500" height="600"}
_코드에 대한 실행 결과_

### 두 번째 질문. 코드에 대한 주석 작성
다음은 사용자가 작성한 코드에 대한 주석 작성입니다. 주석을 작성하려면 사용자가 입력한 코드가 어떤 일을 하는지 알아야겠죠? 간단하게 이중 연결 구조에서 사용하는 노드 구조체에 대한 코드를 제시해봤습니다.

```c++
struct Node{
	int item{0};
	Node* prev{nullptr};
	Node* next{nullptr};
	Node() = default;
	Node(int item, Node* prev = nullptr, Node* next = nullptr)
	: item{item}, prev{next}, next{next}{}
};
```
> Q. 이 코드에 대한 주석 작성해줘
{: .prompt-warning }

<!--
**1. ChatGPT**  
ChatGPT는 역시 질문에 대한 주석 작성과 코드에 대한 설명을 구체적으로 변수명을 언급하면서 설명을 해주었고, 또한 어떤 자료구조에서 사용되는 노드 구조체인지까지 답변해주었습니다.

![chatgpt2](chatgpt2.png)
_질문에 대한 ChatGPT 답변_

**2. Bard**  
바드는 코드에 대한 주석과 답변이 상당히 길었는데, 역시 구체적으로 답변해주었고, 물어보지도 않은 장점에 대해 알려주었습니다. 다만, 자료구조에 대해 `이중 연결 리스트`가 아닌 `연결 리스트`라고 답변을 하면서 상당히 애매한 답변을 해주었습니다.

![bard21](bard2_1.png)
_질문에 대한 바드의 답변1_

![bard22](bard2_2.png)
_질문에 대한 바드의 답변2, 답변이 여전히 길다_
-->
코드에 대한 주석보다는 설명만 해주었습니다. 많이 간결한 모습이네요 ㅜㅜ

![clovax2](clovax2.png)
_질문에 대한 CLOVA X의 답변_

### 세 번째 질문. 길 찾기
이번엔 역명을 제시하고, 해당 역에서 목적지 역까지 어떻게 가는지 질문해보겠습니다. 

> Q. 판교역에서 홍대입구역까지 가는 방법 알려줘
{: .prompt-warning }

<!--
**1. ChatGPT**  
어느정도 예상은 하긴 했는데, 이정도일줄은 몰랐습니다. 일단 판교역에는 신분당선과 경강선만 존재합니다. 경강선은 KTX가 아니고, 또한, 분당선 존재하지 않습니다. 버스 역시 마찬가지로 저보고 알아서 찾으라네요.

![chatgpt3](chatgpt3.png)
_질문에 대한 ChatGPT 답변_

**2. Bard**  
바드는 답변하다가 뇌정지가 왔는지 답변의 제대로 된 인덱싱 없이 보기 힘들게 출력해주었고, 판교역에 있지도 않은 1호선과 500번 버스를 만들어줬습니다.

![bard3](bard3.png)
_질문에 대한 바드의 답변_
-->
제일 정확한 루트를 답변해주었고, 소요시간과 요금 역시 비슷합니다. 

![clovax3](clovax3.png)
_질문에 대한 CLOVA X의 답변_

### 네 번째 질문. 여행 계획 세우기
이번엔 대화형 AI에게 여행 코스에 대한 질문을 해보았습니다. 

> Q. 2박 3일로 부산 여행 계획중인데 코스좀 짜줘
{: .prompt-warning }

<!--
**1. ChatGPT**  
일차별로 여행에 대한 완전한 코스를 작성해줬습니다. 또한, 코스별로 대중교통으로 대부분 10~20분 거리로 상당히 가까운 주변 관광명소로 추천해주었습니다. 다만, 부산 국립박물관은 부산 국립해양박물관인지 국립일제강제동원 역사관인지 제대로 된 정보를 제공해주지 않았습니다.

![chatgpt41](chatgpt4_1.png)
_질문에 대한 ChatGPT 답변_

![chatgpt42](chatgpt4_2.png)
_질문에 대한 ChatGPT 답변_

**2. Bard**  
바드 역시 일차별로 여행에 대한 완전한 코스를 작성해줬고, 여행에 대한 팁까지 작성해줬습니다. 다만, 코스의 장소별로 이동시간이 대부분 30~40분 정도로 길었습니다.

![bard41](bard4_1.png)
_질문에 대한 바드의 답변1_

![bard42](bard4_2.png)
_질문에 대한 바드의 답변2_

![bard43](bard4_3.png)
_질문에 대한 바드의 답변3_
-->
일차별로 코스를 짜주진 않았지만, 관광 추천지에 대한 자세한 설명과 링크를 제공하고 있습니다. CLOVA X의 플러그인인 `스킬`을 사용하니 기존보다 더 풍부한 답변을 받게 되었습니다.

![clovax4](clovax4.png)
_질문에 대한 CLOVA X의 답변_

### 다섯 번째 질문. 글 요약하기
문장생성 뿐만 아니라, 요약 역시 생성형 AI의 활용 방법이라 할 수 있는데요. 이번엔 [삼성 SDS, 생성형 AI의 미래](https://www.samsungsds.com/kr/insights/future_of_generative_ai_1.html, "삼성 SDS, 생성형 AI의 미래") 이 글에 대해 1000자 이내로 요약해달라고 해보겠습니다.

> Q. [https://www.samsungsds.com/kr/insights/future_of_generative_ai_1.html](https://www.samsungsds.com/kr/insights/future_of_generative_ai_1.html) 이 사이트의 내용을 1000자 이내로 요약해줘
{: .prompt-warning }

<!--
**1. ChatGPT**  
정확한 내용을 토대로 `요약`을 해주고 있습니다. 글자 수도 1000자 이내로 요구한 내용도 잘 맞춰서 답변해주었습니다.

![chatgpt5](chatgpt5.png)
_질문에 대한 ChatGPT 답변_

**2. Bard**  
바드는 요약이라면 요약이지만, 글의 인덱스를 기반으로 적당히 몇몇부분을 때온듯한 느낌이 듭니다. 요약이라고 하기엔 어렵고, 짜집기라고 볼 수 있겠습니다. 또한, 1000자 이내로 요청을 했으나, 공백을 제외하고도 1000자가 넘는 모습을 보여줬습니다.

![bard51](bard5_1.png)
_질문에 대한 바드의 답변1_

![bard52](bard5_2.png)
_질문에 대한 바드의 답변2_

![bard53](bard5_3.png)
_바드는 1000자가 어느정도인지 잘 모르는듯한 느낌이다_
-->

정확한 내용을 토대로 `요약`을 해줬습니다. 글자 수 역시 1000자 이내로 잘 맞춰서 답변해주었습니다.

![clovax5](clovax5.png)
_질문에 대한 CLOVA X의 답변_

### 사용 후기
아직은 초기 단계라 확실히 조금 아쉽다고 느껴지는게 사실이지만, 베타버전이기에 충분히 납득 가능했습니다. 뿐만 아니라 다른 AI에 비해 확실히 한국인, 한글을 대상으로 가장 큰 강점을 가진듯 한 느낌이 들었습니다. 앞으로의 발전이 기대되네요!

## 마무리하며
지금까지 생성형 AI와 네이버의 `초대규모 언어모델 HyperCLOVA X` 에 대해서 알아보았고, 이를 적용한 제품 그리고 대화형 AI를 비교해보았습니다. 더 자세한 내용을 가지고 이론과 함께 설명해 드리고 싶었으나, 여러 이슈로 인해 다 전달하지 못해 아쉽네요..!

다만 관련하여 HyperCLOVA X 에 대한 소개 영상을 끝으로 마무리 하겠습니다!

[PLAY NAVER - AI 일타강사가 알려주는 초대규모 AI 의 모든 것](https://www.youtube.com/watch?v=f9hPRt7f-ZI, "PLAY NAVER - AI 일타강사가 알려주는 초대규모 AI 의 모든 것")

{% include embed/youtube.html id='f9hPRt7f-ZI' %}


>**- 본 포스팅은 네이버 클라우드 - AI RUSH 앰배서더 활동의 일환으로 작성되었습니다.**  
>**- 상세 내용은 앰배서더 개인 의견으로 회사의 입장을 반영하지는 않습니다.**  
{: .prompt-info }

