const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionElement=document.getElementById("question");
const formElement=document.getElementById("form");
const inputElement=document.getElementById("input");
const scoreElement=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}


scoreElement.innerText=`score: ${score}`;

questionElement.innerText=`What is ${num1} multiply by ${num2}?`;

const correctAnswer=num1*num2;

formElement.addEventListener("submit",()=>{
    // event.preventDefault();
const userInput=+inputElement.value;
if(userInput===correctAnswer){
    score++;
    UpdateLocalStorage();
}else{
    score--;
    UpdateLocalStorage();
}

});

function UpdateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}



// console.log(num1)
