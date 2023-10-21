////1. sum of elements

var array = [7, 8, 9, 10, 11];

var sum = 0;

for (var i = 0; i < array.length; i++) {
  sum = sum + array[i];
}

console.log("The sum of the elements in the array is " + " " + sum);

//2. average of elements

var average = sum / array.length;

console.log("The average of the elements in the array is" + " " + average);

///3.Finding the largest and smallest

var max = array[0];
var min = array[0];

for (var i = 1; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
  if (min > array[i]) {
    min = array[i];
  }
}

console.log("The maximum value contained in the array is" + " " + max);
console.log("The minimum value contained in the array is" + " " + min);

///4.reversing the array
for (var i = 0; i < array.length / 2; i++) {
  var aux = array[i];
  array[i] = array[array.length - i - 1];
  array[array.length - i - 1] = aux;
}

for (var i = 0; i < array.length; i++) {
  console.log("array[" + i + "]=" + array[i]);
}

///rearanging the array so that i can fint the proper position :)
array = [7, 8, 9, 10, 11];
///5.Searching for an element

var particularElement = 8;
var indexOfTheParticularElement = -1;

for (i = 0; i < array.length; i++) {
  if (array[i] == particularElement) {
    indexOfTheParticularElement = i;
  }
}

if (indexOfTheParticularElement === -1) {
  console.log(
    "The element" +
      " " +
      particularElement +
      " " +
      "does not exist in your array!"
  );
} else {
  console.log(
    "The element" +
      " " +
      particularElement +
      " " +
      "exists in your array, at the position" +
      " " +
      indexOfTheParticularElement
  );
}

///6.finding the number of particular characters in a string

var string = "Hello, this is an example of a StRiNg.";
var counter = 0;

function uppercase(a) {
  if (a >= 65 && a <= 90) {
    return 1;
  } else {
    return 0;
  }
}

for (var i = 0; i < string.length; i++) {
  if (uppercase(string.charCodeAt(i)) == 1)
    //found this on internet
    counter++;
}

console.log(
  "The number of uppercase characters in the string" +
    " " +
    " ' " +
    string +
    " ' " +
    " " +
    "is" +
    " " +
    counter
);

///7.Checking for a palindrome

var string1 = "cojoc";

var booleanVariable = 0; ///0 ----->succes, 1--->failure

for (var i = 0; i < string.length / 2; i++) {
  if (string1[i] !== string1[string1.length - i - 1]) {
    booleanVariable = 1;
  }
}

if (booleanVariable === 0) {
  console.log("The string" + " " + string1 + " " + "is palindrome");
} else {
  console.log("The string" + " " + string1 + " " + "is NOT palindrome");
}

///8.Reversing a string
string = "anelE"; ////YOU CANT USE AUXILARY TO INTERCHANGE STRINGS!
function REVERSE(givenString) {
  var newString = " ";
  for (var i = 0; i < string.length; i++) {
    newString = newString + string[string.length - i - 1];
  }
  return newString;
}
string = REVERSE(string);
console.log("After being reversed, the string looks like that:" + " " + string);
console.log(
  "the size of the string" + " " + string + " " + "is " + " " + string.length
);

///9. removing whitespaces

var string2 =
  "Hello    this    is    meant to be full of     white spaces...although I think they are all blackspaces";

function removeWhitespaces(givenString) {
  var newString = " ";
  for (var i = 0; i < givenString.length; i++) {
    if (givenString[i] !== " ") {
      newString = newString + givenString[i];
    }
  }

  newString[newString.length] = "\0";
  return newString;
}

string2 = removeWhitespaces(string2);
console.log(
  "After being erased of whitespaces, the string looks like that:" +
    " " +
    string2
);

////10. Checking for a substring                                          A HELL OF A RIDE

var string3 = "You cannot see anything in the dark";
var substring1 = "not";
var substring2 = "dark";
var substring3 = "Alan Turing";

function checkingForSubstring(givenString, givenSubstring) {
  var i, j, k;
  ////ok=1;///assuming failure                                   ////i do not need such a thing
  for (i = 0; i < givenString.length; i++) {
    var counter = 0;
    for (j = i; j < givenString.length; j++) {
      for (k = 0; k < givenSubstring.length; k++) {
        if (givenString[j] == givenSubstring[k]) counter++;
      }

      if (counter === givenSubstring.length) return 1;
    }
  }
  return 0;
}

if (checkingForSubstring(string3, substring1) === 1) {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "containes the substring" +
      " " +
      " ' " +
      substring1 +
      " ' "
  );
} else {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "DOES NOT contain the substring" +
      " " +
      " ' " +
      substring1 +
      " ' "
  );
}

if (checkingForSubstring(string3, substring2) === 1) {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "containes the substring" +
      " " +
      " ' " +
      substring2 +
      " ' "
  );
} else {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "DOES NOT contain the substring" +
      " " +
      " ' " +
      substring2 +
      " ' "
  );
}

if (checkingForSubstring(string3, (substring2 = 3)) === 1) {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "containes the substring" +
      " " +
      " ' " +
      substring3 +
      " ' "
  );
} else {
  console.log(
    "The string" +
      "  " +
      " ' " +
      string3 +
      " '" +
      " " +
      "DOES NOT contain the substring" +
      " " +
      " ' " +
      substring3 +
      " ' "
  );
}

////11. USING LOOPS: Displaying the multiplication table

var numberToBeMultiplicated = 8;

var i = 1;
console.log("Multiplication Tabale for" + " " + numberToBeMultiplicated + ":");
while (i <= 10) {
  console.log(
    numberToBeMultiplicated + "x" + i + "=" + i * numberToBeMultiplicated
  );
  i++;
}

///12. Prime numebrs for given number

var limit = 20;

function getPrimeNumbersUntilTheLimit(givenLimit) {
  var array = " ";
  //console.log("Prime numbers up to"+" "+givenLimit+":");
  for (var i = 2; i <= 20; i++) {
    var counter = 0;
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        counter++;
      }
    }

    if (counter === 0) {
      array = array + i + " ";
    }
  }
  console.log("Prime numbers up to" + " " + givenLimit + ":" + array);
}

getPrimeNumbersUntilTheLimit(limit);

//13. Fibonacci String

var count = 8;

function Fibonacci(givenCount) {
  //var x, y;
  //x=0;
  //y=1;

  var array = [];
  for (let i = 0; i < givenCount; i++) {
    array[i] = 0;
  }

  array[0] = 0;
  array[1] = 1;
  // console.log(x);
  for (var i = 2; i < givenCount; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  console.log(
    "Fibonacci Series(first" +
      " " +
      givenCount +
      " " +
      "numbers):" +
      " " +
      array
  );
}

Fibonacci(count);
