function Penguin() {
    var input = prompt("Enter a string of your own choice. Choose wisely.");
    document.getElementById("input").innerText = input;
}

var colours = [
    "#EF4444",
    "#F97316",
    "#FACC15",
    "#84CC16",
    "#16A34A",
    "#14B8A6",
    "#38BDF8",
    "#4F46E5",
    "#A855F7",
    "#EC4899"
]

var stage = 0;

function léur() {
var bo = document.getElementById("youknow")
bo.style.color = colours[stage];
stage++;
if (stage >= colours.length) { stage = 0; }
}

setInterval(léur,200);

