window.onload = function(){
  contact = document.querySelectorAll('.contact-us')

  for (var i = 0; i < contact.length; i++) {
    contact[i].addEventListener('click', function(event) {
      Intercom('show')
      event.preventDefault()
    })
  }
}