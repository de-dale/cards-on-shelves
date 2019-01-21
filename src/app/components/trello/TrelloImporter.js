import React from 'react';
import PropTypes from 'prop-types';

class TrelloImporter extends React.Component {

    constructor(props) {
        super(props);
        const { trello, token, parent, fetchTrello } = props;
        this.state = {
            url: '',
            key: trello.key,
            token: token,
            parent: parent,
            fetchTrello: fetchTrello
        };
    }

    render() {
        const onInputChange = name => event => {
            this.setState({
                [ name ]: event.target.value
            });
        };
        const fetchTrello = this.state.fetchTrello;
        return (
            <div>
                <input type="text" value={ this.state.url } onChange={ onInputChange('url') } placeholder="Url to Trello card"/>
                <button
                    onClick={ () => fetchTrello(this.state.url, this.state.parent, this.state.key, this.state.token) }>Trello
                </button>
            </div>
        );
    }
}

TrelloImporter.propTypes = {
    parent: PropTypes.object.isRequired,
    trello: PropTypes.shape({
        key: PropTypes.string.isRequired,    
    }).isRequired,
    token: PropTypes.string.isRequired,
    fetchTrello: PropTypes.func.isRequired
};

export default TrelloImporter;
 