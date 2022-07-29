const btn = document.getElementsByTagName('button');

Array.from(btn).map(e => {
    // console.table(e);
    e.addEventListener('click', function(evt){
        stopPlay();
        e.children[0].play();
        console.table(e.children[0]);
        // e.childNodes[1].play();
    });
});

function stopPlay(){
    Array.from(btn).map(e => {
        e.children[0].pause();
        e.children[0].currentTime = 0;
        // e.childNodes[1].pause();
        // e.childNodes[1].currentTime = 0;
    });
}