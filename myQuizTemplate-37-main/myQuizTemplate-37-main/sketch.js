var canvas;
var gameState = 0;
var contestantCount, database, quiz, question, contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState(); 
  quiz.start();
}


function draw(){
  background("lightBlue");

  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  
}
