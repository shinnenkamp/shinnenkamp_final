/*
  This is the JavaScript code for
  "Final Project: BMI Calculator"
*/
//Function to calculate BMI
function calculations() {

//Declare variables
  var userHeight;
  var userWeight;
  var BMI = 0;

//Get input from user
  userHeight = prompt("Please enter your height in inches.");
  userWeight = prompt("Please enter your weight in pounds.");
    
//Convert to numbers
  userHeight = Number(userHeight);
  userWeight = Number(userWeight);
    
//Calculate BMI
  BMI = ((userWeight / (userHeight * userHeight)) * 703).toFixed(1);
  
//Display results
  if (BMI < 18.5){
    document.write("Your BMI is " + BMI + ", which falls within the underweight range.");
  } else if (BMI > 18.5 && BMI <= 24.9) {
    document.write("Your BMI is " + BMI + ", which falls within the normal range.");
  } else if (BMI >= 25 && BMI <= 29.9) {
    document.write("Your BMI is " + BMI + ", which falls within the overweight range.");
  } else if (BMI >= 30) {
    document.write("Your BMI is " + BMI + ", which falls within the obese range.");
  }
}

//Function to run program
function main() {
//Declare variables
  var loopAgain = true;
  var userInput = "";
  
//Prompt to calculate BMI or stop.
  while (loopAgain) {
    userInput = prompt("Would you like to calulate a BMI, \"y\" to continue or \"n\" to stop.");
    if (userInput === "n") {
      loopAgain = false;
    } else if (userInput === "y") {
      calculations ();
    }
  }
}
main();