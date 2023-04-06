const letters="abcdefghijklmnopqrstuvwxyz";
let lettersArray=Array.from(letters);

let letterContainer=document.querySelector(".letters");

lettersArray.forEach((letter) =>{
    let span=document.createElement("span");
    let textspan=document.createTextNode(letter);

    span.appendChild(textspan);
    span.className="letter-box";

    letterContainer.appendChild(span);
});

const words ={
    programming:["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies:["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people:["albert einstein", "hitchcock", "alexander", "cleopatra", "mahatma ghandi"],
    countries:["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
};

let allkeys=Object.keys(words);
let randomPropNumber=Math.floor(Math.random()*allkeys.length);

let randompropName= allkeys[randomPropNumber];

let randompropValue=words[randompropName];

let randomValuenumber=Math.floor(Math.random() * randompropValue.length);

let randomValueValue=randompropValue[randomValuenumber];

// console.log(randomValueValue)
document.querySelector(".game-info .category span").innerHTML=randompropName;

let lettersGuessContainer=document.querySelector(".letter-guess");

let letterAndSpace=Array.from(randomValueValue);

letterAndSpace.forEach((letter) =>{
    emptyspan=document.createElement("span");

    if(letter ===" "){
        emptyspan.className="with-space";
    }
    lettersGuessContainer.appendChild(emptyspan);
});

let guessSpans=document.querySelectorAll(".letter-guess span");
let wrongAttempts=0;
let theDraw=document.querySelector(".hungman-draw ");

document.addEventListener("click",(e) =>{
    let theStuts=false;
    if(e.target.className ==="letter-box"){
        e.target.classList.add("clicked");

        let theClickedLetter=e.target.innerHTML.toLowerCase();
        let theChosenWorld=Array.from(randomValueValue);

        theChosenWorld.forEach((wordLetter ,wordindex) =>{
            if(theClickedLetter == wordLetter){
                guessSpans.forEach((span,spanindex) =>{
                    if (wordindex ===spanindex){
                        theStuts=true;

                        span.innerHTML=theClickedLetter;
                    }
                });
            }
        });
        if(theStuts !==true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            document.getElementById("fail").play();

            if(wrongAttempts ===8){
                letterContainer.classList.add("finished");
                endGame();
            }
        }else{
            document.getElementById("succes").play();
        };
    };
});
function endGame(){
    let div =document.createElement("div");
    let textDiv =document.createTextNode(`Over Game,The word Is ${randomValueValue}`);
    div.appendChild(textDiv);

    div.className="popup";
    document.body.appendChild(div);
};

