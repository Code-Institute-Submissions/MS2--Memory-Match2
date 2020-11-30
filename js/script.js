$(document).ready(function() {

    //Find all elements with the class name .card
    const card = document.querySelectorAll(".card");

    //Set variable for the first and second card click 
    let firstClick;
    let secondClick;
    let cardFlipped = false;
    let freezeGame = false;
    //cardFlipped set to false as when game starts, no cards are flipped
    //function will set cardFlipped to true
    
    
    randomise();
     
    //Shuffles the cards in a random order
     function randomise() {
        card.forEach(card => {
            let randomNum = Math.floor(Math.random() * 12);
            card.style.order = randomNum;
        });
    }  


    function turnCard() {
        if (freezeGame) return;
        if (this === firstClick) return;
        
        $(this).addClass('show-card');

        if(firstClick == 1){
            second = 60;
            
            startTimer();
        }
        

        //If its TRUE that cardFlipped is false, set cardFlipped is true 
        //and set firstClick to this to target card being targeted
        if (!cardFlipped) {
            cardFlipped = true;
            firstClick = this;
        } else {
            //second click
            cardFlipped = false;
            secondClick = this;

            checkCardMatch();
        };
        
    }


    $('.card').on('click', turnCard);

    //Time countdown
    let timerOn = true
    let time = 60;
    let timer;
    function startTimer() {
    timer = setInterval(function () {
        time--;

        //Stops timer from going into a minus
        if (time <= 0 ) {
            clearInterval(time = 0) 
        }

        seconds = ("0" + (time % 60)).slice(-2);
        document.querySelector(".timer").innerHTML = seconds;
    }, 1000);
    }

    let clicked;
    if (timerOn === true) {
    startTimer();
    timerOn = true;
    }

    //Checks to see if firstCLick datasets equals secondClick. Feezes cards if matched, removes .show-card class and turns back if no a match
    function checkCardMatch() {
        let cardsMatched = firstClick.dataset.icon === secondClick.dataset.icon;
        
        if (cardsMatched) {
            freezeCards();
        } else {
            turnCardBack();
        } 
            
    }

    //Freezes the cards once turned so they cant turn back on click until another one has been selected (if not a match)
    function freezeCards() {
        $(firstClick).off('click', turnCard);
        $(secondClick).off('click', turnCard);
    }

    //Removes .show-card class and turns card back over
    //Timeout give us time to click second card before first turns over 
    function turnCardBack() {
        freezeGame = true;

        setTimeout(() => {
            $(firstClick).removeClass('show-card');
            $(secondClick).removeClass('show-card');
            
            freezeGame = false
        }, 1000);

    }

    //Resets cards, unfreezes game, no cards flipped, no first or  second card selected. Game starts again. 
    function resetCards() {
        firstClick = null;
        secondClick = null;
        freezeGame = false;
        cardFlipped = false;

    }

    

    

});

    


