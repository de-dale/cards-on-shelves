import { connect } from 'react-redux';
import Deck from './Deck';
import { find, isItemIdIn } from 'utils';

const mapStateToProps = (state, props) => ({
    cards: findCards(state.entities, props.cards)
});

function findCards(entities, ids = []) {
    return find(entities, isItemIdIn(...ids));
}

export default connect(
    mapStateToProps
)(Deck);
