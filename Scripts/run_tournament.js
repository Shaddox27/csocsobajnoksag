//A lejátszás gombra kattintva kiszámolja az eredményeket, és HTML-ben megjeleníti azokat.
function runTournamentEventHandler()
{
 	calculateRoundStageScores();
 	displayresults();
}

//A csapatBeosztas tömbben lévő score-t módosítja a véletlenszerű meccsek lefutása során.
function calculateRoundStageScores()
{
 	
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
		resultKey = 0
	} else if (0.37 <= randomNumber < 0.63) {
		resultKey = 1
	} else {
		resultKey = 2
	}
	return resultKey;
}

