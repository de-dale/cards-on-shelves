import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupContent from './PopupContent';

class PopupButton extends Component {
    constructor(props) {
        super(props);
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.state = {
            showPopup: false
        };
    }

    render() {
        return (
            <button onClick={ this.openPopup }>
                { this.props.label }
                { this.state.showPopup && (
                    <PopupContent onClose={ this.closePopup }>
                        { this.props.children }
                    </PopupContent>
                ) }
            </button>
        );
    }

    openPopup() {
        this.setState(state => ({ ...state, showPopup: true }));
    }

    closePopup() {
        this.setState(state => ({ ...state, showPopup: false }));
    }
}


PopupButton.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element
};

export default PopupButton;
