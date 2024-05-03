# 15. 이벤트

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

### 15.1.2 이벤트 리스나

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트 처리

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

```html
<body>
  <button id="btn">sad</button>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```
