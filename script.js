const botao = document.querySelector("#BOTAODIVERTIDO");
const login = document.querySelector("#INPUTLOGIN");
const loginDiv = document.querySelector(".LOGIN");
const loginPDiv = document.querySelector(".LOGIN_PEQUENO");
const senha = document.querySelector("#INPUTSENHA");
const video = document.querySelector("#doakes")
const msgErro = document.querySelector("#msg-erro");
const modal = document.querySelector("#modal-ajuda");
const btnAjuda = document.querySelector("#btn-ajuda");
const spanClose = document.querySelector(".close");

// Controle do Modal
btnAjuda.onclick = () => modal.style.display = "block";
spanClose.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

botao.addEventListener("click", function () {
    const userVal = login.value.trim();
    const senhaVal = senha.value.trim();

    if (userVal !== "marcos" || senhaVal !== "1234") {
        msgErro.innerText = "Dados inválidos!";
        msgErro.classList.add("erro-animacao");

        setTimeout(() => msgErro.classList.remove("erro-animacao"), 400);
        return;
    }

    setTimeout(() => {
        video.style.display = "block";
        video.play();
    }, 1000);

    loginDiv.innerHTML = `
        <div class="banner-meio-container">
            <img src="res/banner1.gif" alt="banner">
            <img src="res/banner2.gif" alt="banner">
            <img src="res/banner7.gif" alt="banner">
            <img src="res/banner4.gif" alt="banner">
            <img src="res/banner5.gif" alt="banner">
            <img src="res/banner6.gif" alt="banner">
        </div>
    `;
});

video.addEventListener("ended", () => {
    video.remove();
});
