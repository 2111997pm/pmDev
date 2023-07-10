import React from 'react'
import { useState, useEffect } from 'react';


const CustomeHooks = (initialValue = 0, step = 1, delay = 1000) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => prevValue + step);
        }, delay);

        return () => {
            clearInterval(interval);
        };
    }, [step, delay]);

    return value;



}

export default CustomeHooks