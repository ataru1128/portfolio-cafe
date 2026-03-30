// ハンバーガーメニュー

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click",() => {
    nav.classList.toggle("active");
});

// フェードイン
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fades.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});