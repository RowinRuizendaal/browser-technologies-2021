## Wireframe / sketches


## Fast sketch idea 1

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/index.png)

Stay on the page, so you dont have to redirect the users to everywhere to their form slug.


## Fast sketch idea 2

![image](https://raw.githubusercontent.com/RowinRuizendaal/browser-technologies-2021/master/docs/img/index2.png)

Card have a image to make it more prettier, also the card will indicate colors if its has been already done or if its'active. If its not active the card will be shown but the users can't interact with it, and provides feedback to the user when the form will be avaible to fill in.

Also not forget to mention that my second idea has slugs for each of the card, so if the user presses on a card he/she will be redirected to that specifc page where they can fill in the form.

Also I have made a begin state here where a student can put in their studentnumber that is being saved for further uses to process their data.


## Localstorage

Localstorage is being used to save the user's data, if they come back everything will be the same as first.

## Desktop Browsers

Firefox
Edge

## Firefox

Firefox

## Mobile

IOS (safari)

![image](https://github.com/RowinRuizendaal/browser-technologies-2021/blob/master/docs/onderzoek/1.png?raw=true)

Button has default styling

> -webkit-appearance: none;

![image](https://github.com/RowinRuizendaal/browser-technologies-2021/blob/master/docs/onderzoek/2.png?raw=true)

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


Android (Samsung internet)


## Feature detection


Localstorage

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

querySelectorAll

Since there is no good crossbrowser alternative to querySelector, my main check is whether querySelector is available in the browser. QuerySelector is fully supported from IE9, allowing me to use all functions that are also supported from IE9 in my code.

[Queryselector](https://caniuse.com/?search=queryselector)

```js
if (typeof document.querySelectorAll === 'function') {
  // code ...
}
```

array.includes

.includes () is not supported in IE and older browsers. An alternative to this is .indexOf (). With this I can still see which names do not match the search and hide them.

[includes](https://caniuse.com/?search=includes)

```js
if (typeof [].includes === 'function') { 
  // use .includes
} else {
  // use .indexOf
}
```

forEach

ForEach () is fully supported from IE10. So in IE9 forEach () should be replaced with for loops.

[forEach](https://caniuse.com/?search=foreach)


```js
if (typeof NodeList.prototype.forEach === 'function') { 
  // use forEach
} else {
  // use for loop
}
```

addEventListener


The 'back to top' button is separate from the search functions of the app. Hence, I can make it available in browsers older than IE9. I am replacing addEventListener with attachEvent in these browsers. Since attachEvent is supported up to IE8, I have to detect this function as well.

[EventListner](https://caniuse.com/?search=addeventlistener)

```js
if (typeof document.addEventListener === 'function') { 
  // use addEventListener
} else if (typeof window.attachEvent === 'function') {
  // use attachEvent
}
```

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

