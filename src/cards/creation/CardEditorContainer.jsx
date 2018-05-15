import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardEditorActionCreators from './action';
import CardEditor from './CardEditor';

class CardEditorContainer extends Component {
    render() {
        return <CardEditor {...this.props} />;
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(cardEditorActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardEditorContainer);
