import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Codex from './Codex';
import { findById } from 'utils';

const mapStateToProps = (state, props) => ({
    codex: findCodex(state, props)
});

function findCodex(state, props) {
    return props.codex
        ? props.codex
        : findById(state.entities, props.id);
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Codex);
