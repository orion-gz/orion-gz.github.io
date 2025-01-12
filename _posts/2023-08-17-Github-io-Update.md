---
title: github.io - 깃허브 블로그 업데이트 - Ver.01
author: orion
date: 2023-08-17 11:57:00 +0900
categories: [github.io, Update]
tags: [github.io, 깃허브 블로그, jekyll, chirpy, chirpy 꾸미기, chirpy 커스터마이징]
img_path: /assets/img/posts/2023-08-17/Github-io-update/
---

## 깃허브 블로그 업데이트 - Ver.01
깃허브 블로그를 시작한지 이제 6일차인데요. 사실 하루에 하나씩 포스팅은 `무적권` 하려 했는데..😅

여기저기 꾸미려고 하다보니 굉장히 많은 삽질을 해버렸습니다. 삽질도 삽질인데, html, css, js 이 3가지는 배운적이 없기도 하고, jekyll 블로그 자체도 잘 모르다 보니 .. 배우고 익히느라(물론 `야매`입니다) 덕에 잡아먹은 시간이 2-3일 정도 걸려 포스팅을 못하게 됐읍니다.

다만, 커스터마이징 하면서 내가 원하는대로 동작하니 정말 마음에 들더라구요.. 물론 디자인 감각이 떨어져서 잘 꾸미지는 못했네요 ㅜ 

그래도 당분간은 요렇게 정착해서 포스팅 진행하려 합니다. 아직 제가 원하는 기능을 구현하진 못했는데, 한번 커스텀 하면 너무 오래걸려서 이건 쫌 고민해봐야 될 것 같아요.

