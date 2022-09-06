let counterValue = 0;
const listenBtnDown = document.querySelector(`button[data-action = "decrement"]`);
const listenBtnUp = document.querySelector(`button[data-action = "increment"`)
const listenValue = document.querySelector("#value");

listenBtnDown.addEventListener(`click`, () => {
counterValue -= 1;
listenValue.textContent = counterValue;
}); 
listenBtnUp.addEventListener(`click`, () => {
    counterValue += 1;
listenValue.textContent = counterValue;
    }); 