## Props

Like regular HTML elements which you can pass properties, like `href`, `id`, `class`,
`style`, `src`, `alt`, `title` or any other things, in React components you can 
pass properties also. React call them as `props` and are available within the
component by using `this` keyword.

```jsx
class MyReactComponent extends Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
}

ReactDOM.render(<MyReactComponent name="Dashtinejad" />,
document.getElementById('app'));
```

