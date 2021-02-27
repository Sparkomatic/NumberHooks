import * as React from "react"

// Learn more: https://framer.com/api

export function useDoubleNumber(number) {
    const [numberState, setNumberState] = React.useState(1)

    React.useEffect(() => {
        multiplyAndUpdateState(number)
    }, [number])

    const multiplyAndUpdateState = (value) => {
        console.log("in Hook's multiply function and value passed is " + value)
        // let tempNumber = value
        // tempNumber = value * 2
        setNumberState(value * 2)
        console.log("in Hook's and number state is " + numberState)
    }

    return numberState
}
