const emailInput = document.getElementById('email')
const senhalInput = document.getElementById('senha')

function login() {
    if(emailInput.value == 'admin@email.com' && senhalInput.value == 'senha') {
        alert('login feito com sucesso')
        window.location.href ='pagina.html' ;
    } else {
        alert('Email e/ou senha incorretos')
    } 

}