
# Day10 of 42

> Today's quiz is based on videos #2.13 to #2.17

- 오늘의 강의: 유튜브 클론코딩 #2.13 to #2.17
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.  
- 제출기간: 익일 오전 6시까지

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#2 ExpressJS`
- 2.13 Installing Pug 
- 2.14 Layouts with Pug 
- 2.15 Partials with Pug 
- 2.16 Local Variables in Pug 
- 2.17 Template Variables in Pug 

<br/>

---

<br/>

## Lecture Summery



<br/>

---

<br/>

## Homework 

### Quiz


1. How can we make express use pug as the view engine *
    1) Using "app.views("engine", "pug")"
    2) `Using "app.set("view engine", "pug")`

2. What is the default directory where express will look for the views *
    1) /templates
    2) /html
    3) `/views`
    4) /static

3. How can I change the default views directory to "/dist" *
    1) Using "app.views("template", "/dist")"
    2) `Using "app.set("views", "/dist")"`
    3) Using "app.set("template", "/dist")"
    4) Using "app.views("views", "/dist")
    5) /static

4. How can I render a pug template from a controller *
    1) Using "res.template(<TEMPLATE_NAME>)"
    2) Using "res.pug(<TEMPLATE_NAME>)"
    3) `Using "res.render(<TEMPLATE_NAME>)"`

5. How can I reuse the same page structure using pug *
    1) Copy / Paste as fast as you can
    2) `Creating templates and extending from them`

6. What is a partial *
    1) `It's a piece of HTML code that I can reuse on pug`
    2) It's a piece of JS code that I can reuse on app

7. How can I use the partial "footer.pug" inside of my "layout.pug" *
    1) Using "partial ./footer"
    2) `Using "include ./footer"`
    3) Using "extends /.footer"

8. What is a "block" in pug *
    1) It's a way of defining a flex-container
    2) It's a way of making space for CSS code
    3) `It's a way of making space for dynamic content inside of a template`
    4) It's a way of making space for dynamic content inside of a route

9. How can I do <span class="hello"> in pug *
    1) `span.hello`
    2) span#hello
    3) span("hello")

10. Doing ".hello" is the same as doing "div.hello" in pug *
    1) `True`
    2) False

11. How can we add information to all the templates at the same time *
    1) `Using res.locals`
    2) Using res.global

12. How can I render a template with a variable "name" from the controller *
    1) Using "res.render(<TEMPLATE>, { vars:{name: "Nico"}})"
    2) Using "res.render(<TEMPLATE>, name: "Nico")"
    3) `Using "res.render(<TEMPLATE>, { name:"Nico"})"`