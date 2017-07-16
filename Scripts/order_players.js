var players = [
{nev: 'Barbay Ádám', occ: 0, id: 0},
{nev: 'Bodóczky Mihály', occ: 0, id: 1},
{nev: 'Czető Márton', occ: 0, id: 2},
{nev: 'Decsics Gergely', occ: 0, id: 3},
{nev: 'Diera Andor', occ: 0, id: 4},
{nev: 'Hadiné Gubics Andrea', occ: 0, id: 5},
{nev: 'Hallak Hella', occ: 0, id: 6},
{nev: 'Molnár László', occ: 0, id: 7},
{nev: 'Németh Zoltán', occ: 0, id: 8},
{nev: 'Rátkay András', occ: 0, id: 9},
{nev: 'Sándor Zoltán Péter', occ: 0, id: 10},
{nev: 'Soltesz Alexander', occ: 0, id: 11},
{nev: 'Szabó Erik Márk', occ: 0, id: 12},
{nev: 'Szabó Péter', occ: 0, id: 13},
{nev: 'Szilberhorn Zoltán', occ: 0, id: 14},
{nev: 'Taigiszer Dóra', occ: 0, id: 15},
{nev: 'Timpfel Gábor', occ: 0, id: 16},
{nev: 'Tóth Sára', occ: 0, id: 17},
{nev: 'Mező Imre', occ: 0, id: 18},
{nev: 'Koncz Gergely', occ: 0, id: 19}
];

// Mi a fene az az "occ"??? Ebből a névből semmi nem derül ki :D

var betPlayers = [];
var betPly;
var csapatBeosztas = [];

//a játékosokat beosztja csapatokba a "Mehet" lenyomására, valamint megjeleníti a csapatokat táblázatokban.
function getBetPlayerEventHandler()
{
    resetPage();
    assignIntoTeams();
    displayTeams();
    console.log(csapatBeosztas);
}


function getBetPlayer (player)
{
    betPlayers.push(player);
    return betPlayers;
}


//A players tömbből random játékost ad vissza
function getRandomPlayerToBeAssigned (players) {
    return players[Math.floor(Math.random()*players.length)];
}

//Beosztja a players tömbből a játékosokat a csapatBeosztas tömbbe, miközben kiüríti a players tömböt. 
function assignIntoTeams () {
    var currentPlayer;
    var currentTeam;
    var index;

    while (players.length != 0) {
        currentTeam = [];
        for (var i = 0; i < 2; i++) {
            currentTeam["teamName"] = "Csapat " + (csapatBeosztas.length+1);
            currentTeam["score"] = 0;
            currentPlayer = getRandomPlayerToBeAssigned(players);
            index = players.indexOf(currentPlayer);
            currentTeam.push(currentPlayer)
            players.splice(index,1);
        }

        csapatBeosztas.push(currentTeam);
    }
}

//Kiírja a HTML-ben levő táblázatba a csapatBeosztas tömbben levő csapatneveket és a csapattagokat.
function displayTeams() {


    var nodeTBody = document.querySelector("table > tbody");

    //végig megy mindig az összesen
    var nodeTHead = document.querySelector("table > thead");

    var s = '';

    s += "<tr>"
    s += "<th>" + "1. Játékos" +"</th>"
    s += "<th>" + "2. Játékos" +"</th>"
    s += "<th>" + "Csapat" +"</th>"
    s += "</tr>"

    nodeTHead.innerHTML = s;
    s ="";

    for(var i = 0; i < csapatBeosztas.length; i++)
    {
        s += "<tr>";
        for(var j = 0; j<2; j++){

            s += "<td>" + csapatBeosztas[i][j].nev + "</td>";

        }

        s += "<td>" + csapatBeosztas[i].teamName + "</td>";
        s += "</tr>";

    }
    nodeTBody.innerHTML = s;
}

/*visszaállítja a players (és a csapatBeosztas) tömb értékét az eredeti állapotra, ha több bajnokságot is le akarnánk futtatni egymás után.
Sajnos most csak eddig jutottam, ez a függvény még nem működik rendesen. Este folytatom, eljutsz ameddig eljutsz.
*/
function resetPage() {
    resetPlayers();
    
    var nodeTBody = document.querySelector("table > tbody");

    //végig megy mindig az összesen
    var nodeTHead = document.querySelector("table > thead");
    nodeTHead.innerHTML = "<tr></tr>";
    nodeTBody.innerHTML = "";
    
}

//Visszaállítja a players tömböt az eredeti értékére.
function resetPlayers() {
    players = [
        {nev: 'Barbay Ádám', occ: 0, id: 0},
        {nev: 'Bodóczky Mihály', occ: 0, id: 1},
        {nev: 'Czető Márton', occ: 0, id: 2},
        {nev: 'Decsics Gergely', occ: 0, id: 3},
        {nev: 'Diera Andor', occ: 0, id: 4},
        {nev: 'Hadiné Gubics Andrea', occ: 0, id: 5},
        {nev: 'Hallak Hella', occ: 0, id: 6},
        {nev: 'Molnár László', occ: 0, id: 7},
        {nev: 'Németh Zoltán', occ: 0, id: 8},
        {nev: 'Rátkay András', occ: 0, id: 9},
        {nev: 'Sándor Zoltán Péter', occ: 0, id: 10},
        {nev: 'Soltesz Alexander', occ: 0, id: 11},
        {nev: 'Szabó Erik Márk', occ: 0, id: 12},
        {nev: 'Szabó Péter', occ: 0, id: 13},
        {nev: 'Szilberhorn Zoltán', occ: 0, id: 14},
        {nev: 'Taigiszer Dóra', occ: 0, id: 15},
        {nev: 'Timpfel Gábor', occ: 0, id: 16},
        {nev: 'Tóth Sára', occ: 0, id: 17},
        {nev: 'Mező Imre', occ: 0, id: 18},
        {nev: 'Koncz Gergely', occ: 0, id: 19}
        ];
        csapatBeosztas = [];
    console.log("players:", players);
}