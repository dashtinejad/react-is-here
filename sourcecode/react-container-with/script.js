class RepositoriesListContainer extends React.Component {
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
        return <RepositoriesList repos={this.state.repos} />;
    }
}

class RepositoriesList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.repos.map((repo, i) => {
                    return <li key={i}>{repo.name}</li>
                })}
            </ul>
        );
    }
}

ReactDOM.render(<RepositoriesListContainer />, document.getElementById('app'));