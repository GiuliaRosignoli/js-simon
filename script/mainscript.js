/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// console.log("jQuery", jQuery);  jQuery Inclusion


$(document).ready(function(){

    //Variables
// I want 5 random numbers from 1 to 100
 var rangeNumbers = 100; // numbers from 1 to 100
 var randomNumbers = 5; // I need 5 random numbers
 var listOfNumbers = []; //collection of my random numbers
 var userChoice = 0; // Number chosen by the user

    // Numbers generations - 5 unique random numbers

while(listOfNumbers.length < randomNumbers) {
    var number =  randNum(rangeNumbers);   //function to generate a random number

    if(! listOfNumbers.includes(randNum)) {
        listOfNumbers.push(randNum);
    }
}












    // End doc ready
})



/*********************************************************
                      FUNCTIONS
*********************************************************/
  
function randNum(max){
     return Math.floor(Math.random()* max) + 1;
  }