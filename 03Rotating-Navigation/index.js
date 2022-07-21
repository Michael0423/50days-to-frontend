function toggleMenu(type) {
    const appDiv = document.getElementById('app');

    switch(type) {
        case 'open':
            appDiv.classList.add('show-menu');
            break;
        case 'close':
            appDiv.classList.remove('show-menu');
            break;
    }
}