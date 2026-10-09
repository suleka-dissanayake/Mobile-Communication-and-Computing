import {useMemo} from "react";

export default function UseMemoComponent(props) {
    const {name} = props;
    const memoizedValue = useMemo(() => {
        console.log("Calculating memoized value...");
        return name.toUpperCase();
    }, [name]);

    return (
        <>
            <h1 className='bg'>Hello {memoizedValue}</h1>
        </>
    );
}