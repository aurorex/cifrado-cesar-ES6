window.addEventListener('load', () => {
  var words = document.getElementById('input'); 
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  console.log(words);

  words.addEventListener('keyup', (event) => {
    console.log(words.value);
    var wordsValue = words.value;
    if ((event.keyCode === 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)) {
      alert('error: ingrese solo letras sin espacios en blanco!');
      button1.setAttribute('disabled', 'disabled');
      button2.setAttribute('disabled', 'disabled');
    } else {
      wordsValue; 
      button1.removeAttribute('disabled', 'disabled');
      button2.removeAttribute('disabled', 'disabled');
    }
  });
  button1.addEventListener('click', () => {
    var wordsValue = words.value;
    
    var cipher = (wordX) => {
      var wordToUppercase = wordX.toUpperCase();
      var arr = wordToUppercase;
      console.log(arr);
      var count = '';
    
      for (let i = 0;i < arr.length;i++) {
        let arrCharcode = arr.charCodeAt(i) ;
        let arrAscci = (arrCharcode - 65 + 33) % 26 + 65;
        let arrStringCharcode = String.fromCharCode(arrAscci);
        var sum = count += arrStringCharcode;
      }
      let newElement = document.createElement('p');
      newElement.innerHTML = sum;
      let containerWords = document.getElementById('container-words');
      containerWords.appendChild(newElement);
      console.log(containerWords);
    };
    cipher(wordsValue);
  });

  button2.addEventListener('click', () => {
    var wordsValue = words.value;

    var decipher = (wordY) => {
      var wordToUppercase = wordY.toUpperCase();
      var arr = wordToUppercase;
      console.log(arr);
      var count = '';
    
      for (let i = 0;i < arr.length;i++) {
        let arrCharcode = arr.charCodeAt(i) ;
        let arrAscci = (arrCharcode + 65 - 33) % 26 + 65;
        let arrStringCharcode = String.fromCharCode(arrAscci);
        var sum = count += arrStringCharcode;
      }
      let newElement = document.createElement('p');
      newElement.innerHTML = sum;
      let containerWords = document.getElementById('container-words');
      containerWords.appendChild(newElement);
      console.log(containerWords);
    };
    decipher(wordsValue);

  });


});


