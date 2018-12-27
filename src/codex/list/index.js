import { connect } from 'react-redux';
import CodexList from './CodexList';
import { find } from '../../utils';

const mapStateToProps = (state) => ({
    codices: findCodicesById(state)
});

function findCodicesById(state) {
    return find(state.entities, item => item.type === 'codex');
}
export default connect(
    mapStateToProps
)(CodexList);
