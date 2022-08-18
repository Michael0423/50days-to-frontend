const btn = document.getElementById('btn')
let clickFlag = false;

btn.addEventListener('click', function(evt){
    if(!clickFlag){
        clickFlag = true;

        let span = document.createElement('span');
        span.classList.add('circle');
        span.style.left = `${evt.offsetX}px`;
        span.style.top = `${evt.offsetY}px`;
    
        btn.append(span);

        setTimeout(()=>{
            span.remove();
            clickFlag = false;
        }, 500);
    }    
});