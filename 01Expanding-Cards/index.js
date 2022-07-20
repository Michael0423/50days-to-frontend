let blockDivs = document.getElementsByClassName('block');

Array.from(blockDivs).forEach(e => {
    e.addEventListener('click', function(e){
        Array.from(e.target.parentNode.children).map(e => e.classList.remove('active'));

        e.target.classList.add('active');
    })
});
