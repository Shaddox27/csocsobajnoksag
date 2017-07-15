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

var betPlayers = [];
var betPly;
var sorSzam = 1;


function getBetPlayerEventHandler()
{
    var x = document.getElementById("lstPlayers").selectedIndex;
    betPly = parseInt(document.getElementsByTagName("option")[x].value);

    for(var i = 0; i < players.length; i++)
    {
        if(betPly == players[i].id)
        {
            getBetPlayer(players[i]);
        }   
    }

    var nodeTBody = document.querySelector("table > tbody");

//végig megy mindig az összesen
var nodeTHead = document.querySelector("table > thead");

var s = '';

    s += "<tr>"
    for(var k in betPlayers[0]){
    
    s += "<th>" + k.charAt(0).toLocaleUpperCase() + k.slice(1) +"</th>"
  
    }
    s += "</tr>"

nodeTHead.innerHTML = s;
s ="";

for(var i = 0; i < betPlayers.length; i++)
{
    s += "<tr>";
    for(var k in betPlayers[i]){
    
    s += "<td>" + betPlayers[i][k] +"</td>";
  
    }
    s += "</tr>";

    sorSzam++
}
nodeTBody.innerHTML = s;
}


function getBetPlayer (player)
{
    betPlayers.push(player);
    return betPlayers;
}