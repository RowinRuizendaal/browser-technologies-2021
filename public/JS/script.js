import { checkStorage, setItem } from './utils/utils.js'

// declarations
const form = document.querySelector('form')
const input = document.querySelector('#nummer')
const button = document.querySelector('.next')


window.onload = () => {

    if (!input.value) {
        button.disabled = true
    }

    const StudentNumber = checkStorage('studentnumber')

    if (StudentNumber) {
        input.value = StudentNumber
        checkState()
    }
}

const checkState = () => {
    if (input.value.length < 9 || input.value.length > 9) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}


input.addEventListener('input', checkState)

form.onsubmit = () => {
    const value = input.value
    setItem('studentnumber', Number(value))
}