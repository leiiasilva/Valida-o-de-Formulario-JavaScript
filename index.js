const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')


form.addEventListener('submit', (e) => {
    e.preventDefault() //previne o comportamento padrão dos formularios

    checkInputs() // vai ser executado quando enviar uma função
})

//validações dos campos 
function checkInputs(){
    const usersanameValue = username.value.trim()  //para pegar as informações que o usuario digitou no input|| o .trim() remove os espaçamentos
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if (usersanameValue === ''){ // se o campo 'nome'(username) estiver vazio ira executar uma função
        //MOSTRAR O ERRO
        //adicionar a classe error 
        errorValidation(username, 'Preencha esse campo') // campo que será validado e mensagem que irá aparecer 
    }else{
        //adicionar classe de sucesso
        successValidation(username)
    }

    if( emailValue === ''){
        errorValidation(email, 'Preencha esse campo')
    } else{
        successValidation(email)
    }

    if(passwordValue === ''){
        errorValidation(password, 'Preencha esse campo')
    } else if ( passwordValue.length < 8 ){
        errorValidation(password, 'A senha deve ter mais de 8 caracteres')
    } else{
        successValidation(password)
    }

    if(passwordtwoValue === ''){
        errorValidation(passwordtwo, 'Preencha esse campo')
    }else if(passwordValue !== passwordtwoValue) {
        errorValidation(passwordtwo, 'As senhas não são as mesmas')
    }else{
        successValidation(passwordtwo)
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement; // metodo do javascript que retorna uma referencia direta do seu pai  // vai pegar o elemento pai desse meu input 
    const small = formControl.querySelector('small') // pegando o small da DIV CONTROL <Html>

    small.innerText = message // innerText irá retornar a mensagem 

    formControl.className = 'form-control error' // aqui esta reatribuindo a classe 'FORM-CONTROL' da div html// o nome da classe e mudado 
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}