import React, { useEffect, useState } from 'react'

const AutoIncrement = (MaxValue) => {

  let [counter, setCounter] = useState(0)

  let timer;
  useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (counter === MaxValue) {
        return clearInterval(timer)
      } else {
        setCounter(prev => prev + 10)
        counter++;
      }

    }, 0.5)
    return () => {

      clearInterval(timer)
    }
  }, [counter])

  return counter;
}

export default AutoIncrement