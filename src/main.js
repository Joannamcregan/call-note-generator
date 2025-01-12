const body = document.querySelector('body');
const modeSelector = document.getElementById('mode-selector');

modeSelector.addEventListener('click', toggleMode.bind(this));

function toggleMode(){
    console.log('called');
    body.classList.toggle('dark');
    if (modeSelector.innerText == 'Dark Mode'){
        modeSelector.innerText = 'Light Mode';
    } else {
        modeSelector.innerText = 'Dark Mode';
    }
}