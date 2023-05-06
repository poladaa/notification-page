const singleBox = document.querySelectorAll(".single-box");
const dot = document.querySelectorAll(".dot");
const number = document.querySelector(".num");
const btn = document.getElementById("read");

btn.addEventListener("click", () => {
  singleBox.forEach((e) => {
    e.classList.remove("unseen");
  });

  dot.forEach((e) => {
    e.classList.remove("dot");
  });
  number.textContent = "0";
});
