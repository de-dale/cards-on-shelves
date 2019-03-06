import { connect } from 'react-redux';
import { find, isItemIdIn } from 'utils';
import CardItemList from './CardItemList';

const mapStateToProps = (state, props) => ({
    items: findCardItemsById(state, props.card)
});

function findCardItemsById(state, { children = [] }) {
    return find(state.entities,
        isItemIdIn(...children)
    );
}

export default connect(
    mapStateToProps
)(CardItemList);
