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
    let gameStart = false;
    let hiddenGame = false;

    $(document).on('keyup', function () {
        gameStart = true;
        hiddenGame = true;
    });

    function pressAny() {
        document.onkeyup = function () {
            if (gameStart = false) {
                return;
            } else {
                beginGame();
            }
        }
    };
    pressAny();

    $('.hidden').hide();

    function beginGame() {
        if (hiddenGame = false) {
            return;
        } else {
            $('.hidden').show();
            $('.press-any').empty();
        }
    }

    $('.press-any').html('Instructions:\nYou will be given a random number of Crystals to collect in this game.\nTo collect crystals you will need to click on any of the 4 images of crystals present. Each image will represent a different random amount.\nThe goal is to collect the same amount of crystals as is needed without going over or you lose!\n\nGood Luck!\n\nPress Any Key to Start!')

    $('.instructions').html('Instructions:\nClick an image to collect crystals.\nEach image is a random amount and a new random amount each round.\nTry to get the crystals needed exactly or you lose!')

    function resetGame() {
        userScoreDisplay.empty();
        userScore = 0;
        userScoreDisplay.html('Crystals Collected ' + userScore);
        gameTotalDisplay.empty();
        crystalTotal = 0;
        crystalTotal = Math.floor(Math.random() * 101) + 19;
        gameTotalDisplay.html('Crystals Needed ' + crystalTotal);
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
            $('#losses').html('Losses ' + (userLosses = userLosses + 1));
            resetGame();
        } else if (userScore === crystalTotal) {
            congrats.html('You Won!');
            $('#wins').html('Wins ' + (userWins = userWins + 1));
            resetGame();
        } else {
            return;
        }
    }


    $('#crystal1').on('click', function () {
        console.log(crystal1)
        userScoreDisplay.html('Crystals Collected ' + (userScore = userScore + crystal1));
        gameOver()
        initAudio();
    });

    $('#crystal2').on('click', function () {
        console.log(crystal2)
        userScoreDisplay.html('Crystals Collected ' + (userScore = userScore + crystal2));
        gameOver()
    });

    $('#crystal3').on('click', function () {
        console.log(crystal3)
        userScoreDisplay.html('Crystals Collected ' + (userScore = userScore + crystal3));
        gameOver()
    });

    $('#crystal4').on('click', function () {
        console.log(crystal4)
        userScoreDisplay.html('Crystals Collected ' + (userScore = userScore + crystal4));
        gameOver()
    });

    $('#wins').html('Wins ' + userWins)
    $('#losses').html('Losses ' + userLosses)

    userScoreDisplay.html('Crystals Collected ' + userScore);
    gameTotalDisplay.html('Crystals Needed ' + crystalTotal);
    console.log(crystalTotal)
});
