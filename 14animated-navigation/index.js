const nav = document.getElementById('nav')
const btn = document.getElementById('btn');

btn.addEventListener('click', function(evt){
    nav.classList.toggle('open');
})