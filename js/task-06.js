    const inputBlur = document.querySelector("#validation-input");
    const inputLength = inputBlur.getAttribute("data-length");

inputBlur.addEventListener("blur", onBlur);

function onBlur(event) {
    const isValid = event.currentTarget.value.length === Number(inputLength);
    if (isValid) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
     }
     else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
     }
}