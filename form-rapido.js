const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
// const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});
const isValidPhone = (phone) => {
    const brazilianPhoneRegex = /^\(?\d{2}\)?\s?[9]\d{4,5}-?\d{4}$/gi;
    return brazilianPhoneRegex.test(phone);
};

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;


    if (nomeValue === "") {
        setErrorFor(nome, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(nome);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (telefoneValue === "") {
        setErrorFor(telefone, "A telefone é obrigatória.");
    } else if (!isValidPhone(telefoneValue)) {
        setErrorFor(telefone, "A telefone tem conter DDD o digito 9");
    } else {
        setSuccessFor(telefone)
    }

    //   if (passwordConfirmationValue === "") {
    //     setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    //   } else if (passwordConfirmationValue !== passwordValue) {
    //     setErrorFor(passwordConfirmation, "As senhas não conferem.");
    //   } else {
    //     setSuccessFor(passwordConfirmation);
    //   }
  

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    // if (formIsValid) {
    //     // window.location.href ='./dados-concluidos.html'
    // }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}