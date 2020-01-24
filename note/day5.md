# Day5 of 42

> Today's challenge is based on videos #2.8 to #2.11

- 오늘 시청하는 강의: #2.8 to #2.11
- 오늘 제출하는 과제: 위의 강의를 시청하신 후, 아래 코딩챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`

- 2.8 Express Core: Routing
- 2.9 MVC Pattern part One
- 2.10 MVC Pattern part Two
- 2.11 MVC Pattern part Three

<br/>

---

<br/>

## Lecture Summery

### Express Router

#### 응답 메소드

다음 표에 표시된 응답 오브젝트에 대한 메소드(res)는 응답을 클라이언트로 전송하고 요청-응답 주기를 종료할 수 있습니다. 라우트 핸들러로부터 다음 메소드 중 어느 하나도 호출되지 않는 경우, 클라이언트 요청은 정지된 채로 방치됩니다.

| 메소드             | 설명                                                                                      |
| :----------------- | :---------------------------------------------------------------------------------------- |
| `res.download()`   | 파일이 다운로드되도록 프롬프트합니다.                                                     |
| `res.end()`        | 응답 프로세스를 종료합니다.                                                               |
| `res.json()`       | JSON 응답을 전송합니다.                                                                   |
| `res.jsonp()`      | JSONP 지원을 통해 JSON 응답을 전송합니다.                                                 |
| `res.redirect()`   | 요청의 경로를 재지정합니다.                                                               |
| `res.render()`     | 보기 템플리트를 렌더링합니다.                                                             |
| `res.send()`       | 다양한 유형의 응답을 전송합니다.                                                          |
| `res.sendFile`     | 파일을 옥텟 스트림의 형태로 전송합니다.                                                   |
| `res.sendStatus()` | 응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다. |

<br/>

#### app.route()

app.route()를 이용하면 라우트 경로에 대하여 체인 가능한 라우트 핸들러를 작성할 수 있습니다. 경로는 한 곳에 지정되어 있으므로, 모듈식 라우트를 작성하면 중복성과 오타가 감소하여 도움이 됩니다.

<br/>

#### express.Router

express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있습니다. Router 인스턴스는 완전한 미들웨어이자 라우팅 시스템이며, 따라서 “미니 앱(mini-app)”이라고 불리는 경우가 많습니다.

다음 예에서는 라우터를 모듈로서 작성하고, 라우터 모듈에서 미들웨어 함수를 로드하고, 몇몇 라우트를 정의하고, 기본 앱의 한 경로에 라우터 모듈을 마운트합니다.

```js
import express from "express";
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function(req, res) {
  res.send("Birds home page");
});
// define the about route
router.get("/about", function(req, res) {
  res.send("About birds");
});

module.exports = router;
```

<br/>

### MVC Pattern

`MVC`는 `Model-View-Controller 의 약자`입니다.

개발 할 때, 3가지 형태로 역할을 나누어 개발하는 방법론입니다.
비지니스 처리 로직과 사용자 인터페이스 요소를 분리시켜 서로 영향없이 개발 하기 수월하다는 장점이 있습니다.

- **Model**은 어플리케이션이 “무엇”을 할 것인지를 정의 합니다. 내부 비지니스 로직을 처리하기 위한 역할을 할 것입니다.
  - 처리되는 알고리즘, DB, 데이터 등등.
- **Controller**는 모델이 “어떻게” 처리할 지를 알려주는 역할을 할 것이고, 모바일에서는 화면의 로직처리 부분입니다.

- **View**는 화면에 무엇인가를 보여주기 위한 역할을 합니다. 컨트롤러 하위에 종속되어, 모델이나 컨트롤러가 보여주려고 하는 모든 필요한 것들을 보여줄 것입니다. 그리고 사용자의 입력을 받아서 모델의 데이터를 업데이트를 합니다.

그리고 Controller는 Model과 View가 각각 무엇을 해야 할 지를 알고 있고, 통제합니다. 비지니스 로직을 처리하는 Model과 완전히 UI에 의존적인 View가 서로 직접 이야기 할 수 없게 합니다.

```
wetube
├── controllers
├── models
└── views
```

<br/>

<br/>

## Reference

- [Express routing](https://expressjs.com/ko/guide/routing.html)

<br/>

---

<br/>
