function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

document.getElementById("black_box_button").onclick = function() {
    var blackBox = document.getElementById("black_box");
    toggleClass(blackBox, "change_box");
};
