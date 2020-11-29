$(document).ready(function() {

    //Find all elements with the class name .card
    const card = document.querySelectorAll(".card");

    //Set variable for the first and second card click 
    let firstClick;
    let secondClick;

    function turnCard() {
        $('.card').click(function(){
            $(this).toggleClass('show-card');   
        });
    }
    
    $(turnCard);

});

    



