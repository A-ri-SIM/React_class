\*라이브러리
=>플러그인들의 집합체
=>플러그인은 다른 개발자가 만든 코드를 여러 유저에게 공유하여 사용하는 코드
=>코드를 가져다 쓰기 때문에 내 코드에 마음대로 커스텀 할 수 있음

\*프레임워크
=>이미 정해져 있는 코드를 규칙에 맞춰서 사용함
=>만들어져 있는 유용한 기능이 있기 때문에 개발 시간을 단축시킬수 있음

\*js
=>브라우저 설치하면 기본적으로 깔려있음

\*node js
=>브라우저 밖에서 사용하는 자바스크립트

\*서버를 open...

1.node js 설치
=>lts버전 설치

2.cmd 명령어(window)
=>dir: 어떤 파일 및 폴더가 있는지 확인
=>cd 경로명: 폴더 경로 변경

2-1.터미널 명령어(mac)
=>ls: 어떤 파일 및 폴더가 있는지 확인
=>cd 경로명: 폴더 경로 변경

3.리액트 설치
1)cmd로 폴더 경로 지정
2)npm -g install create-react-app
3)npx create-react-app 프로젝트명

3-1.mac기준 1)터미널로 폴더 경로 지정
2)npx create-react-app 프로젝트명

4.리액트 실행
=>vscode에서 ctrl+j 터미널창 열기
=>npm run start

5.vscode 세팅

---

\*JSX 문법
=>리액트에서 사용할 수 있는 문법으로 자바스크립트 코드 내부에 html태그를 사용할 수 있음

### 규칙

1.jsx는 반드시 태그 하나 이상 존재해야함
2.jsx는 반드시 태그가 2개 이상일땐 부모 태그로 감싸줘야 됨
단, 부모 태그를 사용할 일이 없거나 모양만 있는게 싫다면
<></> 빈태그를 사용해줘서 묶어줘도 됨 이 태그를 fragment태그라고 함

### 리액트의 특징

=>SPA(Single Page Application) 사용으로 어플리케이션 속도가 빠름

### react router dom

=>리액트에서 경로를 이동할때 사용
=>Router -> Routes -> Route
=>Route는 path(경로)와 element(컴포넌트)속성으로 구성
=>HashRouter는 /#/으로 url에 입력해야하며,
BrowserRouter는 일반적으로 경로 지정할때 사용하는 /(슬래쉬) 구성

### Link

=>리액트에선 a태그 대신 react-router-dom에 포함되어있는 Link컴포넌트를 이용
=>to={경로} 속성을 사용하며 경로 지정

### git/github

\*git(기록)
=>지정한 파일 및 폴더를 추적하여 각 파일,폴더의 변화된 부분을 기록하는 파일 관리 툴

\*git hub(저장소)
=>git으로 관리된 파일을 업로드하여 저장소에 저장 및 관리를 할수있는 개발자 플랫폼

\*git hub 저장소 만들기

1. 웹사이트 좌측 상단의 new버튼 클릭
2. Reposotory name : 저장소 이름 등록
3. Description : 저장소 내용(옵션)
4. Public : 공개 저장소(선택)
   Private : 비공개 저장소
5. 하단 create repositiry 클릭으로 저장소 만들기

\*git에 유저 등록하기 (처음만 실행)
=>터미널에서 실행

1. git config --global user.name "아이디"
2. git config --global user.email "메일주소"

\*git 초기화
=>git init

\*만든 저장소에 파일 연동(등록)
=>터미널에서 실행

1. 원격 저장소 연동(등록)
   =>git remote add origin 저장소 주소

2. 현재까지 작업 파일 기록

   1. git add .
   2. git commit -m "기록할 내용"
   3. git push origin master

3. 원격 저장소에 있는 내용 내려받기

   1. 윈도우 : 윈도우 + r 입력하여 regit창 실행 -> cmd 입력하여 커멘트창 열기
      1-1) 터미널 창 명령어
      => cd : 폴더 변경
   2. 터미널 실행

=>git clone 저장소 주소

### useForm

=>폼 관련 패키지(모듈)로 유효성 검사 등 다양한 역할을 쉽게 개발할 수 있음
ex)
const {
register,
handleSubmit,
formState:{ errors, isValid },
} = useForm();

1. register : input 엘리먼트에 적용, useForm에 등록하는 역할
   <input {...register("이름",{
   required : 필수인지 아닌지, ""를 이용하여 에러메세지를 작성할 수 있음
   minLength : {
   value : 8 (최소 작성 길이 지정),
   message : "에러메세지 작성"
   }
   })} />

2. handleSubmit : 폼 이벤트 부분을 담당
3. formState : 폼 상태를 확인함
   =>errors : 유효성 검사 중 에러내용을 가져올 수 있음
   =>isValid : 유효성 검사가 참인지 거짓인지 boolean으로 반환함

\*spread operator (전개 구문)
=> 객체, 배열 등 문법을 전개하여 내부에 있는 내용을 쉽게 가져옴
=> ...배열명
=> ...객체명

\*optional chaining (옵셔널체이닝)
=> 중첩 객체를 에러없이 안전하게 접근할 수 있음
