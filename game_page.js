player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");

score_player_1 = 0;
score_player_2 = 0;

document.getElementById("name1").innerHTML = player1_name+" : ";
document.getElementById("name2").innerHTML = player2_name+" : ";
document.getElementById("score1").innerHTML = score_player_1;
document.getElementById("score2").innerHTML = score_player_2;

document.getElementById("question_turn").innerHTML = "Question turn : "+player1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn : "+player2_name;

function send(){
    word = document.getElementById("word").value;
    word = word.toLowerCase();
    
    replace1 = word.charAt(1);

    middle = Math.floor(word.length/2);
    replace2 = word.charAt(middle);

    last = word.length - 1;
    replace3 = word.charAt(last);

    remove1 = word.replace(replace1,"_");
    remove2 = remove1.replace(replace2,"_");
    final = remove2.replace(replace3,"_");
    console.log(final);

    question_tag = "<h4 id='word_display'> Q. "+final+"</h4>";
    answer_tag = "<br><input type='text' id='answer'>";
    button_tag = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row = question_tag+answer_tag+button_tag;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("answer").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answer_turn == "player1"){
            score_player_1 = score_player_1+1;
            document.getElementById("score1").innerHTML = score_player_1;
        }
        else{
            score_player_2 = score_player_2+1;
            document.getElementById("score2").innerHTML = score_player_2;
        }
        document.getElementById("check1").innerHTML = "You got it right!!!!!!!!";
    }
    else{
        document.getElementById("check1").innerHTML = "opps, wrong!!!!!!!!";
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question turn : "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question turn : "+player1_name;
    }
    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("answer_turn").innerHTML = "Answer turn : "+player1_name;
    }
    else{
        answer_turn = "player2";
        document.getElementById("answer_turn").innerHTML = "Answer turn : "+player2_name;
    }
    document.getElementById("output").innerHTML = "";
}