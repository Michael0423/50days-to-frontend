// Add click event
const btn = document.getElementById('search_btn');
btn.addEventListener('click', toggleSearchInput);

function toggleSearchInput() {
    const appDiv = document.getElementById('app');
    appDiv.classList.toggle('active');
}
