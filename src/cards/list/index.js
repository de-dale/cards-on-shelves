import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import CardList from './CardList';

const mapStateToProps = state => ({
    cards: state.cardList.cards
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
