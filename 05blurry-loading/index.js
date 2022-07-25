var counter = 0;
var intervalFlag;

intervalFlag = setInterval(blurring, 30);

function blurring() {
    if(counter === 100){
        clearInterval(intervalFlag);
    }

    const appDiv = document.getElementById('app');
    appDiv.style.filter = `blur(${100-counter}px)`;

    const counterDiv = document.getElementById('counter');
    counterDiv.innerHTML = counter;
    counterDiv.style.opacity = 1 - counter / 100;

    counter++;
}