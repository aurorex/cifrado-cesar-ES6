
var words = document.getElementById('input'); 
var button = document.getElementById('button');
console.log(words);

words.addEventListener('keyup', function(event) {
  console.log(words.value);
  var wordsValue = words.value;
  if ((event.keyCode !== 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122) || wordsValue === '') {
    alert('error: ingrese solo letras!');
  } else {
    wordsValue;

    button.addEventListener('click', function() {
      var wordsValue = words.value;
      var cipher = function(wordX) {
        var wordToUppercase = wordX.toUpperCase();
        var arr = wordToUppercase;
        console.log(arr);
        var count = '';
      
        for (var i = 0;i < arr.length;i++) {
          var b = arr.charCodeAt(i) ;
        
          var c = (b - 65 + 33) % 26 + 65;
          var d = String.fromCharCode(c);
      
          var sum = count += d;
          console.log(sum);
          var newElement = document.createElement('p');
          newElement.innerHTML = sum;
          var containerWords = document.getElementById('container-words');
          containerWords.appendChild(newElement);
          console.log(containerWords);
        }
        return sum;
      };
      document.write(cipher(wordsValue));
      
    });
  }
});

