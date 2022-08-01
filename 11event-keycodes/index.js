const keyDiv = document.getElementById('key');
const keyCodeDiv = document.getElementById('keyCode');
const codeDiv = document.getElementById('code');
const altKeyDiv = document.getElementById('altKey');
const ctrlKeyDiv = document.getElementById('ctrlKey');
const shiftKeyDiv = document.getElementById('shiftKey');

window.addEventListener('keydown', function(evt){
    keyDiv.innerHTML = evt.key;
    keyCodeDiv.innerHTML = evt.keyCode;
    codeDiv.innerHTML = evt.code;
    altKeyDiv.innerHTML = evt.altKey;
    ctrlKeyDiv.innerHTML = evt.ctrlKey;
    shiftKeyDiv.innerHTML = evt.shiftKey;
})