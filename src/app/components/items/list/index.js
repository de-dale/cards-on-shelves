import { connect } from 'react-redux';
import { find, isItemIdIn } from 'utils';
import CardItemList from './CardItemList';

const mapStateToProps =  (state, props) => ({
    items: findCardItemsById(state, ...props.card.children)
});

function findCardItemsById(state, ...ids) {
    return find(state.entities,
        isItemIdIn(...ids)
    );
}

export default connect(
    mapStateToProps
)(CardItemList);
