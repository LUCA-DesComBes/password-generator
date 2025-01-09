const password = document.getElementById("password");
const characterLenght = document.getElementById("characterLenght");
const letterLength = document.querySelector(".letterLength");
const uppercase = document.getElementById("Uppercase");
const lowercase = document.getElementById("Lowercase");
const numbers = document.getElementById("Numbers");
const symbols = document.getElementById("Symbols");
const arrow = document.querySelector("img[alt='fleche']")
const submitButton = document.getElementById("submit")
const submit = document.querySelector(".submit");
const alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "&(-_}]/*!?§%$£¤<>¨^@.#~|)=";

submitButton.addEventListener("mouseover", ()=>{
    arrow.setAttribute("src", "./img/fleche-green.svg")
})

submitButton.addEventListener("mouseout", ()=>{
    arrow.setAttribute("src", "./img/fleche.svg")
})

characterLenght.addEventListener("change", () => {
    letterLength.textContent = characterLenght.value;
});

submit.addEventListener("click", (event) => {
    event.preventDefault();

    let newPassword = "";

    if (uppercase.checked) newPassword += alphabetUppercase;
    if (lowercase.checked) newPassword += alphabetLowercase;
    if (numbers.checked) newPassword += Numbers;
    if (symbols.checked) newPassword += Symbols;

    const passwordLength = parseInt(characterLenght.value);
    password.textContent = gerationMdp(passwordLength, newPassword);

    function gerationMdp(length, newPassword) {
        if (!newPassword) return "choisis une ou plusieurs option(s)";

        let result = "";
        const newPasswordLength = newPassword.length;
        for (let i = 0; i < length; i++) {
            result += newPassword.charAt(Math.floor(Math.random() * newPasswordLength));
            
        }
        return result
    }
});