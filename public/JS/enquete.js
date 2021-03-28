import {
    checkStorage,
    setItem,
    query,
    queryAll
} from './utils/utils.js'

const button = query('.submit')
const hash = window.location.href
const hashAwnser = `${hash}-awnsers`

let stap = 1;

const formFields = [
    'firstName',
    'lastName',
    // '#docenten',
    'date',
    'difficult',
    'clarity',
    'understanding'
]


function form(stap) {


    // Set localstorage for items that have a value
    for (let i = 0; i < formFields.length; i++) {
        if (document.getElementById(formFields[i]).value) {
            const value = document.getElementById(formFields[i]).value
            setItem(hashAwnser, value, formFields[i])
        }
    }

    if (stap == 1) {
        queryAll('.stap1', 'flex')

    }

    if (stap === 2) {
        queryAll('.stap1', 'none')
        queryAll('.stap2', 'flex')
    }

    if (stap == 3) {
        queryAll('.stap2', 'none')
        queryAll('.stap3', 'flex')
    }

    if (stap == 4) {
        queryAll('.stap3', 'none')
        queryAll('.stap4', 'flex')
    }
    if (stap == 5) {
        queryAll('.submit', 'none')
        queryAll('.no-js', 'block')
        queryAll('.stap1', 'flex')
        queryAll('.stap2', 'flex')
        queryAll('.stap3', 'flex')
        queryAll('.stap4', 'flex')
    }
}




button.addEventListener('click', function(e) {
    e.preventDefault()
    stap++
    form(stap)
    localStorage.setItem(hash, stap)
})


window.onload = function() {
    if (checkStorage(hash)) {
        const values = checkStorage(hashAwnser)

        if (values) {
            const storage = JSON.parse(checkStorage(hashAwnser))
            const length = storage.length

            for (let i = 0; i < length; i++) {
                for (let key in storage[i]) {
                    let declaration = document.getElementById(key)
                    for (let [key, value] of Object.entries(storage[i])) {
                        declaration.value = value
                        console.log(value);
                      }
                }
            }
        }

        form(checkStorage(hash))
    }


    form(stap)
}