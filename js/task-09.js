function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeBtn.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
document.body.style.transition = '250ms';

currentColor.textContent = randomColor;
})
