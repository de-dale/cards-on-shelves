import { connect } from 'react-redux';
import { findById } from 'utils';
import Card from './Card';

const mapStateToProps = (state, props) => ({
    card: findCard(state, props)
});

function findCard(state, props) {
    return props.card
        ? findById(state.entities, props.card.id)
        : findById(state.entities, props.id);
}

export default connect(
    mapStateToProps
)(Card);
