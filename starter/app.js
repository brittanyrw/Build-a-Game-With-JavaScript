// Set up state for our game

const state = {
  current: 0, 
  // add default values for your statistics
  health: 0,
  money: 0,
  happiness: 0,
  knowledge: 0,
  currentQuestionType: "",
  currentQuestionAmount: 0,
  //sample questions
  questions: [{
    statement: "A high school friend is founding a startup and wants you to be the CTO, will you accept the offer?",
    firstChoice: "Yes, it sounds like an awesome opportunity!",
    secondChoice: "No way, it's too risky.",
    type: "happiness", 
    amount: 20
    },{
    statement: "By building a new feature, you just saved your company $3 million. Will you ask your boss for a raise?",
    firstChoice: "Of course, I deserve some recognition.",
    secondChoice: "Nah, I'll wait and see what happens at my performance evaluation next year.",
    type: "money",
    amount: 20
    },{
    statement: "There is a developer conference next week, will you attend?",
    firstChoice: "Of course, I love attending events.",
    secondChoice: "I can't, I'll be too busy.",
    type: "knowledge",
    amount: 20
    },{
    statement: "One of your favorite developers just released a video course, will you purchase it?",
    firstChoice: "Nope, I'll purchase it later.",
    secondChoice: "Heck yes, I bought it two minutes after it was released.",
    type: "money",
    amount: 20
    },{
    statement: "Some friends are working on a cool side-project and ask you to join the team, will you?",
    firstChoice: "Yes, it'll be fun!",
    secondChoice: "I don't have time to work on side projects.",
    type: "happiness",
    amount: 20
    },{
    statement: "You've been working non-stop on a project at work, will you take a break or power through?",
    firstChoice: "I'll recharge and come back to the project refreshed.",
    secondChoice: "I'll keep going, then I can relax.",
    type: "health",
    amount: 20
    }         
  ]
}

//create the functions for our game

function startGame() {
    
}

function loadStats(){ // load the default values from the state into our HTML
    
}

function loadQuestions() { // load the text and choices for each question
  
}

function updateStats(choice) { //update the statistics when the user makes a choice.

}

function restartGame() { // restart the game

}

$(document).ready(function() { //when the page loads...
  startGame(); //call the startGame function that loads the default scores and the questions into our game.
   
  $(".first-choice").click(function() { // this will run when the first button is clicked.
    
  });
  
  $(".second-choice").click(function() { // this will run when the second button is clicked.
    
  });
  
  $(".restart").click(function(){ // this will run when the restart button is clicked.
    
  })
    
})