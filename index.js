const formElm = document.querySelector (".container");
formElm.addEventListener ("submit", (e) => {
    e.preventDefault ();
    formElm.innerHTML = `<h2> Váš e-mail byl úspěšně zaevidován.</h2>`;
})

const check = document.querySelector (".input");
check.addEventListener ("input", () => {
    const email = check.value;
    const zavinac = validator.isEmail(email);
    if (zavinac === false) {
        check.classList.add ("input--red");
    } else {
        check.classList.add ("input--green");
    }
})