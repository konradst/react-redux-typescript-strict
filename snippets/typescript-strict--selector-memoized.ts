export const selectMetalsState = createSelector(
    (state: State) => state.metals,
    state => state
)
export const selectPlatinum = createSelector(
    selectMainState,
    state => state.platinum
)