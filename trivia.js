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
	else if (ans===3){ 
		y = document.getElementById("qans").value
		if(yy==="C"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===4){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===5){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===6){ 
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
	else if (ans===7){ 
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
	else if (ans===8){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===9){ 
		y = document.getElementById("qans").value
		if(yy==="C"){
			document.getElementById("question").value="You are right"
			score++
		}
		else {
			document.getElementById("question").value="You are wrong"
        
		}
		document.view.qscore.value=score
	}
	else if (ans===10){ 
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
	else if (i===3){ 
		document.view.qnum.value=i;	
		document.view.question.value ="What are the two colours of chips in Connect 4? \na)Blue and red \nb)Yellow and black \nc)Yellow and red \nd)Black and blue";
		document.view.qans.value=""
	}
	else if (i===4){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the protagonist of the game Dead Rising? \na)Chuck Green \nb)Carlito Keyes \nc)Nick Ramos \nd)Frank West";
		document.view.qans.value=""
	}
	else if (i===5){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the final boss of Super Mario Galaxy? \na)Bowser Jr. \nb)King Boo \nc)Rosalina \nd)Bowser";
		document.view.qans.value=""
	}
	else if (i===6){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In chess, which piece can jump over other pieces? \na)The King \nb)The Knight \nc)The Queen \nd)The Bishop";
		document.view.qans.value=""
	}
	else if (i===7){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the protagonist of MegaMan: Star Force? \na)Sonia Strumm \nb)Geo Stelar \nc)Zero \nd)Luna Hertz";
		document.view.qans.value=""
	}
	else if (i===8){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Which of the following is a legendary Pokemon? \na)Charizard \nb)Blastoise \nc)Spiritomb \nd)Shaymin";
		document.view.qans.value=""
	}
	else if (i===9){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the kid sidekick of Professor Layton? \na)Don Paolo \nb)Maya Fey \nc)Luke Triton \nd)Emmy";
		document.view.qans.value=""
	}
	else if (i===10){ 
		document.view.qnum.value=i;	
		document.view.question.value ="What is the name of the enemy group in Ghost Squad? \na)Shadaloo \nb)Indigo Wolves \nc)Blue Wolves \nd)Providence";
		document.view.qans.value=""
	}

	i++; 
	}
