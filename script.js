const meuBotao = document.querySelector("#BOTAODIVERTIDO");
const login = document.querySelector("#INPUTLOGIN");
const senha = document.querySelector("#INPUTSENHA");
const divImg = document.querySelector("#cont-crias");
const divImg2 = document.querySelector("#cont-crias2");
const video = document.querySelector("#doakes")
const yay = new Audio("yay.mp3");

function tocarVideo(){
    video.style.display = "block";
    video.play();
}

let tocando = false;
meuBotao.addEventListener("click", function(){
    if(login.value != "marcos" && senha.value != "1234"){
        alert("BURRO")
        return
    }
    if(tocando == true){
        return;
    }
    tocando = true;
    setTimeout(tocarVideo, 3000);
    yay.currentTime = 0;
    yay.play();
    divImg.classList.add("visivel");
    divImg2.classList.add("visivel2");
});  

yay.addEventListener("ended", (event) => {
    divImg.classList.remove("visivel");
    divImg2.classList.remove("visivel2");
    tocando = false;
});

