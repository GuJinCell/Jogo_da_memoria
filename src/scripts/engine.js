const emojis = [
    "🙂",
    "🙂",
    "😭",
    "😭",
    "😡",
    "😡",
    "☠️",
    "☠️",
    "🐵",
    "🐵",
    "🐳",
    "🐳",
    "🔫",
    "🔫",
    "🤡",
    "🤡"
];
let Opencards = [

];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 :-1));

for (let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handClick;
    document.querySelector(".game").appendChild(box);
};

function handClick(){
    if(Opencards.length < 2){
        this.classList.add("boxOpen");
        Opencards.push(this);
    }

    if (Opencards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if (Opencards.length < 2) return;
    
    if (Opencards[0].innerHTML === Opencards[1].innerHTML){
        Opencards[0].classList.add("boxMatch");
        Opencards[1].classList.add("boxMatch");
    }else {
        Opencards[0].classList.remove("boxOpen");
        Opencards[1].classList.remove("boxOpen");
    }

    Opencards = [];

    if (document.querySelectorAll(".boxMatch").length == emojis.length){
        alert("Você venceu!")
    }
}