import React from 'react';
import PropTypes from 'prop-types';

import styles from '../codex.css';
import DeckButton from '../../deck/DeckButton';

const CodexToolbar = ({codex, saveCodex}) => (
    <div className={styles['codex-toolbar']}>
        <button type='button' onClick={() => saveCodex(codex)}>Sauver</button>
        <DeckButton label='Imprimer Codex' onLoadDeck={() => codex}/>
    </div>

);

CodexToolbar.propTypes = {
    saveCodex: PropTypes.func.isRequired
};

export default CodexToolbar;
