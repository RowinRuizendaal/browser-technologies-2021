const button = document.querySelector('.submit')
const bedankt = '<h2>Nog even alles op een rij</h2>'
const backButton = "<a href='../dashboard'><button class='next'>Ga Terug</button></a>"
const hash = window.location.href

let stap = 1;




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
        query('.enquete-container').insertAdjacentHTML('beforeend', bedankt)
        queryAll('.submit', 'none')
        queryAll('.no-js', 'block')
        queryAll('.stap1', 'flex')
        queryAll('.stap2', 'flex')
        queryAll('.stap3', 'flex')
        queryAll('.stap4', 'flex')
    }
}


const query = (element, display) => {
    if (display) {
        return document.querySelector(element).display = display
    }
    console.log(document.querySelector(element))
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

button.addEventListener('click', (e) => {
    e.preventDefault();
    stap++;
    form(stap)
    localStorage.setItem(hash, JSON.stringify(stap))

})


window.onload = () => {
    if (localStorage.getItem(hash)) {
        return form(JSON.parse(localStorage.getItem(hash)))
    }
    form(stap)
}