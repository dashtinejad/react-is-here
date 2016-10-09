class RepositoriesList extends React.Component {
    constructor() {
        super();

        this.state = { repos: [] };
    }

    componentDidMount() {
        $.get('https://api.github.com/search/repositories?q=language:javascript').then((response) => {
            this.setState({ repos: response.items });
        });
    }

    render() {
        return (
            <ul>
                {this.state.repos.map((repo, i) => {
                    return <li key={i}>{repo.name}</li>
                })}
            </ul>
        );
    }
}

ReactDOM.render(<RepositoriesList />, document.getElementById('app'));