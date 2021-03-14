/***************************VERIFICAÇÃO DOS VALORES DO FORM*************************/

const form = document.querySelector(".form--box");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
    e.preventDefault();                      //Retira o comportamento default do form,neste caso apresentar as mensagens de email mal escrito,etc..
    inputs.forEach(input => {
        console.log(input.value);

        var errorMessage = input.nextElementSibling;
        console.log(errorMessage);
        console.log(input);
        if (input.value === "") {
            input.classList.add("input--error--active");
            errorMessage.classList.add("error--message--active");
        } else {
            input.classList.remove("input--error--active");
            errorMessage.classList.remove("error--message--active");

        }
    })
})