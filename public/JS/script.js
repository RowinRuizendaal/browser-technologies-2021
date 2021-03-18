const input = document.querySelector('#nummer')
const button = document.querySelector('.next')



if (!input.value) {
    button.disabled = true
}


const checkState = () => {
    if (input.value.length < 9 || input.value.length > 9) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

input.addEventListener('input', checkState);