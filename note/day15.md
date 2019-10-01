
# Day15 of 42

> This challenge is based on videos #2.18 to #3.4:

- 2일간 시청하는 강의: #2.18 to #3.4
- 2일간 제출하는 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.  

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

`#3 MongoDB`
- 3.0 MongoDB and Mongoose 
- 3.1 Connecting to MongoDB 
- 3.2 Configuring Dot Env 
- 3.3 Video Model 
- 3.4 Comment Model 
 

<br/>

---

<br/>

## Lecture Summery

<br/>

---

<br/>

## Homework 

### Quiz Six

1. On a controller how can I get the ID on a route like: "/user/:id" *
    1) Using req.url.id
    2) Using req.query.id
    3) `Using req.params.id`

2. On a controller how can I get the ID on a route like: "/user?id=123" *
    1) Using req.url.id
    2) `Using req.query.id`
    3) Using req.params.id

3. What's the difference between a method="post" and method="get" on an form *
    1) method="post" sends the data of the form on the url and method="get" sends it hidden from the user
    2) `method="get" sends the data of the form on the url and method="post" sends it hidden from the user`
    3) There is no difference

4. What are mixins for *
    1) Mixins are useful when I want to reuse some HTML block that does not change
    2) `Mixins are useful when I want to reuse some HTML block that has same structure but different data`
    3) There is no difference

5. MongoDB is a SQL Database *
    1) True
    2) `False`

6. Mongo is the same as Mongoose *
    1) True
    2) `False`

7. What is the difference between Mongo and Mongoose *
    1) There is no difference
    2) Mongoose is a database, Mongo is how we talk to the database using JS
    3) `Mongo is a database, Mongoose is how we talk to the database using JS`

8. What is the point of using dotenv *
    1) `To be able to hide strings from the version control systems`
    2) To encrypt our code
    3) To make our app unhackeable

9. What is a Schema *
    1) `Is an object that tells Mongoose the shape of the data that we will save`
    2) Is an object that tells Mongo the shape of the data that we will say

10. It's a good practice so save files on a database *
    1) True
    2) `False`

11. If I want to save a file what should I do *
    1) Save it on the database
    2) `Save a link to the location of the file on the database`

12. What does Mongo store? *
    1) Graphs
    2) `JSON Documents`
    3) Text

13. What is the "ObjectId" type for? *
    1) To tell Mongoose that this is the ID of your Model
    2) `To tell Mongoose that here we are gonna save an ID of a different Model`
    3) To tell Mongoose that we are gonna save the ID of the model manually

14. What is the difference between Date.now and Date.now() when adding a "createdAt" to a model *
    1) They are the same
    2) `Date.now() executes the function immediately, Date.now waits for the function to be called.`
    3) Date.now executes the function immediately, Date.now() waits for the function to be called.

15. What does "mongoose.model("Movie", MovieSchema)" do *
    1) It creates a "Movie" on the DB with the shape of MovieSchema
    2) `It tells Mongoose that the "Movie" model will have the shape of the MovieSchema`

16. On the video #3.4 why did we import the models in the init.js file *
    1) Because Nico is crazy
    2) Because we want to check for errors
    3) `Because we need to make the mongoose connection 'aware' of the Models that we will save in the future.`
