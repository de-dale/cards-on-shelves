import { connect } from 'react-redux';
import { findById, log } from '../utils';
import Card from './Card';

const mapStateToProps =  (state, props) => ({
    card: findCard(state, props)
});

function findCard(state, props) {
    return props.card
        ? log(findById(log(state.entities, 'ENTITIES'), props.card.id), 'CARSD')
        : findById(state.entities, props.id);
}

export default connect(
    mapStateToProps
)(Card);
