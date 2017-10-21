// Set up state for our game

const state = {
  current: 0, //defines what the current question is
  //user statistics with a default value of 100
  health: 100,
  money: 100,
  happiness: 100,
  knowledge: 100,
  currentQuestionType: "",
  currentQuestionAmount: 0,
  //the questions and statements the user will view
  questions: [{
    statement: "A high school friend is founding a startup and wants you to be the CTO, will you accept the offer?",
    firstChoice: "Yes, it sounds like an awesome opportunity!",
    secondChoice: "No way, it's too risky.",
    type: "happiness", //this will indicate which statistic should be changed for this question
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
    loadStats(); // add the default statistics to the HTML.
    loadQuestions(); // load the questions.
}

function loadStats(){ // load the default values from the state into our HTML
    $(".health-stat").text(state.health);
    $(".knowledge-stat").text(state.knowledge);
    $(".money-stat").text(state.money);
    $(".happiness-stat").text(state.happiness);
}


function loadQuestions() { // load the text and choices for each question
    if (state.current < state.questions.length) {
        var question = state.questions[state.current]; //define a variable for the question
        $(".action-text").text(question.statement);
        $(".first-choice").text(question.firstChoice);
        $(".second-choice").text(question.secondChoice);
        state.currentQuestionType = question.type; //store the question type and section to use to modify the user stats.
        state.currentQuestionAmount = question.amount;
    } else { // then we run out of questions, hide the questions section and show the restart button.
        $(".questions").hide();
        $(".restart-container").show();
    }


}

function updateStats(choice) { //update the statistics when the user makes a choice.
    var stat = $("."+state.currentQuestionType+"-stat").text(); //using the question type variable, build the selector to grab the current statistics
    stat = parseInt(stat);
    if (choice == 1) { // if the first button is clicked, add the amount assigned to that question to the statistic
       stat += state.currentQuestionAmount;
    } else { // if the second button is clicked, subtract the amount assigned to that question to the statistic
      stat -= state.currentQuestionAmount;
    }
    $("."+state.currentQuestionType+"-stat").text(stat); // update the HTML with the newly calcuated stat
}

function restartGame() { // restart the game
    state.current = 0; // set current back to zero so that the new game starts at the first question
    loadQuestions(); // load the questions
    $(".questions").show(); // show the questions and hide the restart button
    $(".restart-container").hide();
    loadStats(); // load the default statistics
}

$(document).ready(function() { //when the page loads...
  startGame(); //call the startGame function that loads the default scores and the questions into our game.
   
  $(".first-choice").click(function() { // this will run when the first button is clicked.
    updateStats(1); // call the update stats function - this will change the statistics when the first button is clicked. We are passing in the number one to use in a conditional statement later.
    state.current += 1; //when the button is clicked, we will move the next question in the questions array.
    setTimeout(function(){ //wrap a setTimeout function around the loadQuestion function to add some time between the button click and the transition to the next question.
      loadQuestions(); // call the load Question button, to load the next question.
    },500)
  });
  
  $(".second-choice").click(function() { // this will run when the second button is clicked.
    updateStats(0); 
    state.current += 1; 
    setTimeout(function(){ 
      loadQuestions(); 
    },500)
  });
  
  $(".restart").click(function(){ // this will run when the restart button is clicked.
    restartGame(); // call the restart game function.
  })
    
})