// initialize key variables to be used in the program
var score = 0
var score_percent = 0
var current_streak = 0
var highest_streak = 0
var i = 1
var ans = 1

// initialize other significant variables which do not need to be assigned values in the resetGame function
var wrong_randomizer = 0
var score_message = ""

// initialize a variable to hold the sound for a correct or incorrect answer
var answer_sound

// define a function for if the user submits a correct answer
function correctAnswer(){
	// update variables
	score++
	current_streak++
	if (current_streak > highest_streak){
		highest_streak = current_streak
	}

	// adjust various elements
	answer_sound = document.getElementById("correct_sound_id")
	document.getElementById("question").value="You are right!"

	// check if the current streak is 5 or greater to determine image
	if (current_streak >= 5){
		document.score_image.src="images/happy_yoshi.gif"
	}
	else {
		document.score_image.src="images/winking_emoji.gif"
	}
	answer_sound.play();
}

// define a function for if the user submits an incorrect answer
function wrongAnswer(){
	// update variables
	current_streak = 0

	// adjust various elements
	answer_sound = document.getElementById('incorrect_sound_id')
	document.getElementById("question").value="You are wrong..."

	// determine randomized image from a list of incorrect images
	wrong_randomizer = Math.floor(Math.random() * 3) + 1
	if (wrong_randomizer===1){
		document.score_image.src="images/crying_emoji.gif"
	}
    	else if (wrong_randomizer===2){
		document.score_image.src="images/frowning_emoji.gif"
	}
	else {
		document.score_image.src="images/angry_emoji.gif"
	}
	answer_sound.play();
}

