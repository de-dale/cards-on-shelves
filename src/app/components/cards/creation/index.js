import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'components/cards/actions';
import * as itemsActions from 'components/items/actions';
import EditableCard from './EditableCard';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) { 
    return bindActionCreators({ ...actions, ...itemsActions }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableCard);
