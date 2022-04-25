(() => {
  const contents = document.querySelectorAll('.program-line__content');

  // функция для закрытия всех табов аккордеона
  const disableActiveElems = () => {
    contents.forEach( elem => {
      elem.querySelector('.program-line__descr').classList.remove('active');
    })
  };

  contents.forEach( elem => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
      // закрываем все табы аккордеона
      disableActiveElems()
      
      descr.classList.toggle('active')
    })
  });
})()