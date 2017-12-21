let output = document.getElementById("output");
let input = document.getElementById("input");
let mirrorBtn = document.getElementById('mirror');
let alphabetBtn = document.getElementById('alphabet');
var testString = "";

// function to reverse what ever is put into the input window
mirrorBtn.addEventListener('click', function(){
    testString = input.value;
    let splitInput = testString.split('');
    let reverseInput = splitInput.reverse();
    let reJoinInput = reverseInput.join('');
    output.innerHTML = reJoinInput;
});

// function to alphabetize the letters in the input
alphabetBtn.addEventListener('click', ()=>{
    testString = input.value;  
    splitInput = testString.split('');
    sortInput = splitInput.sort();
    output.innerHTML = sortInput.join('');


});
// function palindrome() {

// }

// reversal(testString);
// alphabits(testString);
// palindrome(testString);


// function allLetter(inputtxt)
//   {
//    var letters = [A-Za-z];
//    if(input.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("message");
//      return false;
//      }
