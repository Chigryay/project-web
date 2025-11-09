const modalWindow = document.querySelector(".modal");
const modalButtons = document.querySelectorAll(".modal__buton");

modalButtons.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'block';
    });
})

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__wrap');
    if (!isModal) {
        modalWindow.style.display = 'none';
    }
});

const close = document.querySelector('.icons-cross');

close.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});