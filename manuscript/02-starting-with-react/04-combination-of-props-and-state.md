## Combination of Props and State

The props and state works very well together, in many cases,
we pass the state of **parent** component as props of **child**
component.

```jsx
// parent component
class AppComponent extends Component {
    constructor() {
        super();

        this.state = { movies: [] };
    }

    getMovies() {
        $.get('http://www.omdbapi.com/?s=Batman').then((data) => {
            const list = data.Search;
            this.setState({ movies: list });
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getMovies()}>Get Batman Movies</button>

                <ListComponent movies={this.state.movies} />
            </div>
        );
    }
}
```

```jsx
// child component
class ListComponent extends Component {
    render() {
        return (
            <div>
                Movies length: {this.props.movies.length}

                <ul>
                    {this.props.movies.map((movie, i) => {
                        return <li key={i}>{movie.Title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

```
```jsx
// render our App
ReactDOM.render(<AppComponent />, document.getElementById('app'));
```

So when you click the button, the new data fetch via ajax, and after ajax is completed,
we set the new state of component, so React will re-render the component.

The child component (`ListComponent` in this example), take a props
called `movies`, which its value is a state of the parent, so when the state changed,
this child component will show the new content.