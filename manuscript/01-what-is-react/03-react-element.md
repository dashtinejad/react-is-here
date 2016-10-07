## React Element

When using React, your DOM is handled by React itself. If you are familiar with libraries likes jQuery, the React methodology for handling DOM is a bit strange for you.  

In those libraries, you write your usual DOM elements in your HTML markup, and then handle it by jQuery with a peice of javascript code.

In React, you write all your javascript and DOM markup altoghether, which we call it React Component.

There are some main reason for this:

- **Speed**: Because your DOM is generated and handled with React, the speed of DOM manipulation and event handling is much faster.

- **Debugging**: Because all of your component code, including HTML, CSS and JavaScript are all together, debugging of it is much simpler, and extending it in the future will be easier.

For creating a simple HTML element by React, we use `React.createElement`. It's a powerful method, but for now, we cover the simple usage of it:

```js
var reactElement = React.createElement("div", null, "Hello React");
```

The method takes 3 parameters:

- the first one is the HTML tag name
- the second one is the HTML properties which we want to add to it (for example `class`, `id` or any other HTML properties)
- and the last one is the content of it.