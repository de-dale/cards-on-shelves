import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import CardList from './CardList';

const mapStateToProps = state => ({
    cards: state.cards.list
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
