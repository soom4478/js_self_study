const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass); // classList를 이용하면 기존 class가 사라지지 않는다
    }
    else {
        h1.classList.add(clickedClass);
    }
    
}

h1.onclick = handleTitleClick;