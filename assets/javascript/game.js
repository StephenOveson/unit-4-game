$(document).ready(function () {

    let userScoreDisplay = $('#user-score')
    let userScore = 0;
    let crystalTotal = Math.floor(Math.random() * 101) + 19;
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

    $('#crystal1').on('click', function () {
        console.log(crystal1)
        userScoreDisplay.html(userScore = userScore + crystal1);
        gameOver()
    });

    $('#crystal2').on('click', function () {
        console.log(crystal2)
        userScoreDisplay.html(userScore = userScore + crystal2);
        gameOver()
    });

    $('#crystal3').on('click', function () {
        console.log(crystal3)
        userScoreDisplay.html(userScore = userScore + crystal3);
        gameOver()
    });

    $('#crystal4').on('click', function () {
        console.log(crystal4)
        userScoreDisplay.html(userScore = userScore + crystal4);
        gameOver()
    });

    $('#congratulation').html()
    $('#wins').html(userWins)
    $('#losses').html(userLosses)

    function gameOver() {
        if (userScore > crystalTotal) {
            $('#congratulation').html('You lose');
            $('#losses').html(userLosses++);
            // resetGame();
        } else if (userScore === crystalTotal) {
            $('#congratulation').html('You Won!');
            $('#wins').html(userWins++);
            // resetGame();
        } else {
            return;
        }
    }
});
