
group = {charlie: 45, Jamal: 3, Sharene: 23, Omar: 5};

function oldestPerson(obj) {
  var oldest = 0;
  var name;
  for(key in obj) {
    if(obj[key] > oldest){
      oldest = obj[key];
      name = key;
    }
  }
  return name;
};

console.log(oldestPerson(group));

function longestWord(str){
  var word = "";
  var length = 0;
  var arr = str.split(" ");
  for (i in arr){
    if (i.length > length) {
      word = i;
    }
  }
  return word;
}

function longestWordNoPunc(str){
  var word = "";
  var l = 0;
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++){
    var cleanWord = arr[i].replace(/\W/g, "");
    console.log(cleanWord);
    if (cleanWord.length > l) {
      l = cleanWord.length
      word = cleanWord;
    }
  }
  return word;
};


function factorial(n) {
  if (n === 0) {
    return 1;
  }
  else if (n < 1) {
    return n;
  }
  else {
     n * factorial(n-1)
  }
};



function palindrome(string){
  // split string into array
  var stringCopy = string.split("");
  // if we have check every letter or string length is odd
  if (stringCopy.length <= 1){
    return true
  }
  // store first and last letter to compare and remove them from array
  var beg = stringCopy.shift();
  var end = stringCopy.pop();
  // compare first and last letter
  if (beg === end) {
    // run again, join array back into string
    return palindrome(stringCopy.join(""));
  }
  // if beg and end do not match it is not a palindrome
  else{
    return false;
  }
};


console.log(palindrome("racecar"));
