const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
        h1.className = "";
    }
    else {
        h1.className = clickedClass; // css를 이용하는 게 js에 직접 넣는 것보다 좋음
    }
    
}

h1.onclick = handleTitleClick;