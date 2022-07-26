const boxDivs = document.querySelectorAll('.card');

const appDiv = document.getElementById('app');
appDiv.addEventListener('scroll', scrolling)

// first into page need to trigger the scroll event.
scrolling();

function scrolling() {
    const showLineTop = window.innerHeight * 0.8;
    boxDivs.forEach(box => {
        if(box.getBoundingClientRect().top <= showLineTop){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
    
}