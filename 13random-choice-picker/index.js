function createTags(event) {
    if(event.keyCode == 13){
        const textarea = document.getElementById('s');
        textarea.value = '';
        randomSelect();
    }else{
        const tagsDiv = document.getElementById('tags');
        tagsDiv.innerHTML = '';
        const string = document.getElementById('s').value;
    
        const sArr = string.split(',');
        sArr.forEach(s => {
            if(s.length == 0) return;
            let tag = createTagItem();
            tag.innerHTML = s;
    
            tagsDiv.appendChild(tag);
        });
    }
   
}

function createTagItem() {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    return tag;
}

function randomSelect() {
    const tagsDiv = document.getElementById('tags');

    let f = setInterval(function() {
        Array.from(tagsDiv.childNodes).map(e => e.classList.remove('selected'));

        let index = Math.floor(Math.random() * tagsDiv.childNodes.length);
        tagsDiv.childNodes[index].classList.add('selected');
    }, 100);

    setTimeout(function(){
        clearInterval(f); 
    }, 3000);
}