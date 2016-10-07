## Inserting React element into DOM

After creating your React Element, you should append it to the DOM. This will be done by `ReactDOM.render`:

```js
var reactElement = React.createElement("div", null, "Hello React");
ReactDOM.render(reactElement, document.getElementById('app'));
```

Don't forget to put your script after your `#app` element, as for accessing to it, you need the DOMReady.

The `ReactDOM.render`, accept 2 parameter:

- The first one is your React Element.
- The second one is your target DOM node.