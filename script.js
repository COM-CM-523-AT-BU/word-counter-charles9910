// put your globals here - hint: select elements from the HTML
const countBtn = document.querySelector("#countBtn");
const textCount = document.querySelector("#wordCountInput");
const findBtn = document.querySelector("#findBtn");
const inputWord = document.querySelector("#findWordInput");
const wordCount = document.querySelector("#wordFoundInput");

// dont' forget to add event listeners to teh buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

function countWords() {
  // your code here
  // call printData
  var str = document.getElementById("text-area").value;
  const words = str.split(' ');
  const count = words.length;
  printData(count, textCount);
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData
  var foundwords = [];
  var str = document.getElementById("text-area").value;
  const words = str.split(' ');
  words.forEach( (item) => {
    if(item === inputWord.value){
      foundwords.push(item);
    }
  });
  printData(foundwords.length, wordCount);
}

// change param1 and param2 to identifiers that make sense
function printData(data, destination) {
  // your code here... one line!
  destination.value = data;
    /*
    If we add 'words' or 'instances' after the data, the code are following:
    const textForWordCount = data + " " + "words";
    const chosenWordCount = data + " " + "instances";
    if(destination == textCount){
      destination.value = textForWordCount;
    }else{
      destination.value = textForWordCount;
  } */
}