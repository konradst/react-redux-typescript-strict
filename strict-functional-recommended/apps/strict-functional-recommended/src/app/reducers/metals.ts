import { ActionTypes, Action } from '../actions/metals';

// Define our State interface for the current reducer
export type State = {
    readonly platinum: number;
    readonly gold: number;
    readonly silver: number;
    readonly copper: number;
};

// Define our initialState
export const initialState: State = {
    platinum: 10,
    gold: 20,
    silver: 30,
    copper: 40,
}

export const reducer = (state: State = initialState, action: Action): State =>
    (action.type === ActionTypes.SET_PLATINUM) ?
        {
            ...state,
            platinum: action.payload.platinum
        } :
        state;
