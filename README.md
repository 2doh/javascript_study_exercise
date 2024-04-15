# 13. 배열

## 13.1 배열이란

- 여러 값을 하나의 변수에 저장할 수 있게 해주는 특별한 변수 array

### 13.1.1 배열의 생성

```js
const fruits = ["사과", "딸기", "참외"];

let text = "";
text += fruits;
text += fruits[0];
text += fruits[1];
text += fruits[2];

console.log(text);

const fruits1 = new Array("오렌지", "사과", "딸기", "참외");
console.log(fruits1);
```

### 13.1.2 배열요소의 메소드들

- join() 메소드 : 배열을 문자열로 변환하는데 사용

```js
const animals = ["코끼리", "고양이", "강아지", "펭귄"];

let str1 = animals.join();
let str2 = animals.join("/");
console.log(str1);
console.log(str2);
```

- push() 메소드 : 배열의 끝에 새로운 요소를 추가하는데 사용

```js
const animals = ["코끼리", "고양이", "강아지", "펭귄"];
let x = animals.push("도마뱀");
let text = "";
text += animals;
console.log(text);
```

- pop() 메소드 : 배열의 마지막 요소를 삭제하는데 사용

```js
const animals = ["코끼리", "고양이", "강아지", "펭귄"];
let x = animals.pop();
let text = "";
text = animals;
console.log(text);
```

- shift() 메소드 : 배열의 첫 요소를 삭제

```js
const animals = ["코끼리", "고양이", "강아지", "펭귄"];
let x = animals.shift();
let text = "";
text = animals;
console.log(text);
```

- **splice()** 메소드 : 배열에 요소를 추가하거나 삭제할 때 사용

```js
const animals = [
  "코끼리",
  "고양이",
  "강아지",
  "펭귄",
  "여우",
  "늑대",
  "돌고래",
];
let arr;
// 인덱스2인 요소 "고양이" 부터 3개의 요소를 삭제하고 "개구리" 삽입
arr = animals.splice(2, 3, "개구리");

console.log(animals);
console.log(arr);
```

- **indexOf()** 메소드 : 배열에서 특정 문자열의 위치, 즉 인덱스의 값을 변환

```js
const animals = [
  "코끼리",
  "고양이",
  "강아지",
  "펭귄",
  "여우",
  "늑대",
  "돌고래",
];
let index1 = animals.indexOf("고양이");
console.log(index1);
```

- **include()** 메소드 : 특정 요소의 존재 여부를 파악

```js
const animals = [
  "코끼리",
  "고양이",
  "강아지",
  "펭귄",
  "여우",
  "늑대",
  "돌고래",
];

const result = animals.includes("악어");
console.log(result); // false
```

- **slice()** 메소드 : 인덱스를 이용하여 특정 요소를 추출

```js
const animals = [
  "코끼리",
  "고양이",
  "강아지",
  "펭귄",
  "여우",
  "늑대",
  "돌고래",
];
// 인덱스 1부터 인덱스 4 사이(4는 포함하지 않음)
const result = animals.slice(1, 4);
console.log(result);
```

**find()** 메소드 : 특정 요소를 찾는 조건을 콜백함수를 통해 전달하여 조건에 해당하는 첫 번째 요소 값을 반환

```js
// 자바스크립트에서는 함수의 매개변수로 함수가 사용될 수 있다.
// 다른 함수의 매개변수로 전달되는 함수를 콜백 함수라고 한다.
// scores.find() 메소드에서는 배열 scores의 각 요소에 대해 콜백함수를 시행.
// 배열의 요소를 순회하면서 콜백 함수의 조건에 맞는 첫 번째 요소 값을 반환.
// 콜백 함수에 사용된 score는 배열의 각 요소 값을 가지게 된다.
// scores.find() 메소드는 score, 즉 배열의 요소 값이 90이상인 경우 요소를 반환한다.

const scores = [70, 80, 100, 71, 65];

let arr;
arr = scores.find((score) => score >= 90);

console.log(arr);
```

- **forEach()** 메소드 : 배열의 각 요소에 대해 매개변수로 설정된 함수를 실행

```js
const animals = ["사자", "호랑이", "펭귄", "코끼리"];
let txt = "";

// 매개변수로 설정된 fnc 함수를 배열 animals의 각 요소에 대해 실행
animals.forEach(fnc);

// fnc 함수의 매개변수 item, index는 각각 animals의 요소 값과 인덱스를 의미
function fnc(item, index) {
  txt += `${index} ${item} <br>`;
}

document.getElementById("show").innerHTML = txt;
```

- **map()** 메소드 : 배열의 각 요소에 대해 매개변수로 설정된 함수를 실행하여 얻어진 요소들로 구성된 **새로운** 배열을 반환

```js
const numbers = [1, 2, 3, 4, 5];

// map()에서 메소드는 forEach()메소드와 달리 매개변수로 사용되는 함수에서 값을 반환하는 return이 존재
// map() 메소드는 원본의 배열을 그대로 두고 새로운 배열을 생성
// map() 메소드에 매개변수로 설정된 익명함수를 실행하여 얻어진 요소로 구성된 새로운 배열 반환
let arr = numbers.map((num) => num * num);
console.log(arr);

document.getElementById("show").innerHTML = arr;
```
