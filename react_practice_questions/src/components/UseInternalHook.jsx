import { useState, useEffect } from "react";

/**
 * Ques - 3.
 * Create a custom hook useInterval
 * which has the same signature as setInterval
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
 *
 * When the delay is changed, the hook must
 * adapt to the delay in runtime, and clicking
 * pause must only pause the timer and not reset
 * the count
 *
 */

const useInterval = (callback, delay) =>{
  
  useEffect(()=>{
    console.log('delay - ', delay );
    if(delay !== undefined){
      console.log('set interval')
      const interval = setInterval(callback, delay);
      return ()=>{
        console.log('clear interval')
        clearInterval(interval);
      }
    }
  }, [delay])
}

export function UseInternalHook() {
  const [value, setValue] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isPaused, setIsPaused] = useState(false);

  const incrementCounter = () => {
    setValue((value) => value + 1);
  };
  useInterval(incrementCounter, isPaused ? undefined : delay);
  return (
    <>
      <h1>Count: {value}</h1>
      <span>Delay (in ms: )</span>
      <input value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
      <br />
      <br />
      <button onClick={() => setIsPaused((isPaused) => !isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </>
  );
}
