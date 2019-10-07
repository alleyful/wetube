
# Day17~19 of 42

> This challenge is based on videos #2.0 to #3.12:

- 3일간 시청하는 강의: #2.0 to #3.12
- 3일간 제출하는 과제: 위의 강의를 시청하신 후, 아래 코딩챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`2 ExpressJS`
- 2.0 What is a Server 
- 2.1 What is Express 
- 2.2 Installing Express with NPM 
- 2.3 Your First Express Server 
- 2.4 Handling Routes with Express 
- 2.5 ES6 on NodeJS using Babel 
- 2.6 Express Core: Middlewares 
- 2.7 Express Core: Middlewares part Two 
- 2.8 Express Core: Routing 
- 2.9 MVC Pattern part One 
- 2.10 MVC Pattern part Two 
- 2.11 MVC Pattern part Three 
- 2.12 Recap 
- 2.13 Installing Pug 
- 2.14 Layouts with Pug 
- 2.15 Partials with Pug 
- 2.16 Local Variables in Pug 
- 2.17 Template Variables in Pug 
- 2.18 Search Controller 
- 2.19 Join : Log In HTML 
- 2.20 Change Profile HTML 
- 2.21 Home Controller 
- 2.22 Home Controller part Two 
- 2.23 Join Controller 
- 2.24 Log In and User Profile Controller 
- 2.25 More Controlers 
 
`3 MongoDB`
- 3.0 MongoDB and Mongoose 
- 3.1 Connecting to MongoDB 
- 3.2 Configuring Dot Env 
- 3.3 Video Model 
- 3.4 Comment Model 
- 3.5 Home Controller Finished 
- 3.6 Uploading and Creating a Video 
- 3.7 Uploading and Creating a Video part Two 
- 3.8 Getting Video by ID 
- 3.9 Editing a Video 
- 3.10 Deleting a Video 
- 3.11 Installing ESLint 
- 3.12 Searching Videos 
 

<br/>

---

<br/>

## Lecture Summery

<br/>

---

<br/>

## Homework 

### ⚠️ Attention ⚠️
- To run this Sandbox, you will have to add your username in the line 10 of models/Movie.js
- We are all sharing a database, adding your username is required so we can all work on the same DB at the same time.
- To find your username, go to challenges.nomadcoders.co and look for your username, i.e @serranoarevalo

 
<br/>


With the provided blueprint, make an app that has this exact output: 
[![Video Label](http://img.youtube.com/vi/eeFLsUzNy7g/0.jpg)](https://youtu.be/eeFLsUzNy7g)

<br/>

The routes you have to make are:
```
/ <-- See all movies
/create <-- Create a movie (html form)
/:id <-- See movie by ID
/:id/edit <-- Edit movie by ID
/:id/delete <-- Delete movie by ID
/search <-- Search movies
```

### 조건:
- Using Mongoose, create a CRUD (Create, Read, Delete, Update) Application for Movies.
- Make all the six routes with their controllers.
- On the line 12 of models/Movie.js you have to create a complete schema for your movie model. The schema should have the fields id, title, year, rating, synopsis, genres[], uploadedAt
- All the fields are required.
- You need to validate that the year is a number.
- You need to validate that the title is at least 3 characters long.
- When I create a movie I should be redirected to the detail page of that movie.
- When a movie is not found I should see a 404.
- When I delete a movie I should be redirected to the home page.
- On the /search page I should be able to filter by greater than or equal ( $gte ) /search?year=1900 or /search?rating=9.6
- The app must behave exactly like the video


### 제출:
- CodeSandbox 템플릿 : [Day17~19 Boilerplate](https://codesandbox.io/s/day-17-18-19-blueprint-1ub1z)
- 제출 : [Day17~19 Homework](https://codesandbox.io/s/day-17-18-19-blueprint-n418t)
- 정답 : [Day17~19 Answer](https://codesandbox.io/s/day-17-18-19-solution-gp1yx)