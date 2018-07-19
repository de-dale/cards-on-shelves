import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import CardToolbar from './CardToolbar';



const mapStateToProps = state => ({
    card: state.toolbar.card
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardToolbar);
