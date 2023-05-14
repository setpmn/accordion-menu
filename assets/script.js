const _dives = document.querySelectorAll(".title");
_dives.forEach((val) => {
    val.children[2].classList.add("hidden");
    val.addEventListener("click", () => {
        if (val.children[2].classList.contains("hidden")) {
            val.children[1].style.transform = "rotateZ(45deg)";
            val.children[2].classList.remove("hidden");
        } else {
            val.children[1].style.transform = "rotateZ(0deg)";
            val.children[2].classList.add("hidden");
        }
        val.children[2].addEventListener("click", function (e) {
            e.cancelBubble = "true";
        });
        console.log("true");
    });
});
