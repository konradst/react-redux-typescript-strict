export function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionTypes.SET_POINTS: {
            return {
                points: action.payload.points
            };
        }
        default:
            return state;
    }
}