const body = document.querySelector('body');
const button = document.querySelector('button');
let colors = ['purple', 'yellow', 'pink', 'green', 'orange', 'cornflowerblue', 'cyan', 'coral', 'blueviolet', 'deeppink', 'gold', 'springgreen'];
let counter = 0;

button.addEventListener('click', () => {
    let randomColors = colors[Math.floor(Math.random() * colors.length)];

    body.style.background = randomColors;
    counter++

    if(counter === 10){
        document.querySelector('h1').innerHTML = 'I get it......YOU ARE BORED like me';
    }
    if(counter === 11){
        document.querySelector('h1').innerHTML = '';
    }
    if(counter === 19){
        alert('NIGGA');
    }
    if(counter === 20){
        close();
    }
     

});