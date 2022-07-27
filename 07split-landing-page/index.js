const boxDivs = document.querySelectorAll('.box');

Array.from(boxDivs).map(box => {
    box.addEventListener('mouseover', function(evt) {
        Array.from(boxDivs).map(e => e.classList.remove('active'));
    
        box.classList.add('active');
    }, true);

    box.addEventListener('mouseleave', function(evt) {    
        box.classList.remove('active');
    }, true);
});