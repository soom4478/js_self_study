const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // 함수를 실행할 때 event object를 argument로 줌
    event.preventDefault(); // 기본 동작이 샐행되는 걸 막아줌
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault(); // 기본 동작 실행 막음
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
// 함수를 실행시키는 건 브라우저저, 그러나 기본 동작작을 막아야할 때가 있음(정보를 얻거나 할 때)
// 첫 번째 argument에 실행한 이벤트의 정보가 들어간 오브젝트를 줌