//input
var nome = document.querySelector("#nome")
var email= document.querySelector("#e-mail")
var senha = document.querySelector("#senha")
var confirmaSenha = document.querySelector("#confirmaSenha")

//span
var validarNome = document.querySelector("#validaNome")
var ValidarEmail = document.querySelector("#ValidaEmail")

nome.addEventListener("keyup", function () {
  if (nome.value.length <= 3){
    validarNome.setAttribute("style", "display: flex");
  } else{ 
    validarNome.setAttribute("style", "display: none");
  }
})

email.addEventListener("keyup", function () {
    if (email.value.length = 0){
      ValidarEmail.setAttribute("style", "display: flex");
    } else{ 
      ValidarEmail.setAttribute("style", "display: none");
    }
  })


