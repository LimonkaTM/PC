const modalBtn = document.querySelector('.modal__button');
const modalCourseBtn = document.querySelector('.course__button');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})

modalCourseBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})

modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__inner')) {
    modal.style.display = '';
  }
})

// получаем обертку модального окна для вставки крестика для закрытия модального окна

const modalInner = modal.querySelector('.modal__inner')
modalInner.style.position = 'relative';

// создаём крестик для закрытия модального окна

const a = document.createElement('a');
a.setAttribute('class', 'modal__close')
a.innerHTML = 'X';
a.style.position = 'absolute';
a.style.top = 20 + 'px';
a.style.right = 20 + 'px';
a.style.fontSize = 25 + 'px';
a.style.cursor = 'pointer';

// вставляем крестик в модальное окно

modalInner.appendChild(a)

a.addEventListener('click', () => {
  modal.style.display = '';
})