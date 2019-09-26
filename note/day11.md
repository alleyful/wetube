
# Day11 of 42

> This challenge is based on videos #2.18 to #2.25:

- 2일간 시청하는 강의: #2.18 to #2.25
- 2일간 제출하는 과제: 위의 강의를 시청하신 후, 아래 코딩챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`
- 2.18 Search Controller 
- 2.19 Join : Log In HTML 
- 2.20 Change Profile HTML 
- 2.21 Home Controller 
- 2.22 Home Controller part Two 
- 2.23 Join Controller 
- 2.24 Log In and User Profile Controller 
- 2.25 More Controlers 
 

<br/>

---

<br/>

## Lecture Summery

<br/>

---

<br/>

## Homework 

### 코딩챌린지 소개
    
- 샌드박스 안에 db.js 라는 이름의 파일이 있습니다. 그 파일은 영화의 DB를 시뮬레이트 합니다. 아래와 같은 4개 함수를 export 합니다.
- 샌드박스 안에 movieController.js 그리고 movieRouter.js 가 있으며, 이는 3개의 routes 와 3개의 controllers 를 갖고있습니다.
- Controllers와 Routers를 추가하거나 제거해서는 안됩니다. 단 3가지만으로 아래 챌린지를 수행할 수 있어요.
 
```
getMovies,
getMovieById,
getMovieByMinimumRating,
getMovieByMinimumYear
```
    
`함수 4개에 대한 설명은 아래와 같습니다.`
- getMovies returns an array of movies, console.log the result to see the shape of the object.
- getMovieById returns a movie object. It requires an ID as an argument and if no movie is found it returns undefined.
- getMovieByMinimumRating returns an array of movies, it requires a number, with this number the function will return an array of movies with a rating equal or higher than the number.
- getMovieByMinimumYear returns an array of movies, it requires a number, with this number the function will return an array of movies with a release date equal or higher than the number.

<br/>

This is the expected output:   
[![Video Label](http://img.youtube.com/vi/tE8QGg8aQDE/0.jpg)](https://youtu.be/tE8QGg8aQDE)

<br/>

### 조건:

- Complete all the controllers
- Use pug and mixins to render pages and loop over the movies list.
- Use templates.
- You can only have 3 .pug pages. movies.pug, 404.pug, detail.pug
- Use middlewares to add locals like siteTitle
- / should render movies.pug and show a list of movies.
- /:id should render the detail of a movie
- /filter should filter by year and rating.
- The app must behave exactly like the video

### 제출:
- CodeSandbox 템플릿 : [Day11 Boilerplate](https://codesandbox.io/s/express-controller-blueprint-880to)
- 제출 : [Day11 Homework](https://codesandbox.io/s/express-controller-blueprint-p0ibw)
- 정답 : [Day11 Answer]()