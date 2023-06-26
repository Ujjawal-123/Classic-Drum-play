var numberOfDrumButtons= document.querySelectorAll(".drum").length;
// detecting button press from mouse on screen
for(var i=0;i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ /* we selected all the responses*/
        this.style.color="white";                                        /*cahnges button color to white when pressed*/
        var buttonInnerHTML = this.innerHTML;   // helps to check button pressed
        makeSound(buttonInnerHTML);      
        buttonAnimation(buttonInnerHTML);
        stylePressed(buttonInnerHTML);
        
    });
}
// detecting if Keyboard Press
document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    stylePressed(event.key);
});

function makeSound(key){
    switch (key){
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();    
            break;
        case "s": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();    
            break;    
        case "j": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();    
            break;
        case "l": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    
}
function stylePressed(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    // writing code for timeout function to remove shadow from pressed key;
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}