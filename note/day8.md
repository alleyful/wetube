# Day8 of 42

> Today's challenge is based on videos #2.8 to #2.11

- 오늘 시청하는 강의: #2.12 to #2.17
- 오늘 제출하는 과제: 위의 강의를 시청하신 후, 아래 코딩챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`

- 2.12 Recap
- 2.13 Installing Pug
- 2.14 Layouts with Pug
- 2.15 Partials with Pug
- 2.16 Local Variables in Pug
- 2.17 Template Variables in Pug

<br/>

---

<br/>

## Lecture Summery

### Pug

Express Framework의 Template Engine

<br/>

### 설치하기

```
npm install pug
```

<br/>

### 시작하기

`app.js`

```js
var express = require("express");
var routes = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", routes);
```

<br/>

`indes.js`

```js
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", {
    title: "Hey",
    message: "Hello there!"
  });
});

module.exports = router;
```

<br/>

`index.pug`

```jade
doctype html
html(lang="en")
    head
        title= title
    body
        p.greetings#people #{message}

```

<br/>

## Reference

- [Express Template Engine / Pug](https://cinema4dr12.tistory.com/961)

<br/>

---

<br/>
