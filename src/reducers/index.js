import { combineReducers } from 'redux';

import routes from './routes';
import coin from './coin';
export default combineReducers({
    routes,
    coin,
});