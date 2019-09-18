
# Day3 of 42

> Today's quiz is based on videos #2.0 to #2.2
  Don't worry, tomorrow we will start coding :) 

- 오늘의 강의: 유튜브 클론코딩 #2.0 to #2.2 
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.  
- 제출기간: 익일 오전 6시까지

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`
- 2.0 What is a Server 
- 2.1 What is Express 
- 2.2 Installing Express with NPM 

<br/>

---

<br/>

## Lecture Summery

<br/>

### What is a Server 
서버란 어떤 특화된 임무를 수행하기 위해 설정된 컴퓨터이다. 지금 사용하고 있는 노트북이나 데스크탑도 서버라는 역할을 하면 서버 컴퓨터로 불린다. 

- 도메인 서버 : 도메인을 관리하는 서버
- 이메일 서버 : 이메일을 관리하는 서버
- 웹서버 : 웹사이트를 관리하는 서버, 호스팅 서버
- 멀티미디어 서버 : 동영상과 음악 파일을 관리하는 서버
- 이미지 서버 : 사진을 관리하는 서버
- 프린터 서버 : 프린터를 공유할 수 있도록 프린팅 작업을 관리하는 서버

<br/>

### What is Express
express는 서버를 만들 수 있는 매우 안정적인 Node.js 프레임워크

<br/>

### Node.js와 NPM 설치하기
Node.js 설치는 아래의 방법으로 할 수 있다. npm의 경우에는 Node.js를 설치시 함께 설치된다.

#### 공식사이트에서 패키지를 다운받아 설치하기
    [Node.js](https://nodejs.org/ko/)
    
<br/>
  
#### Homebrew로 설치하기 

- Homebrew 설치하기 : 아래의 명령어를 터미널에서 실행시켜준다. 
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

<br/>

- Homebrew 사용하기
```
# 버전확인
$ brew -v

# 명령어 확인
$brew help

# 패키지 설치
brew install <패키지이름> 
 
# 패키지 삭제
brew remove <패키지이름>
 
# 패키지 정보
brew info <패키지이름>
 
# 설치한 패키지의 최신버전을 설치
brew upgrade <패키지이름>
 
#설치한 패키지 목록
brew list 또는 brew ls
 
# Homebrew 업데이트
brew update
 
# 시스템 문제 확인
brew doctor
 
# 설치된 패키지의 최신 패키지 버전 확인
brew outdated
 
# 패키지 과거버전을 제거
brew cleanup
```

<br/>

- Node.js 설치하기
```
# 설치하기
brew install node

# Node 확인
node -v

# npm 확인
npm -v
```

    

<br/>

### npm
npm (노드 패키지 매니저/Node Package Manager)은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 
자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다.

- npm init : package.json 생성

    `package.json`
    > {
          "name" : 해당 모듈의 이름을 정의한다.  (이름에 'node' 나 'js' 가 들어가면 안된다.) 
          "version" : 해당 모듈의 버전을 정의한다.
          "description" : 해당 모듈의 추가적인 설명을 정의한다.
          "main" : node에서 해당 package.json 을 탐색할 때 기준이 되는 파일 이름을 정한다.  
                      기본적으로 index 로 설정이 되며, 생략이 가능한 부분이지만 추후 프로젝트가 복잡해진다면 이 항목을 정의 할 필요가 있다. 
          "scripts" : package.json 이 있는 폴더에서 추가로 실행 할 스크립트 명령어를 정의한다. 노드 명령이나 쉘 스크립트를 적어주면 된다.  
                       start, test, build 등을 정의한다.
          "author" : 해당 모듈의 제작자를 정의한다.
          "liecnse" : 해당 모듈의 라이센스를 정의한다.
          "dependencies" : 일반적으로 package.json 에 가장 많은 정보가 입력되는 곳 이며 여기서 모듈의 의존성을 정의 한다. 
                          해당 모듈이름과 버전을  키 : 값 의형식으로 정의 되어있다.  
          "devDependencies" : 해당 모듈의 실행에 필요한 또는 개발에 필요한 모듈의 의존성을 입력하는 곳 이다. 
      }
    
```
    {
      "name": "wetube",
      "version": "1.0.0",
      "description": "",
      "author": "alley",
      "license": "ISC",
      "dependencies": {
        "@babel/core": "^7.3.3",
        "@babel/node": "^7.2.2",
        "@babel/preset-env": "^7.3.1",
        "body-parser": "^1.18.3",
        "cookie-parser": "^1.4.4",
        "dotenv": "^7.0.0",
        "express": "^4.16.4",
        "helmet": "^3.15.1",
        "mongoose": "^5.4.19",
        "morgan": "^1.9.1",
        "pug": "^2.0.3"
      },
      "scripts": {
        "start": "nodemon --exec babel-node init.js --delay 2"
      },
      "devDependencies": {
        "nodemon": "^1.18.10"
      }
    }
```

<br/>

- 설치   
    package.json은 프로젝트에 대한 명세라고 할 수 있다. 해당 프로젝트의 이름, 버전, 사용되는 모듈 등의 스펙이 정해져 있으며, 이 package.json을 통해 모듈 의존성 모듈 관리도 진행할 수 있다. 만약 어떤 오픈 소스를 다운 받을 때 이 package.json만 있다면 해당 오픈 소스가 의존하고 있는 모듈이 어떤 것인지. 그리고 그 모듈들을 아래 명령어로 한 번에 설치할 수 있다.
```
npm install
```

<br/>

---

<br/>

## Homework 

### Quiz


1. A server is just a computer *   
    1) `True`  
    2) False   

2. A server has to be online 24/7 *   
    1) `True`   
    2) False   

3. A server can be on a private network *   
    1) `True`   
    2) False   

4. A server is a computer without network access *   
    1) True   
    2) `False`   

5. Any computer can be a server *   
    1) `True`   
    2) False   

6. What is a framework *   
    1) `Lots of pre-made functions and utilities that somebody else wrote and that we can use`   
    2) Is a philosophy that we follow when we are programming   

7. How does a framework help us *   
    1) It makes us better developers so we can make more money   
    2) `It helps us accomplish complex things in few lines of code`   

8. What is the most popular NodeJS Framework *   
    1) KoaJS   
    2) SailsJS   
    3) `ExpressJS`   

9. ExpressJS is not JS *   
    1) True   
    2) `False`   

10. What does NPM stand for? *   
    1) Node Power Machine   
    2) Node Powder Manager   
    3) Node Package Mama   
    4) `Node Package Manager`   

11. What is NPM *   
    1) It's a tool that makes my NodeJS code run faster   
    2) `Is a tool to download and share NodeJS packages`   

12. ExpressJS is published as an NPM Pacakge *   
    1) `True`   
    2) False   

13. How can I create a NodeJS project *   
    1) `Create a package.json`   
    2) Run 'node init'   

14. What is "package.json" *   
    1) Is a file where I write the code for my server   
    2) `Is a file where I save information about my project and the packages it needs to run`   
    3) Is a file to save the user's data   

15. How can I install Express *   
    1) node install express   
    2) npm add express   
    3) `npm install express`   

16. What is the node_modules folder *   
    1) `Is where all the installed packages go`   
    2) Is where I put the code I want to publish   
    3) Is where I put the code I don't need anymore   

17. Why I should never share / upload my "node_modules" *   
    1) Because the code there is private   
    2) `Because I can just share the package.json`   
    3) Because I don't have the upload license   

18. If I delete "node_modules" how can I reinstall my dependencies from my package.json *   
    1) Running: "npm install dependencies"   
    2) `Running: "npm install"`   
    3) Running: "npm reinstall"   