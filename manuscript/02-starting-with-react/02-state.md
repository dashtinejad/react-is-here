## State

State is a plain JavaScript object that is use to record and react
to user events. 

Each class based components that you defined, has its own state object.

Whenever a component's state is changed, the component immediately re-renders. 
And also forces all children components to re-render.

For using the state inside a component, you should initialize it.

```jsx
class MyReactComponent extends Component {
    constructor() {
        super();

        this.state = { name: 'World' };
    }

    render() {
        return <div onClick={() => this.onClickHandler()}>
            Hello {this.state.name} - Click on me
        </div>;
    }

    onClickHandler() {
        this.setState({ name: 'Dashtinejad' });
    }
}
```

So when you click on the element, the state `name` will change, and here React envolves
to control your UI. Due to state change, the React will re-render your markup again,
and suddenly, the `Hello World` will change to `Hello React`.

---

Becareful! React is much more intelligent than you think, so when any state change (via `setState`),
React will re-render only that specific parts of UI which is held that state, so other states or DOM changes
left untouched. 


```jsx
class MyReactComponent extends Component {
    constructor() {
        super();

        this.state = { name: 'World', age: 29 };
    }

    render() {
        return <div onClick={() => this.onClickHandler()}>
            Hello {this.state.name} - Click on me - {this.state.age}
        </div>;
    }

    onClickHandler() {
        this.setState({ name: 'Dashtinejad' });
    }
}
```