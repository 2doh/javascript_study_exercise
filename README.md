# 10.1 함수 function

## 10.1.1 함수 정의와 호출

```js
// 함수 정의
function hello() {
  console.log("안녕하세요!");
}

// 함수 호출
hello();

// 화살표함수
const hello2 = () => {
  console.log("화살표 함수입니다");
};

// 함수 호출
hello2();
```

## 10.1.2 매개변수(파라미터)와 함수 값 반한

- 함수 정의에서는 매개변수(parameter)를 통하여 함수를 호출측에서 사용되는 변수나 데이터 값을 전달 받는다
- 반대로 함수 정의에서 얻어지는 결과 값을 함수 호출측에 반환(return)할 수 있다

```js
// 1. circleArea 함수 정의
// 자바스크립트 엔진은 정의돤 circleArea 함수를 컴퓨터 메모리에 저장하고 있다가 나중에 이 함수에 대한 호출이 일어날 때만 이 함수가 실행
function circleArea(r) {
  // 매개변수 r : 함수 호출에 사용된 변수나 데이터 값, 즉 인수(argumet)를 전달 받는데 사용
  const result = r * r * 3.14;
  return result; // 함수 호출 측으로 결과 값을 반환
}

// 2. 여기서 부터 시작
let radius = 8; // radius에 값 8 저장
let area;

// 3. circleArea(radius)는 circleArea 함수를 호출
// 함수가 호출되면 정의된 circleArea 함수가 실행
// 이때 함수 호출측의 radius값이 함수 정의 측 파라미터인 r에 복사
// 함수가 실행되어 얻어진 결과 값을 return으로 함수 호출 측에 반환
// 변수 area는 result 값을 가지게 됨
area = circleArea(radius);
console.log(area);
```

# 10.2 익명함수

## 10.2.1 익명함수란?

- 함수 이름을 정하지 않고 필요할 때 함수를 만들어 사용하고 싶을 때

```js
const mul = function (a, b) {
  return a * b;
};

let x = mul(5, 8);
console.log(x);

// 익명함수를 저장한 변수에 다른 변수를 할당하여 익명함수를 호출하는 예
const mul2 = mul;
let y = mul2(3, 4);
console.log(y);
```

## 10.2.2 자기호출 익명함수

- 함수 정의와 호출이 동시에 일어나 바로 실행되는 함수

```js
(function () {
  console.log("안녕하세요");
})();
```

## 10.2.3 화살표 함수

```js
function x(a, b) {
  return a * b;
}

const x = (a, b) => {
  return a * b;
};
```

## 10.2.4

- 함수 정의가 먼저 이루어져야하기 때문에 호이스팅된다. 그러나 익명함수의 경우 안됨
- 먼저 함수 정의,선언부터 하는 프로그래밍을 습관화

# 10.3 함수의 매개변수

## 10.3.1 매개변수의 기본값

- 자바스크립트 함수에서는 인수와 매개변수의 개수가 일치하지 않아도 오류가 발생하지 않는다.
- 인수의 개수와 매개변수의 개수가 다른경우 매개변수의 기본값을 설정

```js
function addFn(a, b = 10) {
  return a + b;
}

let result = addFn(10);
console.log(result);

result = addFn(10, 20);
console.log(result);
```

## 10.3.2 나머지 매개변수

- 함수 정의 시 매개변수의 개수를 미리 정하지 않고 매개변수의 수를 무한대로 설정할 수 있다
- 이때 사용되는 매개변수를 나머지 매개변수라고 한다
- 스프레드 연산자 사용(...~)

```js
function sumScore(...scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum;
}

const sum = sumScore(70, 80, 90, 98);
console.log(sum);
```

## 10.3.3 arguments객체

- 자바스크립트 함수는 arguments(배열형태로 저장) 객체를 내장하고 있다.
- 이 객체는 함수 호출 시 전달되는 인수들을 **배열**형태로 저장하고 있다.

```js
// arguments 객체를 이용하여 함수 호출 시 여러 개의 인수들을 정의된 함수에 전달 할 수 있다
function maxScores() {
  // 자바스크립트의 Infinity는 전역 스코프(global scope)에서 사용할 수 있는 전역 객체 프로퍼티(property)이다
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

let max_score = maxScores(87, 79, 93, 68, 88, 65);
console.log("최고점수", max_score);
```

# 10.4 자바스크립트 스코프

