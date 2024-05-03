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
