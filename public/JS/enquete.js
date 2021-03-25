const button = document.querySelector('.submit')
const bedankt = '<h2>Nog even alles op een rij</h2>'
const hash = window.location.href
const awnser = hash + '-awnser'

let stap = 1;


function form(stap) {

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


function query(element, display) {
    if (display) {
        return document.querySelector(element).display = display
    }
    return document.querySelector(element)
}

function queryAll(element, display) {
    if (typeof document.querySelectorAll === 'function') {
        return document.querySelectorAll(element).forEach((item) => {
            item.style.display = display
        })
    }
}

function createElement(type, classname) {
    let create = document.createElement(type)
    create.classname = classname
    return create
}

if (typeof document.addEventListener === 'function') {
    button.addEventListener('click', function(e) {
        e.preventDefault()
        stap++
        form(stap)
        localStorage.setItem(hash, JSON.stringify(stap))

    })
} else {
    button.attachEvent('click', function(e) {
        e.preventDefault()
        stap++
        form(stap)
        localStorage.setItem(hash, JSON.stringify(stap))
    })
}


window.onload = function() {
    if (localStorage.getItem(hash)) {
        return form(JSON.parse(localStorage.getItem(hash)))
    }
    form(stap)
}