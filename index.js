const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?","/",">"];

const charnum = characters.concat(numbers);
const charsymbol = characters.concat(symbols);
const charnumsymbols = characters.concat(numbers, symbols);

let passwordGen = document.getElementById("password-generator");
let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");
let rangeCount = document.getElementById("myRange");

let checkNum = document.getElementById("checkIt-num");
let checkSymbols = document.getElementById("checkIt-symbols");

let array1 = [];
let array2 = [];

function randomizeChars (){
  for(let i = 0; i < rangeCount.value; i++)
  {
    if(checkNum.checked && checkSymbols.checked){
      let num1 = Math.floor(Math.random() * (characters.length + numbers.length + symbols.length));
      let num2 = Math.floor(Math.random() * (characters.length + numbers.length + symbols.length));
      array1.push(charnumsymbols[num1]);
      array2.push(charnumsymbols[num2]);
    } 
    else if(checkNum.checked == false && checkSymbols.checked == true){
      let num1 = Math.floor(Math.random() * (characters.length + symbols.length));
      let num2 = Math.floor(Math.random() * (characters.length + symbols.length));
      array1.push(charsymbol[num1]);
      array2.push(charsymbol[num2]);
    }
    else if(checkNum.checked == true && checkSymbols.checked == false){
      let num1 = Math.floor(Math.random() * (characters.length + numbers.length));
      let num2 = Math.floor(Math.random() * (characters.length + numbers.length));
      array1.push(charnum[num1]);
      array2.push(charnum[num2]);
    }
    else{
      let num1 = Math.floor(Math.random() * characters.length);
      let num2 = Math.floor(Math.random() * characters.length);
      array1.push(characters[num1]);
      array2.push(characters[num2]);
    }
  }
  passwordOne.innerHTML = array1.join("");
  passwordTwo.innerHTML = array2.join("");
}

passwordGen.addEventListener("click", function(){
  if(passwordOne.value != ""){
    array1 = [];
    array2 = [];
  }
  randomizeChars();
})

function copy1(){
  navigator.clipboard.writeText(array1.join(""));
}

function copy2(){
  navigator.clipboard.writeText(array2.join(""));
}