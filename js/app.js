
var words = document.getElementById('input');    //prompt('introduzca texto');
  
console.log(words);
  
// var convertNumbers = parseInt(words);
// console.log(convertNumbers);

words.addEventListener('keyup', function() {
  console.log(words.value);
  var wordsValue = words.value;
  if (wordsValue === '' || ) {
    alert('error: ingrese solo letras!');
  } else {
    var noIsNumber = wordsValue;
  }

  var count = '';

  var cipher = function(wordX) {
    var wordToUppercase = wordX.toUpperCase();
    var arr = wordToUppercase;
    console.log(arr);

    for (var i = 0;i < arr.length;i++) {
      var b = arr.charCodeAt(i) ;
    
      var c = (b - 65 + 33) % 26 + 65;
      var d = String.fromCharCode(c);

      var sum = count += d;
      var containerWords = document.getElementById('container-words');
      var newElement = document.createElement('p');
      newElement.appendChild(sum.value);
      containerWords.appendChild(newElement);
    }

    return containerWords;
  };
  document.write(cipher(noIsNumber));

    
});


