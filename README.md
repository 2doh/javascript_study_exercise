# 15 이벤트

- 웹 페이지에서 발생되는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner라고 한다

## 15.1 이벤트 핸들러

- 마우스 클릭이나 이동
- 페이지 로드
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 etc.

```html
<body>
  <button onclick="change(this)">클릭</button>
  <script src="js/event.js"></script>
</body>
```

```js
function change(elem) {
  elem.innerHTML = "OK!";
}
```

### 15.1.1 인라인 모델

```html
<button onclick="document.getElementById('show').innerHTML=Date()">현재 시간은?</button>
<p id="show"></p>
```

### 15.1.2 이벤트 리스너

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트 처리

```html
<body>
  <button id="btn">sad</button>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
let text = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  text += "안녕하세요<br>";
  document.getElementById("show").innerHTML = text;
});
btn.addEventListener("click", function () {
  text += "반갑습니다<br>";
  document.getElementById("show").innerHTML = text;
});
```

## 15.2 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용
- onclick : 사용자가 요소를 클릭했을 때
- ondblclick : 사용자가 요소를 더블 클릭했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때, 자식요소에 대해서도 동작
- onmouseout : 마우스 포인터가 요소 위에 벗어날 때, 자식요소에 대해서도 동작
- onmouseenter : 마우스 포인터가 요소 안으로 진입할 때
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

### 15.2.1 onclick/ondbclick 이벤트

```html
<body>
  <button onclick="showMessage1()">클릭</button>
  <button ondblclick="showMessage2()">더블클릭</button>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
function showMessage1() {
  document.getElementById("show").innerHTML = "클릭함";
}

function showMessage2() {
  document.getElementById("show").innerHTML = "더블클릭함";
}
```

### 15.2.2 onmouseover/onmouseout 이벤트

```html
<body>
  <button onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">마우스를 올려보세요</button>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
function changeBg1(btn) {
  btn.style.backgroundColor = "pink";
}

function changeBg2(btn) {
  btn.style.backgroundColor = "";
}
```

### 15.2.3 onmouseenter 이벤트

- onmouseover 이벤트와 유사한 기능

```html
<body>
  <div id="box1" onmouseenter="increaseX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>
  <div id="box2" onmouseover="increaseY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>
  <script src="js/event.js"></script>
</body>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.4 onmouseleave 이벤트

```html
<body>
  <div id="box1" onmouseleave="increaseX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>
  <div id="box2" onmouseout="increaseY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>
  <script src="js/event.js"></script>
</body>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.5 onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
<body>
  <div id="box" onmousemove="showCoord(event)">
    <p id="show"></p>
  </div>
  <script src="js/event.js"></script>
</body>
```

```js
function showCoord(e) {
  let text = "좌표: (" + e.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
```
