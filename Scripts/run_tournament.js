//A lejátszás gombra kattintva kiszámolja az eredményeket, és HTML-ben megjeleníti azokat.
function runTournamentEventHandler()
{
 	calculateRoundStageScores();
 	displayresults();
}

//A csapatBeosztas tömbben lévő score-t módosítja a véletlenszerű meccsek lefutása során.
function calculateRoundStageScores()
{
 	var currentTeam1;
 	var currentTeam2;
 	for (var i = 0; i < csapatBeosztas.length-1; i++) {

 		currentTeam1 = csapatBeosztas [i];
	 	console.log("currentTeam1", currentTeam1);

 		for (var j = i+1; j < csapatBeosztas.length; j++){
 			currentTeam2 = csapatBeosztas[j];
 			console.log("currentTeam2", currentTeam2);
 			var results = calculateMatchResult();
 			if (results == 0) {
 				csapatBeosztas[i].score += 3;
 			} else if (results == 1) {
 				csapatBeosztas[i].score += 1;
 				csapatBeosztas[j].score += 1;
 			} else {
 				csapatBeosztas[j].score += 3;
 			}

 		}
 	}
}


function displayresults()
{
    var nodeTHead = document.getElementById("scoresHead");
    var nodeTBody = document.getElementById("scoresBody");
    var s= ""

    nodeTHead.innerHTML = "<tr><th>Csapat</th><th>Pontszám</th></tr>";
    for (var i = 0; i < csapatBeosztas.length; i++) {
    	s += "<tr>";
    	s += "<td>";
    	s += csapatBeosztas[i].teamName;
    	s += "</td>";
    	s += "<td>";
    	s += csapatBeosztas[i].score;
    	s += "</td>";
    	s += "</tr>";
    }

    nodeTBody.innerHTML = s;

}

//Egy véletlenszerű számot ad vissza, amely a meccs kimenetelét reprezentálja. Az első csapat győzelme esetén 0-t, döntetlen esetén 1-t, a második csapat győzelme esetén 2-t ad vissza.
//Statisztikailag a döntetlenre kb 26 %, a győzelemre így 37-37% esély van. Ezt a modellt vettem alapul a számításhoz.
function calculateMatchResult () {

	var resultKey;
	var randomNumber = Math.random();
	if (randomNumber<0.37) {
		resultKey = 0;
	} else if (0.37 <= randomNumber && randomNumber < 0.63) {
		resultKey = 1;
	} else {
		resultKey = 2;
	}
	return resultKey;
}

