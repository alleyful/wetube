
# Day24of 42

> Today's Quiz is based on videos #6.0 to #6.5

- 오늘의 강의: 유튜브 클론코딩 #6.0 to #6.5
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.   

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#6 User Authentication like a Boss`
- 6.0 Introduction to PassportJS 
- 6.1 Local Authentication with Passport part One 
- 6.2 Local Authentication with Passport part Two 
- 6.3 Loggin the User In 
- 6.4 Sessions on Express 
- 6.5 MongoStore and Middlewares 
 

<br/>

---

<br/>

## Lecture Summery

<br/>

---

<br/>

## Homework 

### Quiz Seven




1. What is PassportJS *
    1) It's an authentication middleware
    2) It's a framework
    3) It's a library

2. What is a Strategy in PassportJS *
    1) It's a plan for the user
    2) It's an authentication mechanism
    3) It's a rule that the user should follow

3. What is a Provider in PassportJS *
    1) It's the user that authenticates
    2) It's an authentication mechanism
    3) It's an external website that will authenticate the user

4. Where does passport store the sessions *
    1) Cookies
    2) Tokens
    3) Headers

5. How often are cookies sent to the server? *
    1) Every 10 Seconds
    2) Every 10 Minutes
    3) Every Request

6. What is the name of the Strategy for username/password auth in Passport *
    1) "user/password"
    2) "local"
    3) "default"

7. What is serialization in PassportJS *
    1) Is a function where we can decide what information the cookie will have
    2) Is a function where we turn the cookie into an user object

8. What is deserialization in PassportJS *
    1) Is a function where we can decide what information will we store on the cookie
    2) Is a function where we turn the cookie into an user object

9. After deserialization, how does passport gives us the user object? *
    1) With a redirect
    2) It puts it in 'req.user'
    3) It puts it in 'res.locals'

10. What happens if we don't use a CookieStore *
    1) Passport will not work
    2) Nothing
    3) The cookies will not be persistent
