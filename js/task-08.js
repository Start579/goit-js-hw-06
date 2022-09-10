const formEl = document.querySelector (".login-form")
// console.log(refs.formEl);
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    if(email.value === "" || password.value === "") {
       return alert("Пожалуйста, заполни все");
    };
    const formValue = {email:email.value, password:password.value}
console.log(formValue);
formEl.reset();
})