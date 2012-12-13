PrototypeJS.html5data
=====================

Access the HTML5 data-* elements via a Prototype method

the HTML5 spec allows for custom attributes on any HTML element starting with data-*

In Firefox/Safari/Chrome these data fields are available in the `dataset` property - this method will add the ability to access or set the custom data attributes easily in all browsers supported by Prototype. The data fields will be CamelCase according to the HTML5 spec

```html

<div id="datatest" data-order-number="34095" data-first-name="Jonny"></div>

```

```javascript

//Get the data-order-number value
$('datatest').gethtml5data().orderNumber;

$('datatest').gethtml5data().firstName;


//Set the data-new-url value
$('datatest').sethtml5data('newUrl','http://github.com');


//Delete an existing data-old-url value
$('datatest').sethtml5data('oldUrl',null);


```


See it in action

http://jsfiddle.net/y7w7E/3/