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
    

    //cardFlipped set to false as when game starts game will not be frozen
    //function will set cardFlipped to true to freeze game while cards turn back over
    

    function turnCard() {
        if (freezeGame) return;
        $(this).addClass('show-card');

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

    function checkCardMatch() {
        let cardsMatched = firstClick.dataset.icon === secondClick.dataset.icon;
        
        if (cardsMatched) {
            freezeCards();
        } else {
            turnCardBack();
        } 
            
    }

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

        console.log("class removed!")
    }

        

});

    


