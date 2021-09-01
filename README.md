# 혼수리(Honsuri) 웹 서비스 - Frontend
혼술족을 위한 온라인펍 웹 서비스

## 목차
1. [웹 서비스 소개](#1.-웹-서비스-소개)
2. [프로젝트 구성](#2.-프로젝트-구성)
3. [구현 기능](#3.-구현-기능)
4. [와이어프레임](#4.-와이어프레임)
5. [역할](#5.-역할)


## 1. 웹 서비스 소개

- 바로가기 : [https://vigilant-bassi-96f0ac.netlify.app/](https://vigilant-bassi-96f0ac.netlify.app/)

<img src="https://user-images.githubusercontent.com/45763812/130172366-0e79280d-3ba3-4b21-8249-24ef484daad6.jpg" width="50%" height="50%"/>

- **혼술족을 위한 온라인펍 웹 서비스** 
- **기획 의도** : 
    COVID-19의 확산은 집에서 혼자 술을 즐기는 '혼술족'의 증가로 이어졌다. 이에 '혼술족'을 타겟으로 웹 서비스를 개발했다. 사용자는 혼자 사색에 잠겨 술을 즐기고 싶을 때 혼수리 웹 사이트를 통해 분위기를 낼 수 있다. 좋은 음악과 예쁜 디자인, 그리고 고민을 털어낼 수 있는 방명록을 통해 집에서도 즐겁게 혼술을 즐길 수 있다.
- **주요 기능** :
    - 메인의 음악 플레이어를 통해 음악을 즐길 수 있는 기능
    - 칵테일을 제조하는 레시피를 필터링 해 찾고 북마크할 수 있는 기능
    - MBTI 테스트에 따른 칵테일 추천 기능
    - 방명록과 덧글 CRUD 기능
    - 방명록 좋아요 기능
    - 회원가입, 로그인, 로그아웃, 마이페이지 기능


## 2. 프로젝트 구성
### **기술 스택 및 라이브러리**

| 분류 | Tools | 목적 |
| ------ | ------ | ------ |
| Frontend | VueJS | Web Framework |
| Frontend | VueX | 데이터 상태 관리 |
| Frontend | Netlify | Hosting |
| Backend | Django | Web Framework |
| Backend | MySQL | Database |
| Backend | drf-yasg | API 문서화 |
| Backend | DRF | Restful API Server 구축 |
| Backend | CKEditor | Rich Text 사용 |

- Frontend 레포지토리 [https://github.com/liketoy/honsuri-frontend](https://github.com/liketoy/honsuri-frontend)
- Backend 레포지토리 : [https://github.com/liketoy/honsuri-backend](https://github.com/liketoy/honsuri-backend)

## 3. 구현 기능
  - Authentication : 회원가입 / 로그인 / 로그아웃 / 아이디 찾기 / 마이페이지(내가 쓴 글, 북마크된 레시피, 회원정보수정, 탈퇴)
  - 방명록 : 방명록(작성, 리스트, 검색, 좋아요), 댓글 (작성, 리스트)  
  - 대화하기 : MBTI로 어울리는 칵테일 찾아주기
  - 음악 : 음악 플레이어
  - 레시피 : 레시피(메인, 디테일, 필터링, 북마크)

## 4. 와이어프레임
- 필수/선택 구현 기능을 바탕으로 상세한 와이어프레임을 작성하였다. : [와이어 프레임 링크](https://xd.adobe.com/view/e12445c5-9c40-40c8-4a5c-7f21ebde2c3f-9715/screen/4833dd2a-440e-4ab7-942c-e83338cc4a43/specs/)


## 5. 역할

| 이름 | 담당 업무 |
| ------ | ------ |
| Woody | Frontend |
| Elena | Frontend |
| Jae | Frontend |
| Joy | Frontend |
| Linda | Backend |
| Jinu | Backend |
| Yunnie | Backend |
