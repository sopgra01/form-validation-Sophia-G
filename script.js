const form = document.querySelector('#validationForm')
const btn = document.querySelector('#btn')
const errorMsg = document.querySelector('#errorMessage')


const validateText = (id) => {
    const input = document.querySelector(id)

    const regName = /^[a-zA-Zéüöêåäø.\-_']*$/
    
    if(input.value.trim() === '') {
        console.log(`skriv in ett giltigt ${input.name}`)
        return setError(input)
    }
    else if(input.value.length < 2) {
        console.log('namnet måste innehålla minst två bokstäver')
        return setError(input)
     }
    else if(!regName.test(input.value)) {
        console.log('namnet får endast bestå av bokstäver')
        return setError(input)
    }   
    else {
        console.log(`${input.name} är korrekt ifyllt`)
        return setSuccess(input)
    }
}

const validateEmail = (id) => {
    const email = document.querySelector(id)

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if(email.value.trim() === '') {
        console.log('mata in en korrekt email')
        return setError(email)
    }
    else if(!regEx.test(email.value)) {
        console.log('mata in korrekta tecken')
        return setError(email)
    }
    else {
        console.log('korrekt inmatad email')
        return setSuccess(email)
    }
}

const validatePassword = (id) => {
    const password = document.querySelector('#password')
    const repeatPassword = document.querySelector('#repeatPassword')

    const regPasswrd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/

    if (password.value.trim() === '') {
        console.log('mata in ett lösenord på 6 till 20 bokstäver')
        return setError(password)
    }
    else if(!regPasswrd.test(password.value)) {
        console.log('lösenordet måste innehålla en stor och en liten bokstav, en siffra och ett specialtecken')
        return setError(password)
    }
    else if(repeatPassword.value !== password.value) {
        console.log(`${repeatPassword.name} eller se över så lösenorden matchar varandra`)
        return setError(repeatPassword)
    }
    else {
        console.log(`${password.name} och ${repeatPassword.name} matchar varandra`)
        return setSuccess(password)
    } 
}

const validateTerms = (id) => {
    const checkbox = document.querySelector(id)

    if (!checkbox.checked) {
        console.log('acceptera villkoren')
        return setError(checkbox)
    }
    else {
        return setSuccess(checkbox)
    }
}

const setSuccess = (input) => {
    input.classList.remove('incorrect');
    input.classList.add('correct');
    return true;
} 
const setError = (input) => {
    input.classList.add('incorrect');
    input.classList.remove('correct');
    input.focus();
    return false;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
const user = {
    firstName:(firstName).value,
    lastaName:(lastName).value,
    email:(email).value,
    password:(password).value,
   }
    console.log(user)

const errors = [];  

    for(let i = 0; i < form.length; i++) {

const inputId = '#' + form[i].id  
    
    if(form[i].type === 'text') {     
        errors[i] = validateText(inputId) 
    } 
    else if(form[i].type === 'email') {     
        errors[i] = validateEmail(inputId)
    }
    else if(form[i].type === 'password') {     
        errors[i] = validatePassword(inputId)
    }
    else if(form[i].type === 'checkbox') {     
        errors[i] = validateTerms(inputId)
    }
  }
   
    if(errors.includes(false)) {        
        console.log('Det finns fel i formuläret');
        errorMsg.classList.remove('d-none');
  }
    else {
        console.log('Formuläret är korrekt ifyllt');
        errorMsg.classList.add('d-none');
  }
  console.log(errors)
})
