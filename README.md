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

querySelectorAll

Omdat er geen goede crossbrowser alternatief is voor querySelector, is mijn belangrijkste check of querySelector beschikbaar is in de browser. Vanaf IE9 is querySelector volledig ondersteund, waardoor ik alle functies die ook vanaf IE9 ondersteund zijn kan gebruiken in mijn code.

[Queryselector](https://caniuse.com/?search=queryselector)

```js
if (typeof document.querySelectorAll === 'function') {
  // code ...
}
```

array.includes

.includes() wordt in IE en in oudere browsers niet ondersteund. Een alternatief hiervoor is .indexOf(). Hiermee kan ik alsnog zien welke namen niet overeenkomen met de zoekopdracht en deze verbergen.

[includes](https://caniuse.com/?search=includes)

```js
if (typeof [].includes === 'function') { 
  // use .includes
} else {
  // use .indexOf
}
```

forEach

Vanaf IE10 wordt forEach() volledig ondersteund. In IE9 moeten forEach() dus worden vervangen door for loops.

[forEach](https://caniuse.com/?search=foreach)


```js
if (typeof NodeList.prototype.forEach === 'function') { 
  // use forEach
} else {
  // use for loop
}
```

addEventListener

De 'terug naar boven' knop staat los van de zoekfuncties van de app. Daarom kan ik deze beschikbaar maken in browsers ouder dan IE9. Ik vervang addEventListener door attachEvent in deze browsers. Omdat attachEvent ondersteund wordt tot en met IE8, moet ik deze functie ook detecteren.

[EventListner](https://caniuse.com/?search=addeventlistener)

```js
if (typeof document.addEventListener === 'function') { 
  // use addEventListener
} else if (typeof window.attachEvent === 'function') {
  // use attachEvent
}
```

## Aanpassingen

Arrow functions verplaats voor normale functions


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

