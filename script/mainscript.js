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
 var listUserNumbers = [];
 var arrUserNumbers = [];
 var correctNumbers = [];
 var wrongNumbers = [];

    // Numbers generations - 5 unique random numbers

while(listOfNumbers.length < randomNumbers) {
    var number =  randNum(rangeNumbers);   //function to generate a random number

    if(! listOfNumbers.includes(number)) {
        listOfNumbers.push(number);
    }
}

//console.log(listOfNumbers);
alert(listOfNumbers);// List of random numbers



setTimeout(function(){ 
    var i = 0; 
    
    while(i < 5){ // Ask the user for 5 numbers

       var user = parseInt(prompt("Please insert the numbers you do remember") )
        

        while(arrUserNumbers.includes(user)){ //If the number inserted has already been inserted
            user = parseInt(prompt("You have already inserted this number. Please choose another one."))
        } // otherwise push it in the user variable
        arrUserNumbers.push(user);
        i++; //counter
    };
    console.log(arrUserNumbers);

    for(i = 0; i < arrUserNumbers; i++) { //Check each number
        if(listOfNumbers.includes(arrUserNumbers[i])){
            correctNumbers.push(arrUserNumbers[i]);

        } else {
            wrongNumbers.push(arrUserNumbers[i]);
        }
    }
    console.log("The correct numbers you've inserted are: "+ correctNumbers);
    console.log("The wrong numbers you've inserted are: " + wrongNumbers);
}, 9000 );




    // End doc ready
});



/*********************************************************
                      FUNCTIONS
*********************************************************/
  
function randNum(max){
     return Math.floor(Math.random()* max) + 1;
  };