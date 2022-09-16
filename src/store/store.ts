import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {dialogsReducer} from './dialogs/dialogs.reducer';
import {profileReducer} from './profile/profile.reducer';
import {authReducer} from './auth/auth.reducer';
import {appReducer} from './app/app.reducer';

export const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    auth: authReducer,
    app: appReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.__store__ = store;