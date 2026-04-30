// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



// function Showpopup(event){
//     event.preventDefault();
//        if (document.getElementById('popup').checkValidity()){
//         alert('Successfully Submited')
//        }
        
//        else (document.getElementById('popup').reportValidity())

// }


// function LoginShowpopup(event){
//     event.preventDefault();
//        if (document.getElementById('Loginpopup').checkValidity()){
//         alert('Successfully Loged In')
//        }
        
//        else (document.getElementById('Loginpopup').reportValidity())

// }

 setInterval( function()
{
    document.getElementById("clock").innerHTML= new Date().toLocaleString();

}, 1000);