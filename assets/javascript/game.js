$(document).ready(function () {

    let gameTotalDisplay = $('#game-total')
    let userScoreDisplay = $('#user-score')
    let userScore = 0;
    let crystalTotal = Math.floor(Math.random() * 101) + 19;
    let crystal1 = Math.floor(Math.random() * 12) + 1;
    let crystal2 = Math.floor(Math.random() * 12) + 1;
    let crystal3 = Math.floor(Math.random() * 12) + 1;
    let crystal4 = Math.floor(Math.random() * 12) + 1;
    let userLosses = 0;
    let userWins = 0;
    let congrats = $('congratulation');

    function resetGame() {
        userScoreDisplay.empty();
        userScore = 0;
        userScoreDisplay.html(userScore);
        gameTotalDisplay.empty();
        crystalTotal = 0;
        crystalTotal = Math.floor(Math.random() * 101) + 19;
        gameTotalDisplay.html(crystalTotal);
        crystal1 = 0;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = 0;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = 0;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = 0;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }

    function gameOver() {
        if (userScore > crystalTotal) {
            congrats.html('You lose');
            $('#losses').html(userLosses = userLosses + 1);
            resetGame();
        } else if (userScore === crystalTotal) {
            congrats.html('You Won!');
            $('#wins').html(userWins = userWins + 1);
            resetGame();
        } else {
            return;
        }
    }


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

    $('#wins').html(userWins)
    $('#losses').html(userLosses)

    userScoreDisplay.html(userScore);
    gameTotalDisplay.html(crystalTotal);
    console.log(crystalTotal)
});
