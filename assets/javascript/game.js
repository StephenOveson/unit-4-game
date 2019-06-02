$(document).ready(function (){

    let userScoreDisplay = $('#user-score')
    let userScore = 0;
    let crystalTotal =  Math.floor(Math.random() * 101) + 19;
    let crystal1 = Math.floor(Math.random() * 12) + 1;
    let num1 = parseInt(crystal1);
    let crystal2 = Math.floor(Math.random() * 12) + 1;
    let num2 = parseInt(crystal2);
    let crystal3 = Math.floor(Math.random() * 12) + 1;
    let num3 = parseInt(crystal3);
    let crystal4 = Math.floor(Math.random() * 12) + 1;
    let num4 = parseInt(crystal4);
    let userLosses = 0;
    let userWins = 0;


    
    userScoreDisplay.html(userScore);
    $('#game-total').html(crystalTotal);
    console.log(crystalTotal)
    
    $('#crystal1').on('click', function(){
        console.log(crystal1)
        userScoreDisplay.html(userScore = userScore + crystal1);
    });

    $('#crystal2').on('click', function(){
        console.log(crystal2)
        userScoreDisplay.html(userScore = userScore + crystal2);
    });

    $('#crystal3').on('click', function(){
        console.log(crystal3)
        userScoreDisplay.html(userScore = userScore + crystal3);
    });

    $('#crystal4').on('click', function(){
        console.log(crystal4)
        userScoreDisplay.html(userScore = userScore + crystal4);
    });

    if (userScore > crystalTotal) {
        $('congratulations').html('You lose');
        $('losses').html(userLosses + 1);
        resetGame();
    } else if (userScore = crystalTotal) {
        $('congratulations').html('You Won!');
        $('wins').html(userWins + 1);
        resetGame();
    } else {
        return;
    }
    
}) ;
