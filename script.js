const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.id;
        const computerChoice=compChoice();
        const gameResult=winner(userChoice,computerChoice);
        const result=document.querySelector('.win');
        result.innerHTML=`<p>${gameResult}</p>`;
        userScore.innerHTML=`<p>${uWin}</p>`;
        compScore.innerHTML=`<p>${cWin}</p>`;
        // console.log(`${uWin}`);
        // console.log(`${cWin}`);
        
    });
});

const compChoice=function(){
    const arr=['rock','scissor','paper'];
    const index=Math.floor(Math.random()*3);
    return arr[index];
}
let uWin=0;
let cWin=0;
const userScore=document.querySelector(".yourScore");
const compScore=document.querySelector(".compScore");
const winner=function(userChoice,computerChoice){
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        
        uWin+=1;
        
        return "You win!";
    } else {
        cWin+=1;
        return "Computer wins!";
    }
}

