import { combineEpics } from 'redux-observable';
import metalsEpics from './metals';

export const rootEpic = combineEpics(
    metalsEpics,
);