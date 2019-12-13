const epicMiddleware = createEpicMiddleware();
const store: Store<State> = createStore<State, Action<AppAction>, {}, {}>(reducer, initialState, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);