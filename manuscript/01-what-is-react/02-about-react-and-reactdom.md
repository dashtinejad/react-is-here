## About React and ReactDOM

As you see, when you include `react.js` and `react-dom.js`, you have access to two global objects.

Let's play a little with them.

```js
console.log(React);
console.log(ReactDOM);
```

And what you see is something like this:



![](../images/reactjs.jpg)



So, like any other JavaScript plugins, libraries and frameworks, you can use their methods and property.

For example, both of them has a `version` property which you can use to findout the current version of your React:

```js
console.log(React.version);
console.log(ReactDOM.version);
```