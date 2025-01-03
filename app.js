const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
    // toggle : classList에 clicked가 있는지 확인 후
    // 있다면 제거, 없다면 추가
}

h1.onclick = handleTitleClick;