## Event Handling

Event handling on react is like the old lovely HTML attributes.

```jsx
class MyReactComponent extends Component {
    render() {
        return <div onClick={this.onClickHandler}>Hello React</div>
    }

    onClickHandler() {
        console.log('You clicked on me');
    }
}
```

So whenever you click on your generated HTML element, the `onClickHandler` will fire.