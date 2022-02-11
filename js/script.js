/***** Show - Hide Lateral Navigation Bar Starts *****/
const navBar = document.querySelector('#nav__bar');
const main = document.querySelector('#main');

function toggleNavBar() {
    if (window.innerWidth > 1000) {
        navBar.classList.toggle('toggle__nav');
        main.classList.toggle('toggle__nav');
    } else if (window.innerWidth < 1001) {
        navBar.classList.toggle('show__nav');
        main.classList.toggle('show__nav');
    }
}

document.querySelector('#btn__menu').addEventListener('click', toggleNavBar);
/***** Show - Hide Lateral Navigation Bar Ends *****/

/***** General Styles Window Widht 1000px *****/
window.addEventListener('resize', () => {
    if (window.innerWidth < 1001) {
        navBar.classList.remove('toggle__nav');
        main.classList.remove('toggle__nav');
    }
});
/***** General Styles Window Widht 1000px *****/

/***** Show - Hide Search Container Starts *****/
const searchContainer = document.querySelector('#search__container');

function toggleSearchContainer() {
    searchContainer.classList.toggle('toggle__search');
}

document.querySelector('#btn__search').addEventListener('click', toggleSearchContainer);
/***** Show - Hide Search Container Ends *****/