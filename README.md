PrototypeJS.html5data
=====================

Access the HTML5 data-* elements via a Prototype method

the HTML5 spec allows for custom attributes on any HTML element starting with data-

In Firefox/Safari/Chrome these data fields are available in the `dataset` property - this method will add the ability to access the custom data attributes easily in all browsers supported by Prototype. The data fields will be CamelCase according to the HTML5 spec

```html

<div id="datatest" data-order-number="34095" data-first-name="Jonny"></div>

```

```javascript

$('datatest').html5data().orderNumber;

$('datatest').html5data().firstName;


```
