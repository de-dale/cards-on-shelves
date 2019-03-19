import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'components/importers/trello/actions';
import TrelloImporter from 'components/importers/trello/TrelloImporter';
import secrets from 'components/importers/trello/trello.scratch.requests.secrets';

const mapStateToProps = () => ({
    trello: {
        token: findToken(),
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