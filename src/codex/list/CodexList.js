import React from 'react';
import PropTypes from 'prop-types';
import Codex from '../index';

const CodexList = ({ codices }) => (
    <div className={ 'codices' }>
        { codices.map((codex, index) =>
            <Codex  key={ index } codex={ codex } />
        ) }
    </div>
);

CodexList.propTypes = {
    codices: PropTypes.array.isRequired
};

export default CodexList;
