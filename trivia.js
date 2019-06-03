// define key variables to be used in the program
var score = 0
var i = 1
var ans = 1

// define a function for submitting an answer, where the real answer to each question is stored in a conditional statement and the score is calculated
function submitAnswer(){
	y = document.getElementById("qans").value
	var yy=y.toUpperCase();
	x = document.getElementById("question").value
	if (ans===1){
		y = document.getElementById("qans").value
		if(yy==="B"){
			document.getElementById("question").value="You are right"
			score++
	
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===2){ 
		y = document.getElementById("qans").value
		if(yy==="A"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}


	ans++; 
}
        
// define the main function, where the questions and their possible answers are inputted in "else" statements
function main(){ 
	if (i===1){ 
		document.view.qnum.value=i;
		document.view.question.value ="In Mario Kart, which item can seek enemies? \na)Mushroom \nb)Red Shell \nc)Banana \nd)Green Shell";
		document.view.qans.value=""
	}
	else if (i===2){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In Dungeons and Dragons, which die is used to roll for attacking order? \na)20-sided \nb)10-sided \nc)4-sided \nd)8-sided";
		document.view.qans.value=""
	}


	i++; 
	}