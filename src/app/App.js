import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import CodexList from './components/codex/list';
import createStore from 'store';
import migrate from 'store/migrate-store';


const App = ({ preloadedState: state }) => {
    let migratedState = migrate(state);
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
