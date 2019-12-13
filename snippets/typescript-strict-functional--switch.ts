export const reducer = (state: State = initialState, action: Action): State =>
    (action.type === ActionTypes.SET_POINTS) ?
        {
            points: action.payload.points
        } :
        state;