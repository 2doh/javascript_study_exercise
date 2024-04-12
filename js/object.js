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
