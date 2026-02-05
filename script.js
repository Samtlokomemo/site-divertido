const meuBotao = document.querySelector("#BOTAODIVERTIDO");
const divImg = document.querySelector("#cont-crias")
const yay = new Audio("yay.mp3");

let tocando = false;
meuBotao.addEventListener("click", function(){
    if(tocando == true){
        return;
    }
    tocando = true;
    yay.currentTime = 0;
    yay.play();
    divImg.classList.add("visivel");
});

yay.addEventListener("ended", (event) => {
    divImg.classList.remove("visivel");
    tocando = false;
});