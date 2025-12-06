const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.95)";
        btn.style.boxShadow = "0 0 15px yellow";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "none";
    });
});
