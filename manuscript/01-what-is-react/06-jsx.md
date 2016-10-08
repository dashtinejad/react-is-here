## JSX

Handling DOM with React Elements is unavoidable. As we discuss earlier, we should, and we have to do this. Because we want to let the React to handle our needs.

But creating HTML tags with `React.creatElement` as we've seen before, is very hard. For this reason, React comes with JSX.

JSX is a concise and familiar syntax for defining tree structures with attributes.

For example instead of writing this simple JS line:

```javascript
var myReactElement = React.createElement("div", null, "Hello React");
```

You could use JSX and write the simple one:

```jsx
var myReactElement = <div>Hello React</div>;
```

And now, you can use nested elements as easy as you do it in regular HTML file:


```jsx
var myReactElement = <div>
  Hello
  <b>Real</b>
  World.
  <i>Wonderful!</i>
</div>;
```

However, there is some extra works for making JSX ready to work.
Because browser doesn't understand it, and your code should compile before executing on the browser.

There are different ways for compiling JSX to regular JavaScript code, the easiest one is Babel.

Babel is a JavaScript compiler, which can comple JSX to regular JavaScript code.

You can compile your JSX code, with babel, in two ways:

- Write your JSX file directly on your HTML document, and compile it on the client side with Babel.
- Compile your JSX with Babel, and used the compiled JavaScript code in your HTML document.

For starting JSX, we use the first method (compiling on the client side). But later, we learn how to compile JSX with other softwares, and use the compiled version in our production website.

```javascript
<script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>

<div id="app"></div>

<script type="text/babel">
    var myReactElement = <div>Hello React</div>;
    ReactDOM.render(myReactElement, document.getElementById('app'));
</script>
```

There are two importants notes which you should consider about it:

- Adding the babeljs file.
- Add `type="text/babel"` property to your script tag.

Also you can use an external `.js` file to achieve this manner:

```javascript
<script type="text/babel" src="myFirstApp.js"></script>
```

and just put your JSX code inside it:

```javascript
var myReactElement = <div>Hello React</div>;
ReactDOM.render(myReactElement, document.getElementById('app'));
```