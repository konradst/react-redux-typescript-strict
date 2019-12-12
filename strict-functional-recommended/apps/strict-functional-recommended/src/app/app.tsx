import React, { MouseEvent, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMetalsStatePlatinum, selectMetalsStateGold, selectMetalsStateSilverNonMemo, selectMetalsStateCopperNonMemo } from './reducers';
import { setPlatinum, SetPlatinumAction } from './actions/metals';

export const App = (props: {}): ReactElement => {
  const dispatch = useDispatch();
  const platinum = useSelector(selectMetalsStatePlatinum);
  const gold = useSelector(selectMetalsStateGold);
  const silver = useSelector(selectMetalsStateSilverNonMemo);
  const copper = useSelector(selectMetalsStateCopperNonMemo);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to React/Redux/Redux-Observable/TypeScript Strict/Functional Mode!</h1>
        <div>platinum (memoized) {platinum}</div>
        <div>gold (memoized) {gold}</div>
        <div>silver (non-memoized) {silver}</div>
        <div>copper (non-memoized) {copper}</div>
        <button onClick={(event: MouseEvent<HTMLButtonElement>): SetPlatinumAction => dispatch(setPlatinum(11))}>
          Set platinum to 11
      </button>
      </div>
    </>
  );
};

export default App;
