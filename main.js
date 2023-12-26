const form = document.getElementById('form-rp');
const agencia = document.getElementById('agencia');

function validagencia(quatrodig){
    const quatro = quatrodig.split('');
    return quatro.length == 4;  
}

function validaconta(oitodig){
    const oito = oitodig.split('');
    return oito.length == 8;
}

form.addEventListener('submit', function(e){
    let agenciacorreta = false
    let contacorreta = false
    e.preventDefault();

const conta = document.getElementById('conta');
const dadoscorretos = ('Acessando sua conta...');

contacorreta = validaconta(conta.value);
agenciacorreta = validagencia(agencia.value);
if ((agenciacorreta) & (contacorreta)) {
    document.querySelector('.success-message').innerHTML = dadoscorretos;
}
else {
    agencia.style.border = '1px solid red'
    conta.style.border = '1px solid red'
    document.querySelector('.error-message').style.display = 'block'
}

})

agencia.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    agenciacorreta = validagencia(e.target.value);

    if (!agenciacorreta) {
        agencia.classList.add('error');
        document.querySelector('.error-message2').style.display = 'block';
    }
    else {
        agencia.classList.remove('error');
        document.querySelector('.error-message2').style.display = 'none';
    }    
})

conta.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    contacorreta = validaconta(e.target.value);

    if (!contacorreta) {
        conta.classList.add('error');
        document.querySelector('.error-message3').style.display = 'block';
    }
    else {
        conta.classList.remove('error');
        document.querySelector('.error-message3').style.display = 'none';
    }    
})