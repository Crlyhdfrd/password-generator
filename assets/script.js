var confirmnum;
var confirmUC;
var confirmLC;
var confirmspec;

spec = ['!', '#', '$', '%', '&', '*', '+', '?', '.', '-', '@',];
letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
number = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
spc = [];

var choices;

var toupper = function (x) {
  return x.toUpperCase();
};

letter2 = letter.map(toupper);
 
function generatePassword() {
  
 var enter = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  if (!enter) {
    alert("this needs a value");
  } 
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } 
  else {
    confirmnum = confirm("Will this password contain numbers?");
    confirmspec = confirm("Will this password contain special characters?");
    confirmUC = confirm("Will this password contain Uppercase letters?");
    confirmLC = confirm("Will this password contain Lower case letters");
  };
if (confirmspec !== true && confirmLC !== true && confirmUC !== true && confirmnum !== true) {
  choices = alert("Please choose within criteria");
}else if (confirmspec && confirmLC && confirmUC && confirmnum) {
choices = spec.concat(letter, letter2, number);
}else if (confirmspec && confirmLC && confirmUC) {
  choices = spec.concat(letter, letter2, number);
}else if (confirmspec && confirmUC && confirmnumeric) {
  choices = spec.concat(letter2, number);
}else if (confirmUC && confirmLC && confirmnum) {
  choces =  letter2.concat(letter, number,);
}else if (confirmspec && confirmLC && confirmnum) {
  choices = spec.concat(letter, number);
}else if (confirmspec && confirmLC) {
  choices = spec.concat(letter);
}else if (confirmspec && confirmnum) {
  choices = spec.concat(number)
}else if (confirmspec && confirmUC) {
  choices = spec.concat(letter2)
}else if (confirmLC && confirmUC) {
  choices = letter.concat(number)
}else if (confirmLC && confirmnum) {
  choices = letter.concat(number)
}else if (confirmUC && confirmnum) {
  choices = letter2.concat(number)
}else if  (confirmLC) {
  choices = letter;
}else if (confirmUC) {
  choices = space.concat(letter2);
}else if (confirmnum) {
  choices = number;
}else if (confirmspec) {
  choices = spec;
}
var passwordarray = [];

for (var i = 0; i < enter; i++) {
  var pickchoices = choices[Math.floor(Math.random() * choices.length-1)];
  passwordarray.push(pickchoices);
}

var ps = passwordarray.join("");
userinput(ps);
return ps;

}

function userinput(ps) {
  document.getElementById('password').textContent = ps;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
fixe