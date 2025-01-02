const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
h1.onclick = handleTitleClick; // 클릭 시
h1.onmouseenter = handleMouseEnter; // 텍스트 위에 마우스 둘 시
h1.onmouseleave = handleMouseLeave; // 마우스를 치울 시

window.addEventListener("resize", handleWindowResize); // 화면 사이즈 변환 시
window.addEventListener("copy", handleWindowCopy); // 텍스트 카피 시
window.addEventListener("offline", handleWindowOffline); // 와이파이 연결 끊길 시
window.addEventListener("online", handleWindowOnline); // 연결 될 시