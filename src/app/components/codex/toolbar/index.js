import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import CodexToolbar from './CodexToolbar';

const mapStateToProps = (state, props) => ({
    codex: props.codex
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodexToolbar);
