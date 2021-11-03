// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I got clicked!");
// }

// example using anonymous (unnamed) function
  // var kit = document.querySelectorAll("button");
  //
  // for (let i=0; i<kit.length; i++) {
  // kit[i].addEventListener("click", function () {
  //   alert("I got clicked!");
  //
  // });
  // }

// example using named function
  // var numberOfButtons = document.querySelectorAll(".drum");
  //
  // for (var i=0; i<numberOfButtons.length; i++) {
  //   numberOfButtons[i].addEventListener("click", clickHandler);
  // }
  // function clickHandler() {
  //   alert("I got clicked!");
  // }

//Angela's version (in my version I used variable where she used .document.querySelectorAll(".drum"))
  // var numberOfButtons = document.querySelectorAll(".drum");
  //
  // for (var i=0; i<numberOfButtons.length; i++) {
  //   document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);
  // }
  // function clickHandler() {
  //   alert("I got clicked!");
  // }

// now replacing alert wtih new audio to play sound
  // var numberOfButtons = document.querySelectorAll(".drum").length;
  //
  // for (var i=0; i<numberOfButtons; i++) {
  //   document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);
  // }
  // function clickHandler() {
  //   var audio = new Audio("sounds/tom-1.mp3");
  //   audio.play();
  // }

// now assigning sound to each button press using innerHTML
  // var numberOfButtons = document.querySelectorAll(".drum").length;
  //
  // for (var i=0; i<numberOfButtons; i++) {
  //
  //   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  //
  //     console.log(this.innerHTML);
  //     this.style.color = "white";
  //
  //
  //   });
  // }

//now using switch statement


//Detecting Button Clicks
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}

//Detecting Keyboard Press Downs
  document.addEventListener("keydown", function(e) {

    makeSound(e.key);
  });

  function makeSound(key) {
    switch (key) {
      case "f":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
      break;
      case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
      break;
      case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
      break;
      case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
      break;
      case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
      break;
      case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
      break;
      case "l":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
      break;

      default: console.log(event.key);
    }
  }
