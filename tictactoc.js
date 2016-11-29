var tab = document.getElementById('tableau');

var gagnep1 = document.getElementById("gagnant1");
var gagnep2 = document.getElementById("gagnant2");

var player = 1;

var scorenul=0;
var scoreplayer1=0;
var scoreplayer2=0;

var cells = tab.getElementsByTagName("td");

for(i=0 ; i<9 ; i++){
  cells[i].onclick = clickcells;
}

var t=0;

function clickcells(e){
    if(player == 1 && e.target.className == ""){
      e.target.className = "player2";
      player = 2;
      document.getElementById("tour").innerHTML = "Tour player 1";
      t++;
      console.log(t);
    }
    else if(player == 2 && e.target.className == ""){
      e.target.className = "player1";
      document.getElementById("tour").innerHTML = "Tour player 2";
      player = 1;
      t++;
      console.log(t);
    }
    victoire();
}

function victoire(){

  if(cells[0].className == "player1" && cells[1].className == "player1" && cells[2].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }
  if(cells[3].className == "player1" && cells[4].className == "player1" && cells[5].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }
  else if(cells[6].className == "player1" && cells[7].className == "player1" && cells[8].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }

  else if(cells[0].className == "player1" && cells[3].className == "player1" && cells[6].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }
  else if(cells[1].className == "player1" && cells[4].className == "player1" && cells[7].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }
  else if(cells[2].className == "player1" && cells[5].className == "player1" && cells[8].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }

  else if(cells[0].className == "player1" && cells[4].className == "player1" && cells[8].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }
  else if(cells[2].className == "player1" && cells[4].className == "player1" && cells[6].className == "player1"){
    gagnep1.innerHTML = "Player 1 a gagner";
    gagnep1.style.display = "block";
    scoreplayer1++;
    document.getElementById("histop1").innerHTML = "score player 1 = " + scoreplayer1 + "pts";
  }


  else if(cells[0].className == "player2" && cells[1].className == "player2" && cells[2].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if(cells[3].className == "player2" && cells[4].className == "player2" && cells[5].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if(cells[6].className == "player2" && cells[7].className == "player2" && cells[8].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }

  else if(cells[0].className == "player2" && cells[3].className == "player2" && cells[6].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if(cells[1].className == "player2" && cells[4].className == "player2" && cells[7].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if(cells[2].className == "player2" && cells[5].className == "player2" && cells[8].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }

  else if(cells[0].className == "player2" && cells[4].className == "player2" && cells[8].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if(cells[2].className == "player2" && cells[4].className == "player2" && cells[6].className == "player2"){
    gagnep2.innerHTML = "Player 2 a gagner";
    gagnep2.style.display = "block";
    scoreplayer2++;
    document.getElementById("histop2").innerHTML = "score player 2 = " + scoreplayer2 + "pts";
  }
  else if (t==9){
    alert("Match nul");
  }
}

function reset(){
    t=0;
    for(i=0 ; i<9 ; i++){
      cells[i].className = "";
      gagnep2.style.display = "none";
      gagnep1.style.display = "none";
      document.getElementById("tour").innerHTML ="";
    }
}
