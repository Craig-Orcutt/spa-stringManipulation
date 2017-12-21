let output = document.getElementById("output");
let palOutput = document.getElementById('pal');
let input = document.getElementById("input");
let mirrorBtn = document.getElementById('mirror');
let alphabetBtn = document.getElementById('alphabet');
let palBtn = document.getElementById('checkPal');
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
    let testString = input.value;  
    let splitInput = testString.split('');
    let sortInput = splitInput.sort();
    output.innerHTML = sortInput.join('');


});

palBtn.addEventListener('click', ()=>{
    let testString = input.value;
    let reverseSplit = testString.split('').reverse();
    if(testString === reverseSplit.join('')){
        palOutput.innerHTML = 'This is a Palindrome';
    }
    else{
        palOutput.innerHTML = 'This is not a Palindrome';
    }
})
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
