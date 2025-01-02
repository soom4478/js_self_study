const title = document.getElementsByTagName("h1");
const title2 = document.querySelector(".hello h1"); // CSS 형식으로, 1개만
const title3 = document.querySelectorAll(".hello h1"); // 모두 가져옴, array로 반환

console.log(title);
console.log(title2);
console.log(title3);

const title4 = document.getElementById("hello");
const title5 = document.querySelector("#hello"); // 동일하지만 querySelector는 하위 요소를 가져오기 더 좋음

console.log(title4);
console.log(title5);