const dragItem = document.querySelector('.drag-item');
const dropBoxs = document.querySelectorAll('.drop-box');

dragItem.addEventListener('dragstart', function(evt){
    this.className += ' drag';
    setTimeout(() => this.className = '', 0);
});
dragItem.addEventListener('dragend', function(evt){
    this.className = 'drag-item';
});

for(const box of dropBoxs) {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', drop)
}

function dragOver(evt) {
    evt.preventDefault();
}

function dragEnter() {
    this.classList.add('hover');
}

function dragLeave() {
    this.classList.remove('hover');
}

function drop() {
    this.className = 'drop-box';
    this.append(dragItem);
}