[Chirpy 테마 데모 페이지](https://chirpy.cotes.page/ "chirpy demo page")를 보시면 제 블로그와 `살짝` 다른 느낌이 있습니다 ㅎㅎ

## Chirpy Theme 커스터마이징(꾸미기)
여튼 본론으로 들어가서 개인적으로 커스터마이징 해서 업데이트 한 부분이 몇가지 있습니다.

### 블로그 홈

<br>

![default-blog-home](default-blog-home.png)
_기본 블로그 홈 화면_

<br>

바로 홈화면의 `대문?` 무튼 (저번에도 `개설`을 `개통`이라 했었는데 ㅋㅋㅋㅋ 지적 부탁드립니다),  포스팅한 글만 리스트로 나열되어 있어서 굉장히 심심하더라구요. 개인적으로 사진 썸네일이라도 넣으면 그나마 덜 심심한데, 포스팅하는 글들이 다 이런것들이라서 😅.. 사진을 넣을게 없습니다 ㅜ

<br>

![post-list](post-list.png)
_굉장히 노잼인 블로그.._

<br>

그래서 

무

언

갈

넣어줬습니다..!

<br>

![blog-home](blog-home.png)
_업데이트 한 블로그 홈 화면_

<br>

짜짠! 사실 별건 아니고 간단하게 대문에 html 애니메이션? 효과를 넣고 싶었는데, 저는 디자인 그런거 잘 못해서리.. 구글링 해봤는데 간단하면서 이쁜게 없더라구요 ㅎ 그래서 그냥 나쁘지 않은거 찾아서 넣어줬습니다.

<br>

![text-animation](text-animation.gif)
_대단한건 아니고 그냥 움직입니다.. 예.._

<br>

### 사이드바
그리고 블로그 조회수를 좀 넣어볼까 했었는데, github repo 의 클릭수를 알 수 있는 [`hits`](https://hits.seeyoufarm.com/) 가 있어서 동일하게 적용이 가능하나 가장 큰 문제는 `새로고침하면 계속 올라갑니다..` 그래서 마침 구글 애널리틱스를 사용하고 있으니 정확한 통계를 가져다주는 요녀석의 `API` 를 사용해서 블로그랑 포스트 조회수를 넣어볼 예정입니다(이것도 굉장한 삽질 할 예정 😂). 

<br>

![profile](profile.png)
_로컬에서 블로그 빌드한거라 다르게 나오는듯..!_

<br>

### 검색 바
검색 바 역시 조금 바꾸어줬습니다. 아무래도 너무 밋밋해서 적당한걸루다가 이식해왔습니다. 게다가 모바일에서는 검색할 때 화면이 가려지면서 태그가 보이는데, pc에서는 그렇지 않더라구요. 그래서 `사람들이 뭘 알고 검색을 할까?` 싶어서 태그도 넣어줬습니다.

<br>

![default-search-bar](default-search-bar.png)
_기본 블로그 검색 바_

<br>

![search-bar](search-bar.gif)
_업데이트 한 검색 바_

<br>

![default-m-search-bar](default-m-search-bar.png){: width="390" height="844"}
_기본 블로그 모바일 검색 바_

<br>

![m-search-bar](m-search-bar.gif){: width="390" height="844"}
_업데이트 한 모바일 검색 바_

<br>

조금 부자연?스러운 효과가 있긴 한데 이정도 선에서 만족하려고 합니다.<br><br>

그리고 이전 기본 테마에서는 상단바가 `fixed` 되어 있지 않아서 굉장히 불편했었습니다(특히 모바일에서). 그래서 `back_to_top` 버튼을 넣어준듯 싶었는데, 요녀석은 제가 `플로팅 버튼`으로 여러 기능을 넣어 `요리`해보는걸로 하고, 검색 바 바꾼 김에 이것도 같이 `fixed` 시켜줬습니다. 

물론 스크롤에 반응하여 사라지고 나타나도록 스크립트까지 넣어줬습니다. 

> **어지러움 주의!!**
> 
> 클릭해서 하나씩 보시길 권장합니다
{: .prompt-warning}

<br>

![default-scroll](default-scroll.gif)
_기본 블로그 상단바_

<br>

![scroll](scroll.gif)
_업데이트 한 상단바_

<br>

![default-m-scroll](default-m-scroll.gif){: width="390" height="844"}
_기본 블로그 모바일 상단바_

<br>

![m-scroll](m-scroll.gif){: width="390" height="844"}
_업데이트 한 모바일 상단바_

<br>

### 프롬프트
요거는 개인적으로 좀 많이 사용하게 됐는데, 디자인이 4가지밖에 없어서 2개정도 추가해줬습니다 ㅎ  
조금 아쉬운건 `색` 정도 입니다. 아이콘은 좋은게 많은데, 색이 적당한게 없어서 어디 참고할만한 사이트좀 구글링 해봐야겠네요..!

<br>

![prompt](prompt.png)

<br>

> 코드 컴파일 성공!!
{: .prompt-success}

> 코드 컴파일 에러!!
{: .prompt-failed}

<br>

### 공유 버튼
요것도 너무 밋밋하다고 느껴져서 다른걸루 바꿔줬습니다. 이게 훨씬 깔끔하고 이쁘네요. 

![default-share-btn](default-share-btn.png)
_기본 블로그 공유 버튼_

![share-btn](share-btn.gif)
_업데이트 한 공유 버튼_

이렇게 `hover`시 공유 링크가 나타나도록 교체하니 더 ~~깔끔한듯한 느낌..?~~

## 첫 업데이트 소감
지금까지 바꾼것들 다 포함해서 2-3일 걸렸는데,, 정말 많은 시행착오도 있었고, jekyll 사용하는 방법을 몰라 헤매이던 적도 많았습니다. 그래도 지금까지 대부분은 다 해결해서 잘 사용하고 있어서 다행인듯 합니다..! 다음에는 이 경험을 기반으로 커스터마이징 하는 방법도 올려보겠습니다.

## 다음 업데이트 예정(?)
* Google Analytics API 를 이용한 블로그 및 Post `조회수` 추가
* Applause 혹은 좋아요와 같은 `리액션 버튼` 추가
* `Floating 버튼 마개조`