$(document).ready(function() {

    //Find all elements with the class name .card
    const card = document.querySelectorAll(".card");

    //Set variable for the first and second card click 
    let firstClick;
    let secondClick;
    let cardFlipped = false;

    //cardFlipped set to false as when game starts, no cards are flipped
    //function will set cardFlipped to true
    

    //cardFlipped set to false as when game starts game will not be frozen
    //function will set cardFlipped to true to freeze game while cards turn back over
    

    function turnCard() {

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

            if (firstClick.dataset.icon === secondClick.dataset.icon) {
                //If a match, remove event listener to stop card flipping back
                $(firstClick).off('click', turnCard);
                $(secondClick).off('click', turnCard);
            } else {
                //If not a match remove .show-card class (turns card back around)
                //Timeout give us time to click second card before first turns over 
                setTimeout(() => {
                    $(firstClick).removeClass('show-card');
                    $(secondClick).removeClass('show-card');    
                }, 1500);
                
                
            }

        };

        //check for match


        
        
        //When element of .card calls clicked, .show-card class will be added if absent and removed if present
        //This will add css styling to flip the card
        
    }

    
    $('.card').on('click', turnCard);




});

    


