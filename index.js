//defining all the values by default value is lowercase.
let lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const number = '0123456789';
const symbol = '~!@#$%^&*()_+';

//Grabbing the input and rang element.
let passwordDisplay = document.getElementById('passwordDisplay');
let upperCaseinput = document.getElementById('includeUppercase');
let lowerCaseinput = document.getElementById('includeLowercase');
let numinput = document.getElementById('includeNumbers');
let symbolinput = document.getElementById('includeSymbols');
let inputNum = document.getElementById('characterAmountNumber');
let inputRng = document.getElementById('characterAmountRange')

//Syncronising the vlaue of range and input.
inputNum.addEventListener('input',syncVal);
inputRng.addEventListener('input',syncVal);

function syncVal(e){
  const value = e.target.value;
  console.log(value);
  inputNum.value = value;
  inputRng.value = value;
}

//making the function to generate password.
let btn = document.getElementById('btn');
btn.addEventListener('click', generatePassword);


//executing the function to generate password.
function generatePassword(e){
  e.preventDefault();
  let password ="";
  let str = "";

  if(upperCaseinput.checked) str = str.concat(upperCase);
  if(lowerCaseinput.checked) str = str.concat(lowerCase);
  if(numinput.checked) str = str.concat(number);
  if(symbolinput.checked) str = str.concat(symbol);
  
  for (let i = 0; i < inputNum.value; i++) {
    let index = Math.floor(Math.random()*(str.length));
    if(str){
    password += str[index];
    }
  }
  passwordDisplay.innerHTML = password;
}

//copy password.-----------------=>
//grabbing the copy btn
let copyBtn = document.getElementById('copyBtn');

//add event on clicking btn to copy password.
copyBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  copyPassword();
});

//executing the copy function.
let copyPassword = ()=>{
  navigator.clipboard.writeText(passwordDisplay.innerText);
}