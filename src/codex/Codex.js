import React from 'react';
import PropTypes from 'prop-types';
import CodexToolbar from './toolbar';
import CardList from '../cards/list';

const Codex = ({ codex }) => (
    <div className='codex'>
        <h1>{ codex.name }</h1>
        <CodexToolbar codex={ codex }/>
        <CardList ids={ codex.children }/>
    </div>
);

Codex.propTypes = {
    codex: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
};

export default Codex;
