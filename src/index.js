import initialRender from './modules/initialrender';
import renderHomePage from './modules/homepage.js';
import renderMenuPage from './modules/menupage.js';
import renderContactPage from './modules/contactpage.js';

// render initial content and homepage on load
init();
function init() {
    initialRender();
    renderHomePage();

    const homePageButton = document.querySelector('#tab-list li:nth-child(1)');
    homePageButton.classList.add('clicked');
}

// Page tabs clickability functions
const homePageButton = document.querySelector('#tab-list li:nth-child(1)');
const menuPageButton = document.querySelector('#tab-list li:nth-child(2)');
const contactPageButton = document.querySelector('#tab-list li:nth-child(3)');

function emptyContent() {
    hero.innerHTML = "";
}

function buttonStyle(thisButton) {
    let containsClicked = [].slice.call(document.getElementsByClassName('clicked'));
    containsClicked[0].classList.remove('clicked');
    thisButton.classList.add('clicked');
}

homePageButton.addEventListener('click', () => {
    if (content.classList.contains('home')) {
        // nothing
    } else {
        buttonStyle(homePageButton);
        emptyContent();
        renderHomePage();
    }
});

menuPageButton.addEventListener('click', () => {
    if (content.classList.contains('menu')) {
        // nothing
    } else {
        buttonStyle(menuPageButton);
        emptyContent();
        renderMenuPage();
    }
});

contactPageButton.addEventListener('click', () => {
    if (content.classList.contains('contact')) {
        // nothing
    } else {
        buttonStyle(contactPageButton);
        emptyContent();
        renderContactPage();
    }
});