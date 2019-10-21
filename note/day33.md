
# Day33 of 42

> This challenge is based on the videos #10.0 to #10.5

- 오늘 시청하는 강의: #10.0 to #10.5
- 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 완료하세요.

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#10 API + AJAX`
- 10.0 API Registering a View part One 
- 10.1 API Registering a View part Two 
- 10.2 API Adding a Comment part One 
- 10.3 API Adding a Comment part Two 
- 10.4 API Adding a Comment part Three 
- 10.5 Conclusions 
 
<br/>

---

<br/>

## Lecture Summery

<br/>

---

<br/>

## Homework 

<br/>

### 조건
- Call this http://ip-api.com/json/ with AJAX, that URL returns information about your location.
- Call the URL when the page loads
- Show me an indicator when the request is happening
- When the data comes, show me my location on the HTML

<br/>

### Notes
Because the URL is not on https, Codesandbox won't let you fetch, so make this example on your computer and then copy paste the code in Codesandbox to submit.

<br/>

### Reference
[Fatch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

<br/>

### 제출:
- CodeSandbox 템플릿 : [Day33 Boilerplate](https://codesandbox.io/s/geo-blueprint-g205i)
- 제출 : [Day33 Homework](https://codesandbox.io/s/geo-blueprint-fcpt7)
- 정답 : [Day33 Answer](https://codesandbox.io/s/geo-solution-g643x)
```jsx harmony
import "./styles.css";

const API_URL = "http://ip-api.com/json/";

const progress = document.querySelector(".progress");

progress.innerHTML = "Locating you.....";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const { city, country, timezone } = data;
    progress.innerHTML = `Found you at: ${city}, ${country}, ${timezone}!`;
  })
  .catch(e => {
    console.log(e);
    progress.innerHTML = "Can't find you!";
  });
```
