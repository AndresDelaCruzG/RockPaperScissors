var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){

    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
    
}

setInterval(score, 3);

function convert(word){

	if(word === "paper") return '<img src="imagenes/papel.png" width="100px" height="90px">';
	if(word === "rock") return '<img src="imagenes/piedra.png" width="100px" height="90px">';
    return '<img src="imagenes/tijeras.png" width="100px" height="90px"></i>'
    
}

function game(UserChoice){

	var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    
	var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    
	var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
        win(UserChoice);
        
	}
	else if(UserChoice === ComChoice){
        draw(UserChoice);
        
	}
	else{
        lose(UserChoice);
        
    }
    

	function continueGame(){

		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
        box.style.display = "none";
        
	}
    
    setTimeout(continueGame, 1200);

}

function win(bn){

	UserPoints++;
    document.getElementById("who").innerHTML = "Ganaste :D !";
   
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
   
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 3000);

}

function draw(bn){

	document.getElementById("who").innerHTML = "Empate :/";
    
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 3000);

}

function lose(bn){
    
    ComPoints++;
	document.getElementById("who").innerHTML = "Perdiste :(";
    
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 3000);
}