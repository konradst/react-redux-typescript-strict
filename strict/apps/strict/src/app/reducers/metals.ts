import { MetalActionTypes, MetalAction } from '../actions/metals';

// Define our State interface for the current reducer
export interface State {
    platinum: number;
    gold: number;
    silver: number;
    copper: number;
}

// Define our initialState
export const initialState: State = {
    platinum: 10,
    gold: 20,
    silver: 30,
    copper: 40,
}

export const reducer = (state: State = initialState, action: MetalAction): State => {
    switch (action.type) {
        case MetalActionTypes.SET_PLATINUM:
            return {
                ...state,
                platinum: action.payload.platinum
            };
        default: {
            return state;
        }
    }
}
