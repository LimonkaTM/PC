(() => {
  const headerNavLinks = document.querySelector('.header__nav').querySelectorAll('a');

  headerNavLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()

      // получаем секцию с id равным значению аказанного в атрибуте href кликнутой ссылки

      const section = document.querySelector(item.getAttribute('href'));

      // добавляем плавный скролл из подключенной библиотеки

      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
    });
    })
  })
})()