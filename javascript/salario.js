let buscar = document.querySelector('.teste');

buscar.addEventListener('click', function logar(){

    let getSalario = document.querySelector('#salarioo').value;

    if(getSalario <= 2000){
        location.href = 'card.html'
    }else{
        alert('error');
    }

})