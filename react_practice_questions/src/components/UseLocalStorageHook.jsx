import { useState } from "react";

/**
 * Ques - 2.
 * Write a custom hook below named
 * `useLocalStorage` which has a similar
 * signature and return values as useState,
 * but instead of accepting the initial value,
 * useLocalStorage accepts the key which is
 * used to determine the value in localstorage
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 *
 * But instead of setting a state variable,
 * `useLocalStorage` sets the value in the
 * localStorage.
 *
 */

const useLocalStorage = (key) => {
  // console.log(key)
  const [v, setV] = useState(localStorage.getItem(key));

  const setter = (value) => {
    console.log(value);
    localStorage.setItem(key, value);
    setV(value);
  };
  return [v, setter];
};

export function UseLocalStorageHook() {
  const [v, setV] = useLocalStorage("BigBinary");

  const handleChange = (e) => {
    setV(e.target.value);
  };
  return (
    <>
      <h2>Assignment 2</h2>
      <input value={v} onChange={handleChange} />
      <p>{v}</p>
    </>
  );
}
