const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})

modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__inner')) {
    modal.style.display = '';
  }
})