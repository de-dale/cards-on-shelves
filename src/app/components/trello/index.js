import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'components/trello/actions';
import TrelloImporter from 'components/trello/TrelloImporter';
import secrets from 'components/trello/trello.scratch.requests.secrets';

const mapStateToProps = () => ({
    token: findToken(),
    trello: {
        key: findKey()
    }
});

function findToken() {
    return secrets.token;
}

function findKey() {
    return secrets.key;
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrelloImporter);