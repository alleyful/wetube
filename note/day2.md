
# Day2 of 42

> Today's quiz is based on videos #1.0 to #1.3

- 오늘의 강의: 유튜브 클론코딩 #1.0 to #1.3 (챕터 1. 전체)
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 퀴즈를 풀면 됩니다.  
- 제출기간: 익일 오전 6시까지

<br/>

[[노마드 코더] 유튜브 클론 코딩](https://academy.nomadcoders.co/courses/enrolled/435438)

`#1 NodeJS Theory`
- 1.0 What is NodeJS 
- 1.1 Use Cases for NodeJS 
- 1.2 Who Uses NodeJS 
- 1.3 Installing NodeJS 

<br/>

---

<br/>

## Lecture Summery

<br/>

### Node.js
> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 
> Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적입니다.
> Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리 생태계이기도 합니다.
>
> Node.js 공식사이트

즉, JavaScript를 크롬(Chrome)같은 브라우저에서만 쓰는 것이 아닌 브라우저 밖. 즉, 내 컴퓨터에서 다양한 용도로 확장하기 위해 만들어진 것이 바로 Node.js이다.  
Node.js를 이용하면 Python과 같이 내 컴퓨터에서 File System를 이용할 수 있고, 서버를 만들 수도 있고 크롤링도 할 수 있다.   
JavaScript도 Python과 같은 프로그래밍 언어이기 때문이다.   


<br/>

### Node.js의 오해 : NodeJS는 서버다?
Node.js를 통해서 서버도 만들 수 있기 때문에 생긴 오해이다. Node.js 자체는 웹서버가 아니다.

<br/>

### Node.js의 특징
- 비동기 I/O 처리   
    Node.js 라이브러리의 모든 API는 비동기식(async)이다, 즉, 멈추지 않는다 (Non-blocking).  
    Node.js 기반 서버는 API가 실행되었을 때, 데이터를 반환할때까지 기다리지 않고 다음 API 를 실행한다. 
    그리고 이전에 실행했던 API가 결과값을 반환할 시, Node.js의 이벤트 알림 메커니즘을 통해 결과값을 받아온다.
    
- 빠른 속도   
    구글 크롬(Google Chrome)의 V8 자바스크립트 엔진(JavaScript Engine)을 사용하여 빠른 코드 실행을 제공한다.
    
- 단일 쓰레드와 뛰어난 확장성   
    Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용한다. 
    이벤트 메커니즘은 서버가 멈추지않고 반응하도록 해주어 서버의 확장성을 키워준다.  
    반면, 아파치(Apache)같은 일반적인 웹서버는 요청을 처리하기 위하여 제한된 쓰레드를 생성한다. 
    Node.js는 쓰레드를 한개만 사용하고 아파치(Apache)같은 웹서버보다 훨씬 많은 요청을 처리할 수 있다.
    
- 노 버퍼링   
    Node.js 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력한다.
    
- 라이센스   
    Node.js 는 MIT License가 적용되어있다.

<br/>

### Node.js를 사용하기 적합한 곳
Node.js는 넷플릭스나 우버같은 실시간 처리가 중요한 애플리케이션이나, 많은 양의 데이터 입출력이 있는 곳에서 사용하고 있다.  
이처럼 다음과 같은 경우에 Node.js를 사용할 경우 좋은 효율성을 발휘할 수 있다. 
- 알림이나 실시간 대화같이 같이 데이터의 실시간 처리가 필요한 애플리케이션
- 사용자의 입력과 출력이 잦은 애플리케이션
- 데이터 스트리밍 애플리케이션
- JSON API기반의 애플리케이션
- 단일 페이지 기반의 애플리케이션

<br/>

### Node.js를 사용하기 적합하지 않은 곳
Data Science같이 복잡한 데이터를 처리하기 위해 메모리, 램, CPU 등 하드웨어를 사용해야 하는 곳에는 적합하지 않다.   
즉, 하드코어한 처리를 위한 목적으로는 적합하지 않다.


<br/>

## Reference
- [Node.js 공식 홈페이](https://nodejs.org/ko/)
- [Node.js란 무엇인가](https://geonlee.tistory.com/92)

<br/>

---

<br/>

## Homework 

### Quiz

1. What is NodeJS *   
    1) Javascript inside of the browser   
    2) `Javascript outside of the browser`   

2. Where was Javascript designed to be *   
    1) `In the browser`   
    2) Outside of the browser   

3. On the frontend there is only one programming language *   
    1) `True`   
    2) False   

4. The programming language of the frontend is *   
    1) CSS   
    2) React   
    3) `JavaScript`   

5. On the backend there is only one programming language *   
    1) True   
    2) `False`   

6. If I don't like JS I can choose any other language for the frontend *   
    1) True   
    2) `False`   

7. If I don't like JS I can choose any other language for the backend *   
    1) `True`   
    2) False   

8. How can I use Javascript on the backend *   
    1) With Laravel   
    2) `With NodeJS`   
    3) With Django   

9. NodeJS comes with a lot of pre-built functionality out of the box *   
    1) True   
    2) `False`   

10. The difference between NodeJS and Django is *
    1) `Django is like a big toy that I have to learn how to use and Node is like a lego set that I can build piece by piece`   
    2) NodeJS is like a big toy that I have to learn how to use and Django is like a lego set that I can build piece by piece   

11. NodeJS is great for real-time applications *   
    1) `True`   
    2) False   

12. NodeJS is great for CRUD (Create, Read, Update, Delete) applications *   
    1) `True`   
    2) False   

13. NodeJS is great for hardware intensive applications *   
    1) True   
    2) `False`   

14. Youtube uses NodeJS to compress video *   
    1) True   
    2) `False`   

15. Uber uses NodeJS to record the GPS locations of the drivers *   
    1) `True`   
    2) False   


