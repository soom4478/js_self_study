const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    // 함수를 실행할 때 event object를 argument로 줌
    event.preventDefault(); // 기본 동작이 샐행되는 걸 막아줌줌
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);