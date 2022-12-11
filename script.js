// put your globals here - hint: select elements from the HTML
const countBtn = document.querySelector("#countBtn");
const textCount = document.querySelector("#wordCountInput");
const findBtn = document.querySelector("#findBtn");
const inputWord = document.querySelector("#findWordInput");
const wordCount = document.querySelector("#wordFoundInput");

// don't forget to add event listeners to the buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

// your code here
function countWords() {
// call printData
  var str = document.getElementById("text-area").value;
  const words = str.split(' ');
  const count = words.length;
  printData(count, textCount);
}

// put your local variable for the empty array here
function findWords() {
  var foundwords = [];
// remainder of your code follows
  var str = document.getElementById("text-area").value;
  const words = str.split(' ');
  words.forEach( (item) => {
    if(item === inputWord.value){
      foundwords.push(item);
    }
  });
// call printData
  printData(foundwords.length, wordCount);
}

// change param1 and param2 to identifiers that make sense
function printData(data, destination) {
// your code here... one line!
  destination.value = data;
}

    /*
    If we add 'words' or 'instances' after the data, the code are following:
    const textForWordCount = data + " " + "words";
    const chosenWordCount = data + " " + "instances";
    if(destination == textCount){
      destination.value = textForWordCount;
    }else{
      destination.value = textForWordCount;
  } */