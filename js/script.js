const contents = document.querySelectorAll('.program-line__content');

// функция для закрытия всех табов аккордеона
const disableActiveElems = () => {
  contents.forEach( elem => {
    elem.querySelector('.program-line__descr').classList.remove('active');
  })
};

contents.forEach( elem => {
  elem.addEventListener('click', (e) => {
    if (e.target.classList.contains('program-line__title')) {
      // закрываем все табы аккордеона
      disableActiveElems()
      
      elem.querySelector('.program-line__descr').classList.add('active')
    }
  })
})