// 이중 for 문
// 구구단
// 2단
let x = 2;
let result;

for (let y = 1; y <= 9; y++) {
  result = x * y;
  console.log(result);
}

let resultAll;
for (let x = 2; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    resultAll = x * y;
    console.log(resultAll);
  }
}
