# 11 객체

## 11.1 객체 생성

- 객체(object)는 프로퍼티(property)와 메소드(method)의 집합
- 객체의 프로퍼티는 변수와 같은 개념
- 객체의 메소드는 함수와 거의 동일한 것
- 특정 객체에 소속된 변수와 함수를 그 객체의 프로퍼티와 메소드라고 부른다
- 자바스크립트에서 객체는 아주 중요한 개념이다
- 함수(function), 배열(array), 날짜(date), 수학(math).. 등등 모든 것이 객체
- 자바스크립트의 숫자(number), 문자열(string)도 일종의 객체

```js
// 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const 사용
const member = {
  // member 객체는 id, username, age 세개의 프로퍼티로 구성
  // 프로퍼티에 id, username, age를 키(key)라고 부르고
  // 이에 대응되는 "kdhong", "홍길동", 30 을 값(value)라고 한다
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text;
text = `${member.id} ${member.username} ${member.age}`;
console.log("member object", text);

document.getElementById("show").innerHTML = text;
```

## 11.2 프로퍼티

- 객체 프로퍼티와 메소드로 구성

### 11.2.1 for in 문으로 프로퍼티 읽기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text = "";

// for in 문에서 x는 객체 member에 존재하는 프로퍼티를 가진다
// 따라서 반복 루프에서 변수 x의 값은 id, name, age가 된다
for (x in member) {
  text += member[x];
}
document.getElementById("show").innerHTML = text;
```

### 11.2.2 프로퍼티 추가하기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
  email: "l123@naver.com",
};

let text = "";
member.email2 = "kdhong@gmail.com";

// for in 문에서 x는 객체 member에 존재하는 프로퍼티를 가진다
// 따라서 반복 루프에서 변수 x의 값은 id, name, age가 된다
for (x in member) {
  text += `키:${x} 값:${member[x]}<br/>`;
}
document.getElementById("show").innerHTML = text;
```

### 11.2.3 프로퍼티 삭제하기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
  email: "l123@naver.com",
};

let text = "";
member.email2 = "kdhong@gmail.com";
delete member.id;

// for in 문에서 x는 객체 member에 존재하는 프로퍼티를 가진다
// 따라서 반복 루프에서 변수 x의 값은 id, name, age가 된다
for (x in member) {
  text += `키:${x} 값:${member[x]}<br/>`;
}
document.getElementById("show").innerHTML = text;
```

### 11.3.4 중첩객체

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
  email: "l123@naver.com",
  hobby: {
    hobby1: "축구",
    hobby2: "농구",
  },
};
let text = "";
text = member.hobby.hobby1;

document.getElementById("show").innerHTML = text;
```

## 11.3 메소드

### 11.3.1 메소드란?

- 객체는 프로퍼티와 메소드로 구성
- 프로퍼티는 객체에 소속된 변수
- 메소드는 객체에 소속된 함수
- 다르게 얘기하자면 프로퍼티는 객체의 상태를 의미, 메소드는 객체의 동작을 정의한다고 할 수 있음

```js
const dog = {
  name: "뽀삐",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다
    나이는 ${this.age}살 입니다 견종은 ${this.species}이고 색은 ${this.color} 입니다`;
  },
};

document.getElementById("show").innerHTML = dog.intro();
```

### 11.3.2 메소드 추가하기

```js
const dog = {
  name: "뽀삐",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다
    나이는 ${this.age}살 입니다 견종은 ${this.species}이고 색은 ${this.color} 입니다`;
  },
};

dog.getAge = function () {
  return `나이는 ${this.age}살 입니다`;
};

document.getElementById("show").innerHTML = dog.getAge();
```

### 11.3.3 내장 메소드

- 자바스크립트 자체적으로 만들어준 내장 객체(built-in object)
- 이 내장 객체들은 내장 메소드를 제공함으로써 객체에 관련된 프로그래밍을 할 수 있게 해줌
- 많이 사용되는 객체에는 number, string, array, date,math 등이 있다
