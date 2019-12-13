const copperEffect = useEffect((): void => {
    return fetch('/api/copper')
        .then(r => r.json())
        .then(setCopper);
}, []);