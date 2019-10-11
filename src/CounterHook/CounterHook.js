import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {
    const [counter, setCounter] = useState(0);

const addHandler = () => {
    setCounter(counter + 1);
}

const removeHandler = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1); /* jos counter on nolla, ole nolla, jos ei niin laske miinus 1*/
}

const resetHandler = () => {
    setCounter(0);
}

    return(
        <div className="container">
            <p>{counter}</p>
            <div>
                <button onClick={addHandler}>Add one</button>
                <button onClick={removeHandler}>Remove one</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default CounterHook;