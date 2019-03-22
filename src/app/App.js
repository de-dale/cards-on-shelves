import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import CodexList from 'components/codex/list';
import createStore from 'store';
import importStore from 'components/importers/store/importer';


const App = ({ preloadedState: state }) => {
    const migratedState = importStore(state);
    const store = createStore(migratedState);
    return (
        <Provider store={ store }>
            <CodexList/>
        </Provider>
    );
};

App.propTypes = {
    preloadedState: PropTypes.object
};

export default App;
