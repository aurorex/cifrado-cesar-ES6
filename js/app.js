window.addEventListener('load', function() {
  let words = document.getElementById('input'); 
  let button = document.getElementById('button1');
  console.log(words);

  words.addEventListener('keyup', (event) => {
    console.log(words.value);
    let wordsValue = words.value;
    if ((event.keyCode !== 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122) || wordsValue.length < 0 || event.keyCode === 32) {
      alert('error: ingrese solo letras!');
    } else {
      wordsValue;

      button.addEventListener('click', (event) => {
        let wordsValue = words.value;
        let cipher = (wordX) => {
          let wordToUppercase = wordX.toUpperCase();
          let arr = wordToUppercase;
          console.log(arr);
          let count = '';
        
          for (var i = 0;i < arr.length;i++) {
            let b = arr.charCodeAt(i) ;
          
            let c = (b - 65 + 33) % 26 + 65;
            let d = String.fromCharCode(c);
        
            let sum = count += d;
            console.log(sum);
            let newElement = document.createElement('p');
            newElement.innerHTML = sum;
            let containerWords = document.getElementById('container-words');
            containerWords.appendChild(newElement);
            console.log(containerWords);
          }
          return sum;
        };
        document.write(cipher(wordsValue));
      });
    }
  });

});


