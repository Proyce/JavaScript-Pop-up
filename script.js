const popup = document.querySelector('.popup');
const close_popup = document.querySelector('.close-popup');
const button = document.querySelector('.popup-btn');
const background = document.querySelector('.container');

const start_pop = button.addEventListener('click', () => {
    background.style.display = "block";
});

const end_pop = close_popup.addEventListener('click', () => {
    background.style.display = "none";
});

// const background_close = background.addEventListener('click', () => {
//     background.style.display = "none";
// });