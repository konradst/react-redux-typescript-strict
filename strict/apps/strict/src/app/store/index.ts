import { createStore, applyMiddleware, Store } from 'redux';
import { State, reducer, initialState } from '../reducers';
import { AppAction } from '../actions';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../epics';

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const epicMiddleware = createEpicMiddleware();
const store: Store<State, AppAction> = createStore<State, AppAction, {}, {}>(reducer, initialState, applyMiddleware(epicMiddleware));
export const rootEpicRun = epicMiddleware.run(rootEpic);

export default store;
