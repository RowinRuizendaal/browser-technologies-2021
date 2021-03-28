// Localstorage
export const checkStorage = (item) => {
    // check if localstorage is enabled
    if (storageAvailable('localStorage')) {

        const getItem = localStorage.getItem(item)

        if (getItem) {
            return getItem
        }

    } else {
        // Too bad, no localStorage for us
        console.log('disabled')
    }
}

const storageAvailable = (type) => {
    try {
        const storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

export const setItem = (keyName, keyValue, objectName) => {
    let a = []

    a = JSON.parse(localStorage.getItem(keyName)) || [];

    if (objectName) {
    for (let i = 0; i < a.length; i++) {
        for (var key in a[i]) {
            if (objectName === key) {
                return
            }
        }
    }
    a.push({
        [objectName]: keyValue
    })
}
    return localStorage.setItem(keyName, JSON.stringify(a))
}


// Queryselectors

export const query = (element, display) => {
    if (display) {
        return document.querySelector(element).display = display
    }
    return document.querySelector(element)
}

export const queryAll = (element, display) => {
    if (typeof document.querySelectorAll === 'function') {
        return document.querySelectorAll(element).forEach((item) => {
            item.style.display = display
        })
    }
}