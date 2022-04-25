(() => {
  const form = document.querySelector('.modal');

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.status !== 201) {
          alert('ERROR')
        }
        return response.json()
      })
      .then((json) => console.log(json.message))
      .finally(() => {
        form.reset()
      })


    // const text = form.querySelector('input[type=text]');
    // const tel = form.querySelector('input[type=tel]');
    // const email = form.querySelector('input[type=email]');

    // const sendObj = {
    //   name: text.value,
    //   phone: tel.value,
    //   email: email.value
    // };



    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify(sendObj),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => {
    //     if (response.status !== 201) {
    //       alert('<<')
    //     }
    //     return response.json()
    //   })
    //   .then((json) => console.log(json))
    //   .finally(() => {
    //     form.reset()
    //   })
  })
})()