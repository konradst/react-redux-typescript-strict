import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { MetalActionTypes, setPlatinumOk, SetPlatinumAction, SetPlatinumOkAction } from '../actions/metals';
import { ofType, combineEpics, ActionsObservable } from 'redux-observable';

export const setPlatinumEpic = (action$: ActionsObservable<Pick<SetPlatinumAction, 'type'>>): Observable<SetPlatinumOkAction> => action$.pipe(
    ofType<Pick<SetPlatinumAction, 'type'>, SetPlatinumAction>(MetalActionTypes.SET_PLATINUM),
    tap(x => console.warn('platinum', x.payload.platinum)),
    mapTo(setPlatinumOk())
);

export default combineEpics(
    setPlatinumEpic
);
