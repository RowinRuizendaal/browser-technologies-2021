const button = document.querySelector('.submit')
const bedankt = '<h2>Bedankt voor het invullen van de Enquete!<h2>'
const backButton = "<a href='../dashboard'><button class='next'>Ga Terug</button></a>"
const hash = window.location.href

let stap = 1;


button.addEventListener('click', (e) => {
    e.preventDefault();
    stap++;
    form(stap)
    localStorage.setItem(hash, JSON.stringify(stap))

})


const form = (stap) => {

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
        queryAll('.enquete-form', 'none')
        query('.enquete-container').insertAdjacentHTML('beforeend', bedankt)
        query('.enquete-container').insertAdjacentHTML('beforeend', backButton)
    }
}


const query = (element, display) => {
    if (display) {
        return document.querySelector(element).display = display
    }

    return document.querySelector(element)
}

const queryAll = (element, display) => {
    return document.querySelectorAll(element).forEach((item) => {
        item.style.display = display
    })
}

const createElement = (type, classname) => {
    let create = document.createElement(type)
    create.classname = classname
    return create
}

window.onload = () => {
    if (localStorage.getItem(hash)) {
        return form(JSON.parse(localStorage.getItem(hash)))
    }
    form(stap)
}