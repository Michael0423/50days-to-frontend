const countDiv = document.getElementsByClassName('count');

Array.from(countDiv).forEach((c) => {
    runCount(c);
});

function runCount(element){
    const c = element.getAttribute('data-number');
    let i = 0;

    let f = setInterval(function() {
        i += parseInt(c / 200);
        if(i > c) i = c;

        element.innerHTML = i;

        if(i > c){
            clearInterval(f);
        }
    });
}