- 스코프(scope) "범위"라는 뜻을 가진 용어로 다른 언어에서도 사용되는 개념
- 변수에 접근할 수 있는 유효범위

- 전역 스코프(global scope)
  : 하나의 프로그램 내 전체 영역에서 사용 가능
  : 전역 스코프에서 사용되는 변수를 전역 변수(global variable)

- 함수 스코프(function scope)
  : 함수 내에서만 사용 가능
  : 함수 스코프에서 사용되는 변수를 지역 변수(local variable)
- 블록 스코프(block scope) : ES6버전 이후부터 블록 스코프 개념이 도입
  블록 스코프는 블록({}) 내에서 사용가능
  특정 블록 내에서 let이나 const로 선언한 변수는 블록 외부에서 사용할 수 없음

```js
// 전역 스코프
let x = 10;
function fnc() {
  console.log(x);
}

fnc();
console.log(x);

// 함수 스코프
function fnc1() {
  let y = 11;
  console.log(y);
}

fnc1();
console.log(y); // 지역변수 y로 접근 못함

// 블록 스코프
function fnc2() {
  if (true) {
    let z = 10; // 변수 z는 if문 내 , 즉 블록 내부에서 선언
  }
  console.log(z); // 블록 외부에서 뱐수 z에 접근하지 못함
}
```

# 10.5 클로저(closure)

- 전역 변수는 어디서나 값이 변경될 수 있기 때문에 보안에 취약하고 예기치 못한 오류를 발생시킬 가능성이 있다.
- 클로저는 전역 변수가 아닌 변수를 전역 변수와 같은 방식으로 동작하지만, 그 값을 함부로 변경할 수 없도록 변수를 "사유화"할 수 있는 방법을 제공
- 클로저는 함수와 그 함수가 선언될 때의 렉시컬 환경과의 조합이다

```html
<p id="show">0</p>
<button onclick="incCounter()">+1</button>
```

```js
const increase = (function () {
  let counter = 0;
  console.log(counter);
  return function () {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

function incCounter() {
  document.getElementById("show").innerHTML = increase();
}
```

```js
// 카운터 값 count를 createCounter 함수의 지역변수로 설정
const createCounter = () => {
  let count = 0; // 카운터의 카운터 초기 값 설정
  console.log(count);

  // handleIncrement 함수는 count 변수에 접근하고 수정할 수 있다
  // 이 함수는 클로저이며, creterCounter 함수의 지역변수인 count를 기억한다
  const handleIncrement = () => {
    console.log(count);
    count += 1; // 현재 카운트 값을 1증가
    //화면에 새로운 카운트 값을 업데이트
    document.getElementById("show").innerHTML = count;
  };
  // 클로저인 hanleIncrement 함수를 반환, 이 함수는 외부에서 호출될 수 있으며, createCounter의 count 변수에 계속해서 접근 할 수 있다
  return handleIncrement;
};

const icrement = createCounter();
```

- 리엑트에서 클로저를 활용한 컴포넌트

```js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // 클릭 이벤트가 발생할 때마다 handleIncrement함수가 실행 된다.
    // 이 함수는 setCount를 호출하여 현재 count상태를 업데이트 하는데
    // 여기서 prevCount => prevCount + 1이라는 업데이트 함수를 사용한다.
    // 이 함수는 현재 상태값을 인자로 받아 새로운 상태값을 반환 하는데
    // 이 과정에서 클로저를 통해 prevCount의 최신 상태를 참조하고 있다.
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
};

export default Counter;
```

# 10.6 예외처리 (exception handling)

- 코드 실행 중 예기치 못한 오류가 발생했을 때 코드의 흐름을 복구하는 기능

## 10.6.1 try ~ catch 문

## 10.6.2 try ~ catch ~ fanally 문

```js
// 예외처리
try {
  alert("안녕하세요");
  console.log("test");
} catch (error) {
  console.log("error");
}
```

```js
const checkInput = () => {
  let input_elem = document.getElementById("input1");
  let a = input_elem.value;
  document.getElementById("show").innerHTML = "";

  try {
    if (a === "") {
      throw "비어 있습니다.";
    }
    if (isNaN(a)) {
      throw "숫자가 아닙니다.";
    }
    a = Number(a);
    if (a < 0 || a > 9) {
      throw "0~9 사이 숫자가 아닙니다.";
    }
  } catch (error) {
    document.getElementById("show").innerHTML = `오류: ${error}`;
  } finally {
    input_elem.value = "";
  }
};
```
