import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../list/actions';
import EditableCard from './EditableCard';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableCard);
