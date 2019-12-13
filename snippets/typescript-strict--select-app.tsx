import { platinumSelector goldSelector } from './reducers';
export const App = (): ReactElement => {
    const platinum = useSelector(platinumSelector);
    const gold = useSelector(goldSelector);
    return (
        <>
            <div>Platinum {platinum}</div>
            <div>Gold {gold}</div>
        <>
                )
}