import { combineReducers } from 'redux';
import * as metalsReducers from './metals';
import { createSelector } from 'reselect';

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export type State = {
    readonly metals: metalsReducers.State
}

/*
 * initialState of the app
 */
export const initialState: State = {
    metals: metalsReducers.initialState
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
    metals: metalsReducers.reducer
})

/**
 * Selectors
 */

// memoized
export const selectMetalsState = createSelector(
    (state: State) => state.metals,
    state => state
)

export const selectMetalsStatePlatinum = createSelector(
    selectMetalsState,
    state => state.platinum
)

export const selectMetalsStateGold = createSelector(
    selectMetalsState,
    state => state.gold
)
// not memoized
export const selectMetalsStateSilverNonMemo = (state: State): number => state.metals.silver;
export const selectMetalsStateCopperNonMemo = (state: State): number => state.metals.copper;