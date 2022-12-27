export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    console.log(tipoDeInput)
    console.log(input)

    if (input.validity.valid) {
        input.parentElement.classList.remove('contato-campo-invalido')
        input.parentElement.querySelector('.contato-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('contato-campo-invalido')
        input.parentElement.querySelector('.contato-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
    
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError'
]

const mensagemsDeErro = {
    nome: {
        valueMissing: "O Campo de nome não pode estar vazio.",
        customError: "Preencha!"
    } , 
    email: {
        valueMissing: 'O Campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.' 
    }, 
    assunto : {
        valueMissing: "O Campo de assunto não pode estar vazio.",
        customError: "O Campo assunto digitado não é valido."
    } , 
    mensagem: {
        valueMissing: "O Campo de mensagem não pode estar vazio.",
        customError: "O Campo mensagem digitado não é valido."
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagemsDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}