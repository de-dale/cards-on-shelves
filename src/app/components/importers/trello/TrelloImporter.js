import React from 'react';
import PropTypes from 'prop-types';

class TrelloImporter extends React.Component {

    constructor(props) {
        super(props);
        const { trello, parent, fetchTrello } = props;
        this.state = {
            query: '',
            key: trello.key,
            token: trello.token,
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
                <input type="text"
                    value={ this.state.query }
                    onChange={ onInputChange('query') }
                    placeholder="Rechercher depuis Trello"/>
                <button
                    onClick={ () => fetchTrello(this.state.query, this.state.parent, this.state.key, this.state.token) }>Trello
                </button>
            </div>
        );
    }
}

TrelloImporter.propTypes = {
    parent: PropTypes.object.isRequired,
    trello: PropTypes.shape({
        key: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired
    }).isRequired,
    fetchTrello: PropTypes.func.isRequired
};

export default TrelloImporter;
 