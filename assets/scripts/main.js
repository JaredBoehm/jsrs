const root = document.querySelector(':root');

function toggleTheme(e) {
    if (root.className == "light") {
        root.className = "";
        e.innerText = "Blind Me";
    } else {
        root.className = "light";
        e.innerText = "God Make it Stop";
    }
}