import { highOrderReducers } from '../../core/reducers';
import file from 'components/importers/file/reducer';
import trello from 'components/importers/trello/reducer';

export default highOrderReducers([ file, trello ]);