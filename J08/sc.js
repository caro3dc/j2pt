function moveButton() {
    var butt = document.getElementById("button");
    butt.style.top = Math.random() * (window.innerHeight * 0.9);
    butt.style.left = Math.random() * (window.innerWidth * 0.9);
}