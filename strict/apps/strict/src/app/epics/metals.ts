import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { ActionTypes as MetalsActionTypes, setPlatinumOk } from '../actions/metals';
import { ofType, combineEpics } from 'redux-observable';
import { Action } from 'redux';

export const setPlatinumEpic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
    ofType(MetalsActionTypes.SET_PLATINUM),
    tap(x => console.warn('action', x)),
    mapTo(setPlatinumOk())
);

export default combineEpics(
    setPlatinumEpic
);
