# Day4 of 42

> Today's challenge is based on videos #2.3 to #2.7

- 오늘 시청하는 강의: #2.3 to #2.7
- 오늘 제출하는 과제: 위의 강의를 시청하신 후, 아래 코딩챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`

- 2.3 Your First Express Server
- 2.4 Handling Routes with Express
- 2.5 ES6 on NodeJS using Babel
- 2.6 Express Core: Middlewares
- 2.7 Express Core: Middlewares part Two

<br/>

---

<br/>

## Lecture Summery

### Express

#### 설치

```
npm install express --save
```

<br/>

#### Routing

```js
var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});
```

<br/>

#### Route Methods

```js
// GET method route
app.get("/", function(req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

//모든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는 데 사용
app.all("/secret", function(req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
```

<br/>

### Babel

Babel은 ES6+ 코드를 ES5 이하의 버전으로 트랜스파일링한다.

```js
// ES6(Arrow Function) + ES7(Exponentiation operator)
[1, 2, 3].map(n => n ** n);
```

위 코드는 ES6에서 도입된 화살표 함수와 ES7에서 도입된 거듭제곱 연산자를 사용하고 있다. 이 두가지 기능은 IE는 물론이고 구형 브라우저에서 지원하지 않는다. 따라서 IE나 구형 브라우저에서도 동작하는 애플리케이션을 구현하기 위해 ES6+ 코드를 ES5 이하의 버전으로 변환(트랜스파일링)할 필요가 있다. Babel을 사용하면 위 코드를 아래와 같이 ES5 이하의 버전으로 트랜스파일링할 수 있다.

```js
// ES5
"use strict";

[1, 2, 3].map(function(n) {
  return Math.pow(n, n);
});
```

<br/>

#### Babel CLI 설치

npm을 사용하여 Babel CLI을 설치한다.

```
# 프로젝트 폴더 생성
$ mkdir es6-project && cd es6-project

# package.json 생성
$ npm init -y

# babel-core, babel-cli 설치
$ npm install --save-dev @babel/core @babel/cli
```

#### babelrc 설정파일

Babel을 사용하려면 먼저 @babel/preset-env을 설치해야 한다. @babel/preset-env은 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것으로 Babel 프리셋이라고 부른다.

```
# env preset 설치
$ npm install --save-dev @babel/preset-env
```

`package.json`

```json
{
  "name": "es6-project",
  "version": "1.0.0",
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.4.5"
  }
}
```

`.babelrc`

```json
{
  "presets": ["@babel/preset-env"]
}
```

#### 트랜스파일링

package.json 파일에 scripts를 추가한다. 완성된 package.json 파일은 아래와 같다.

```json
{
  "name": "es6-project",
  "version": "1.0.0",
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.3.1"
  }
}
```

위 npm script는 src/js 폴더(타깃 폴더)에 있는 모든 ES6+ 파일들을 트랜스파일링한 후, 그 결과물을 dist/js 폴더에 저장한다. 사용한 옵션의 의미는 아래와 같다.

> -w : 타깃 폴더에 있는 모든 파일들의 변경을 감지하여 자동으로 트랜스파일한다. (--watch 옵션의 축약형)
> -d : 트랜스파일링된 결과물이 저장될 폴더를 지정한다. (--out-dir 옵션의 축약형)

<br/>

<br/>

## Reference

- [Babel과 Webpack을 이용한 ES6 환경 구축](https://poiemaweb.com/es6-babel-webpack-1)

<br/>

---

<br/>
