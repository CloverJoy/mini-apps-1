let button = document.getElementById('send');
let textArea = document.getElementById('jsonvalue');

button.addEventListener('click', (event) => {
  console.log(textArea.value);
  event.preventDefault();
  if (textArea.value) {
    let value = textArea.value;
    let cb = (data) => {
     console.log(data)
    };
    $.ajax({
      type: 'POST',
      url: '/',
      data: value,
      success: (data) => callback(data)
    })
  }
})



