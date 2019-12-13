interface OwnProps { }
interface StateProps {
    gold: number
}
interface DispatchProps {
    onSetGold: (gold: number) => void
}
type Props = StateProps & DispatchProps & OwnProps
interface ComponentState {
    silver?: number,
    copper?: number,
    error: boolean
}
export class MyComponent extends Component<Props, ComponentState> {
    state: ComponentState = {
        error: false
    };
    …
return …;
}
function mapStateToProps(state: State, ownProps: OwnProps): StateProps {
    return {
        gold: getGold(state)
    };
}
function mapDispatchToProps(dispatch: Redux.Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {
        onSetGold: (gold: number) => dispatch(setGold(gold))
    };
}
export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps as MapStateToPropsParam<StateProps, OwnProps, {}>,
    mapDispatchToProps as MapDispatchToPropsParam<DispatchProps, OwnProps>
)(MyComponent)