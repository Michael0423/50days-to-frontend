const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');
const sliders = document.getElementsByClassName('slider');
let index = 0;

changeBodyBackground()

prevBtn.addEventListener('click', function(evt){
    index = (index-1 < 0) ? sliders.length-1 : index-1;

    changeActiveSlider();
    changeBodyBackground()
});

nextBtn.addEventListener('click', function(evt){
    index = (index+1 > sliders.length-1) ? 0 : index+1;

    changeActiveSlider();
    changeBodyBackground()
});


function changeBodyBackground() {
    const img = document.getElementsByClassName('active')[0];
    document.body.style.backgroundImage = img.style.backgroundImage;
}

function changeActiveSlider() {
    Array.from(sliders).map(v => {
        v.classList.remove('active');
    });
    sliders[index].classList.add('active');
}