// define a function for submitting an answer, where the real answer to each question is stored in a conditional statement and the score is calculated
function submitAnswer(){
	y = document.getElementById("qans").value
	var yy=y.toUpperCase();
	x = document.getElementById("question").value
    
	if (ans===1){
		y = document.getElementById("qans").value
		if(yy==="B"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===2){ 
		y = document.getElementById("qans").value
		if(yy==="A"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===3){ 
		y = document.getElementById("qans").value
		if(yy==="C"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===4){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===5){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===6){ 
		y = document.getElementById("qans").value
		if(yy==="B"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===7){ 
		y = document.getElementById("qans").value
		if(yy==="B"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===8){ 
		y = document.getElementById("qans").value;
		if(yy==="D"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===9){ 
		y = document.getElementById("qans").value
		if(yy==="C"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===10){ 
		y = document.getElementById("qans").value
		if(yy==="B"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===11){ 
		y = document.getElementById("qans").value
		if(yy==="A"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===12){ 
		y = document.getElementById("qans").value
		if(yy==="A"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===13){ 
		y = document.getElementById("qans").value
		if(yy==="C"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===14){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===15){ 
		y = document.getElementById("qans").value
		if(yy==="B"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak
	}
	else if (ans===16){ 
		y = document.getElementById("qans").value
		if(yy==="D"){
			correctAnswer();
		}
		else {
			wrongAnswer();
		}
		document.view.qscore.value=score
		document.view.streakscore.value=current_streak

		// as this is the last question in the quiz, update the text of "Next Question" to make it more appropriate
		document.view.go.value="End Quiz..."
	}

	// enable selection of "Next Question"
	document.getElementById("go_id").disabled = false
	document.getElementById("go_id").style.opacity = "1"

	// disable selection of "Submit Answer" to avoid logic issues
	document.getElementById("user_submit").disabled = true
	document.getElementById("user_submit").style.opacity = "0.5"

	// update var ans
	ans++; 
}

// define a function to re-enable the "Play Again" button such that the good/bad score music can play fully
function resetLoad(){
	document.getElementById("reset_id").disabled = false
	document.getElementById("reset_id").style.opacity = "1"
	document.getElementById("reset_id").value = "Play Again"
}

// define the main function, where the questions and their possible answers are inputted in "else" statements
function main(){
	// set the score image to the question mark
	document.score_image.src="images/question_mark.gif"

	// disable selection of "Next Question" to avoid logic issues
	document.getElementById("go_id").disabled = true
	document.getElementById("go_id").style.opacity = "0.5"

	// enable selection of "Submit Answer"
	document.getElementById("user_submit").disabled = false
	document.getElementById("user_submit").style.opacity = "1"

	// document questions
	if (i===1){
		document.view.qnum.value=i;
		document.view.question.value ="In Mario Kart, which item can seek enemies? \na) Mushroom \nb) Red Shell \nc) Banana \nd) Green Shell";
		document.view.qans.value=""
	}
	else if (i===2){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In Dungeons and Dragons, which die is used to roll for attacking order? \na) 20-sided \nb) 10-sided \nc) 4-sided \nd) 8-sided";
		document.view.qans.value=""
	}
	else if (i===3){ 
		document.view.qnum.value=i;	
		document.view.question.value ="What are the two colours of chips in Connect 4? \na) Blue and red \nb) Yellow and black \nc) Yellow and red \nd) Black and blue";
		document.view.qans.value=""
	}
	else if (i===4){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the protagonist of the game Dead Rising? \na) Chuck Greene \nb) Carlito Keyes \nc) Nick Ramos \nd) Frank West";
		document.view.qans.value=""
	}
	else if (i===5){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the final boss of Super Mario Galaxy? \na) Bowser Jr. \nb) King Boo \nc) Rosalina \nd) Bowser";
		document.view.qans.value=""
	}
	else if (i===6){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In chess, which piece can jump over other pieces? \na) The King \nb) The Knight \nc) The Queen \nd) The Bishop";
		document.view.qans.value=""
	}
	else if (i===7){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the protagonist of MegaMan: Star Force? \na) Sonia Strumm \nb) Geo Stelar \nc) Zero \nd) Luna Platz";
		document.view.qans.value=""
	}
	else if (i===8){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Which of the following is a legendary Pokemon? \na) Charizard \nb) Blastoise \nc) Spiritomb \nd) Shaymin";
		document.view.qans.value=""
	}
	else if (i===9){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the kid sidekick of Professor Layton? \na) Don Paolo \nb) Maya Fey \nc) Luke Triton \nd) Emmy";
		document.view.qans.value=""
	}
	else if (i===10){ 
		document.view.qnum.value=i;	
		document.view.question.value ="What is the name of the enemy group in Ghost Squad? \na) Shadaloo \nb) Indigo Wolves \nc) Blue Wolves \nd) Providence";
		document.view.qans.value=""
	}
	else if (i===11){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the doctor in House Of The Dead? \na) Curien \nb) Mr. G \nc) Goldman \nd) Magician";
		document.view.qans.value=""
	}
	else if (i===12){ 
		document.view.qnum.value=i;	
		document.view.question.value ="Who is the protagonist of Call Of Duty? \na) Alex Mason \nb) Jason Hudson \nc) Friedrich Steiner \nd) Viktor Reznov";
		document.view.qans.value=""
	}
	else if (i===13){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In the Pokemon games, which region does Cynthia hail from? \na) Kanto \nb) Johto \nc) Sinnoh \nd) Alola";
		document.view.qans.value=""
	}
	else if (i===14){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In Super Mario, what is the name of Mario's brother? \na) Waluigi \nb) Wario \nc) Yoshi \nd) Luigi";
		document.view.qans.value=""
	}
	else if (i===15){ 
		document.view.qnum.value=i;	
		document.view.question.value ="What is the gender of the masked Samus from Metroid? \na) Male \nb) Female \nc) Hermaphroditic \nd) Other/Alien Gender";
		document.view.qans.value=""
	}
	else if (i===16){ 
		document.view.qnum.value=i;	
		document.view.question.value ="In Super Smash Bros, what is the white floating glove named? \na) Destroyer \nb) Tabuu \nc) Mario's Glove \nd) Master Hand";
		document.view.qans.value=""
	}

	// create a default branch for the end of the quiz
	else {
		// wipe the values of the question holder and the answer field; also disable the answer field and "Submit Answer" to prevent user tampering
		document.view.qans.value = ""
		document.view.question.value = ""
		document.getElementById("qans").disabled = true
		document.getElementById("user_submit").disabled = true
		document.getElementById("user_submit").style.opacity = "0.5"

		// calculate the percent of the quiz that is correct (by dividing score by number of questions * 100), rounded to 1 decimal place
		score_percent = score / 16 * 100
		score_percent = score_percent.toFixed(1)
		
		// for mobile users' viewing, collapse the image and textarea; the inline-block design would not be shown on a phone
		document.score_image.style.width = "1px"
		document.score_image.style.height = "1px"
		document.score_image.style.opacity = "0"
		document.view.qdisplay.cols = "1"
		document.view.qdisplay.rows = "1"
		document.view.qdisplay.style.opacity = "0"

		// for mobile users' viewing, set the form's font size to 1%
		document.view.style.fontSize = "1%"

		// for aesthetic reasons, make the form "disappear"
		document.view.style.opacity = "0"

		// make the result div visible and make the "Play Again" button semi-visible
		document.getElementById("result_window").style.opacity = "1"
		document.getElementById("reset_id").style.opacity = "0.75"

		// stop the background music for playing long sound effects, setting the song back to the start
		var background_audio = document.getElementById("pixel_song")
		background_audio.pause();
		background_audio.currentTime = 0

		// initialize a variable to hold the sound for a good or bad score
		var result_sound

		// check to see if the user got a good score of 80% or more
		if (score_percent >= 80){
			// set the good score image, output a message of congratulations, and play a celebratory sound
			document.getElementById("result_image_id").src = "images/dancing_mario_bros.gif"
			score_message = "Fantastic job!<br>You answered " + score + " questions correctly, which is " + score_percent + "% of the quiz! You had a streak of " + highest_streak + " correct answers!"
			document.getElementById("result_message").innerHTML = score_message
			result_sound = document.getElementById("good_score_sound")
			result_sound.play();
		}
		else {
			// set the bad score image, output a message of encouragement to do better (and try again), and play a less cheery sound
			document.getElementById("result_image_id").src = "images/sad_yoshi.gif"
			score_message = "You answered " + score + " question(s) correctly, which is " + score_percent + "% of the quiz. You had a streak of " + highest_streak + " correct answer(s).<br>You can surely do better..."
			document.getElementById("result_message").innerHTML = score_message
			result_sound = document.getElementById("bad_score_sound")
			result_sound.play();
		}

		// control the duration of the time that the "Play Again" button is disabled, allowing result_sound to play fully; also provide appropriate styles
		document.getElementById("reset_id").value = "Play Again (in 6 seconds)"
		setTimeout(resetLoad, 6500);
	}

	// update var i
	i++; 
}

// define a function to reset the game
function resetGame(){
	// re-assign original values of key variables
	score = 0
	score_percent = 0
	current_streak = 0
	highest_streak = 0
	i = 1
	ans = 1

	// re-enable certain visible components of the quiz and rename the "Next Question" button
	document.getElementById("qans").disabled = false
	document.view.go.value="Next Question"
	
	// restore image and textarea to their original appearance
	document.score_image.style.width = "65px"
	document.score_image.style.height = "70px"
	document.score_image.style.opacity = "1"
	document.view.qdisplay.cols = "32"
	document.view.qdisplay.rows = "9"
	document.view.qdisplay.style.opacity = "1"

	// set the form's font size back to normal
	document.view.style.fontSize = "100%"

	// make the form opaque again
	document.view.style.opacity = "1"

	// set up the first question of the quiz
	document.view.qscore.value=score
	document.view.streakscore.value=current_streak
	main()

	// restart the background music
	var background_audio = document.getElementById("pixel_song")
	background_audio.play();

	// reset the result_window div
	document.getElementById("result_window").style.opacity = "0"
	document.getElementById("result_image_id").src = ""
	document.getElementById("result_message").innerHTML = " "
	document.getElementById("reset_id").disabled = true
}
