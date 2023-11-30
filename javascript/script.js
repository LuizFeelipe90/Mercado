



const usuarios = [
    {
        login: 'admin',
        pass: 'admin'
    },
    {
        login: 'bruno',
        pass: 'bruno'
    },
    {
        login: 'ricardo',
        pass: 'ricardo'
    }
]
let botao = document.querySelector('.btnLogar');

botao.addEventListener('click', function logar(){

    let getUsuario = document.querySelector('.usuario').value;
    let getSenha = document.querySelector('.senha').value;
    let validaLogin = false;

    for (let i in usuarios){
        if(getUsuario == usuarios[i].login && getSenha == usuarios[i].pass){
            validaLogin = true;
            break;
        }
    }

    if(validaLogin == true){
        location.href = 'buscarcestas.html'
    }else{
        alert('Usuario ou senha Incorretos')
    }



})


