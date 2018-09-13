import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import CardItem from './CardItem';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardItem);
