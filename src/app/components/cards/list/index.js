import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'components/cards/actions';
import CardList from './CardList';
import { find, isItemIdIn } from 'utils';

const mapStateToProps = (state, props) => ({
    cards: findCardsById(state, ...props.cards)
});

function findCardsById(state, ...ids) {
    return find(state.entities, item => item.type === 'card',
        isItemIdIn(...ids)
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
