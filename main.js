player1_name = "";
player2_name = "";

function addUser(){
    player1_name = document.getElementById("playerName1").value;
    player2_name = document.getElementById("playerName2").value;
    localStorage.setItem("player1Name",player1_name);
    localStorage.setItem("player2Name",player2_name);
    
    window.location = "game_page.html";
 }