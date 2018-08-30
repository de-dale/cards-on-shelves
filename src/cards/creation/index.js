import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../list/actions';
import * as itemsActions from '../items/actions';
import EditableCard from './EditableCard';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actions, itemsActions), dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableCard);
