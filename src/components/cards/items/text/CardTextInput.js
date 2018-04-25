import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CardTextInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onUpdate = props.onUpdate;
    }

    render() {
        const item = this.state.item;
        return (
            <div className="card-input-text">
                <textarea value={item.content} onChange={ this.handleTextChange } />
            </div>
        );
    }
    
    handleTextChange(event) {
        let item = this.state.item;
        item.content = event.target.value;

        this.updateItem(item);
    }

    updateItem(item){
        this.setState({
            item: item
        });
        this.onUpdate(item);
    }
}

CardTextInput.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string.isRequired
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};
