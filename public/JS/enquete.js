import {
    checkStorage,
    setItem,
    query,
    queryAll
} from './utils/utils.js'


const hash = window.location.href
const hashAwnser = `${hash}-awnsers`

const nextButton = query('.submit')
const previous = query('.previous')
const feedforward = query('.enquete-container h3')

let stap = 1;

const formFields = [
    'firstName',
    'lastName',
    'docenten',
    'date',
    'difficult',
    'clarity',
    'understanding'
]


function form(stap) {
    for (let i = 0; i < formFields.length; i++) {
        if (document.getElementById(formFields[i]).value) {
            const value = document.getElementById(formFields[i]).value
            setItem(hashAwnser, value, formFields[i])
        }
    }

    if (stap > 5) {
        stap = 5
    }

    feedforward.innerHTML = `${stap}/${formFields.length -2}`

    if (stap == 1) {
        queryAll('.stap1', 'flex')
        queryAll('.stap2', 'none')
        queryAll('.previous', 'none')

    }

    if (stap === 2) {
        queryAll('.stap1', 'none')
        queryAll('.stap2', 'flex')
        queryAll('.stap3', 'none')
        queryAll('.previous', 'block')
    }

    if (stap == 3) {
        queryAll('.stap2', 'none')
        queryAll('.stap3', 'flex')
        queryAll('.stap4', 'none')
        queryAll('.previous', 'block')
    }

    if (stap == 4) {
        queryAll('.stap3', 'none')
        queryAll('.stap4', 'flex')
        queryAll('.stap5', 'none')
        queryAll('.previous', 'block')
    }
    if (stap == 5) {
        queryAll('.submit', 'none')
        queryAll('.no-js', 'block')
        queryAll('.stap1', 'flex')
        queryAll('.stap2', 'flex')
        queryAll('.stap3', 'flex')
        queryAll('.stap4', 'flex')
        queryAll('.previous', 'none')
    }
}




nextButton.addEventListener('click', function(e) {
    e.preventDefault()
    stap++
    form(stap)
    setItem(hash, stap)
})

previous.addEventListener('click', function(e) {
    e.preventDefault()
    if (stap <= 1) {
        form(1)
        return setItem(hash, stap)
    }
    stap--
    form(stap)
    setItem(hash, stap)
})


window.onload = function() {
    if (checkStorage(hash)) {
        const values = checkStorage(hashAwnser)

        if (values) {
            const storage = JSON.parse(checkStorage(hashAwnser))
            const length = storage.length

            for (let i = 0; i < length; i++) {
                for (let [key, value] of Object.entries(storage[i])) {
                    let declaration = document.getElementById(key)
                    declaration.value = value
                }
            }
            return form(JSON.parse(checkStorage(hash)))
        }
        return form(checkStorage(hash))
    }

    return form(stap)
}