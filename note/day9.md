
# Day9 of 42

> Today's quiz is based on videos #2.6 to #2.12

- 오늘의 강의: 유튜브 클론코딩 #2.6 to #2.12
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.  
- 제출기간: 익일 오전 6시까지

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`
- 2.6 Express Core: Middlewares 
- 2.7 Express Core: Middlewares part Two 
- 2.8 Express Core: Routing 
- 2.9 MVC Pattern part One 
- 2.10 MVC Pattern part Two 
- 2.11 MVC Pattern part Three 
- 2.12 Recap 

<br/>

---

<br/>

## Lecture Summery



<br/>

---

<br/>

## Homework 

### Quiz


1. What are the three arguments that middlewares have? *
    1) They don't have three arguments
    2) connection, client, next
    3) `request, response, next`

2. What does the 'next' function do? *
    1) It sends the user to the next page
    2) `It calls the next middleware`
    3) It receives the next costumer

3. Routes are middlewares *
    1) `True`
    2) False

4. What is the difference between 'routes' and 'middlewares' *
    1) There is no difference
    2) `A route is just a middleware that doesn't call "next" but uses "res" to terminate the connection.`

5. How can I make a middleware be used in ALL the routes? *
    1) Using "app.useAll(<MIDDLEWARE>)"
    2) Using "app.getAll(<MIDDLEWARE>)"
    3) `Using "app.use(<MIDDLEWARE>)"`

6. How can a middleware terminate a connection *
    1) Using "res.kill()"
    2) Using "req.kill()"
    3) `Using "res.end()"`

7. What is the use of express.Router *
    1) `It allows us to break down our routes in small groups`
    2) express.Router allows us to answer to requests from the users
    3) express.Router does not exist

8. How can I include a Router in my app? *
    1) Using "app.router(<ROUTER>)"
    2) Using "app.include(<ROUTER>)"
    3) `Using "app.use(<ROUTER>)"`

9. What is the difference between "app.get" and "app.use" *
    1) "app.get" finds a page on the website and renders it and "app.use" includes a router
    2) `"app.get" is only called for GET requests, "app.use" is called for ALL requests`

10. What does MVC mean *
    1) Me Very Cute
    2) My Vegetarian Cook
    3) `Model View Controller`

11. What is the M in MVC? *
    1) Is what we show to the user
    2) Is what handles the logic
    3) `Is what stores the data`

12. What is the V in MVC? *
    1) `Is what we show to the user`
    2) Is what handles the logic
    3) Is what stores the data

13. What is the C in MVC? *
    1) Is what we show to the user
    2) `Is what handles the logic`
    3) Is what stores the data

14. MVC is something I can install *
    1) Yes, it's a Node module
    2) `No, it's just a pattern`

