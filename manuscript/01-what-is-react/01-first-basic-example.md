## First Basic Example

React is a JavaScript framework which handle UI easily without considering about DOM.

Starting with react is as easy as including a simple `.js` file in your HTML document.



```html
<script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>

<div id="app"></div>

<script>
    var reactElement = React.createElement("div", null, "Hello React");
    ReactDOM.render(reactElement, document.getElementById('app'));
</script>
```


T> Don't forget to put your script after after your desired HTML tag,
as you need the DOMReady.