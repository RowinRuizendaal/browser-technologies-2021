## Wireframe / sketches


## Fast sketch idea 1

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/index.png)

Stay on the page, so you dont have to redirect the users to everywhere to their form slug.


## Fast sketch idea 2

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/index2.png)

Card have a image to make it more prettier, also the card will indicate colors if its has been already done or if its'active. If its not active the card will be shown but the users can't interact with it, and provides feedback to the user when the form will be avaible to fill in.

Also not forget to mention that my second idea has slugs for each of the card, so if the user presses on a card he/she will be redirected to that specifc page where they can fill in the form.

Also I have made a begin state here where a student can put in their studentnumber that is being saved for further uses to process their data.


## The app

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/app-1.png)

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/app-2.png)

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/app-3.png)

## Testing with diffrent devices & browsers

The documentation about testing can be found [here](https://github.com/RowinRuizendaal/browser-technologies-2021/wiki/testing)

## Localstorage

Localstorage is being used to save the user's data, if they come back everything will be the same as first.


Localstorage Studentnumber structure:

```js
studentnumber: "500813624"
```

LocalStorage enquete structure:

> http://localhost:3000/enquete/1-awnsers

Keeping track of the answers that have filled in

```js

[{"firstName":"Rowin"},{"lastName":"Ruizendaal"},{"docenten":"Sanne 't hooft"},{"date":"2021-03-18"},{"difficult":"Best wel moeilijk :("},{"clarity":"heel duidelijk"},{"understanding":"goed"}]

```

> http://localhost:3000/enquete/1

```js
2
```

Keeping track of where the person left off (this will take you back to the form step)





### CSS variables

> Css variables not supported

```CSS
@supports(--css: variables) {
     :root {
        --wit: #FFFF;
        --backgroundColor: #1a1f2b;
        --blauw: rgb(38, 114, 236);
        --roze: #e94560
    }
}
````

### Supports flex - grid

```CSS
@supports (display: grid) {
    .grid-container {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-columns: repeat(auto-fill, 30rem);
        grid-gap: 4rem;
    }
}


@supports (display: flex) {
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }
    .header img {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .formhome {
        display: flex;
        flex-direction: column;
    }
    .text_container {
        display: flex;
        flex-direction: column;
    }
    .locked:hover .overlay {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .enquete {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .enquete-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .buttons {
        display: flex;
    }
}



```


### Android (Samsung internet)


## Feature detection


### Localstorage

```js
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
```



```js
    if (storageAvailable('localStorage')) {
      // Do something
    }

```

#### Feedforward Localstorage off

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/localstorage-off.png)

### querySelectorAll

Since there is no good crossbrowser alternative to querySelector, my main check is whether querySelector is available in the browser. QuerySelector is fully supported from IE9, allowing me to use all functions that are also supported from IE9 in my code.

[Queryselector](https://caniuse.com/?search=queryselector)

```js
if (typeof document.querySelectorAll === 'function') {
  // code ...
}
```

### array.includes

.includes () is not supported in IE and older browsers. An alternative to this is .indexOf (). With this I can still see which names do not match the search and hide them.

[includes](https://caniuse.com/?search=includes)

```js
if (typeof [].includes === 'function') { 
  // use .includes
} else {
  // use .indexOf
}
```

### forEach

ForEach () is fully supported from IE10. So in IE9 forEach () should be replaced with for loops.

[forEach](https://caniuse.com/?search=foreach)


```js
if (typeof NodeList.prototype.forEach === 'function') { 
  // use forEach
} else {
  // use for loop
}
```

### addEventListener


[EventListner](https://caniuse.com/?search=addeventlistener)

```js
if (typeof document.addEventListener === 'function') { 
  // use addEventListener
} else if (typeof window.attachEvent === 'function') {
  // use attachEvent
}
```


## Cut in the mustard

### For loops

Since most browsers support for loops instead of for each, I will be using for loops instead of checking if the browser supports forEach beacuse, for loops are faster then foreach loops and it also makes my code more DRY, instead of writing the same code over and over.


### EventListener

EventListeners are not supported in IE 6-8, this version of IE has been released since Aug 27, 2001 this is the only browser that does not support the Event.addEventListener() method.


### Functions

Arrow functions are not supported in some browsers, so I decided I will convert them into normal functions so that all browsers support the methods



## Modifications

Arrow functions move for normal functions


## HTML elements being used:

- Articles
  - Cards
    - img
    - Heading (h2/h3)

- Form
  - Fieldset
    - legend
      - Input
      - Label

