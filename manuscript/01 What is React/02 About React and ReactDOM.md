= What is React
Doc Writer <mojtaba@gmail.com>



== About React and ReactDOM

As you see, when you include `react.js` and `react-dom.js`, you have access to two global objects.

Let's play a little with them.

[source,javascript]
----
console.log(React);
console.log(ReactDOM);
----

And what you see is something like this:

[TODO] image screen shot



So, like any other JavaScript plugins, libraries and frameworks, you can use their methods and property.

For example, both of them has a `version` property which you can use to findout the current version of your React:

[source,javascript]
----
console.log(React.version);
console.log(ReactDOM.version);
----