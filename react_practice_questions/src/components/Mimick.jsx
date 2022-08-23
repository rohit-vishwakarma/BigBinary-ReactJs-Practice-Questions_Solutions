import React, { useState } from "react";

/**
 * Ques - 1.
 * Modify the code below such that when any of the text
 * boxes is selected, the relevant text transform is applied to
 * the text
 */

export function Mimick() {
  const [v, setV] = useState("BigBinary!");
  const [style, setStyle] = useState({
    textDecoration: null,
    fontWeight: null,
    fontStyle: null,
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setV(e.target.value);
  };

  const handleClick = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const value = e.target.getAttribute("data-stylevalue");
    // console.log(name, checked,value);
    setStyle({ ...style, [name]: checked === true ? [value] : null });
  };
  return (
    <>
      <h2>Assignment 1</h2>
      <input value={v} onChange={handleChange} />
      <br />
      <span>
        <input
          type="checkbox"
          name="fontWeight"
          data-stylevalue="bold"
          onClick={handleClick}
        />
        Bold
      </span>
      <br />
      <span>
        <input
          type="checkbox"
          name="fontStyle"
          data-stylevalue="italic"
          onClick={handleClick}
        />
        Italics
      </span>
      <br />
      <span>
        <input
          type="checkbox"
          name="textDecoration"
          data-stylevalue="underline"
          onClick={handleClick}
        />
        Underline
      </span>
      <br />
      <br />
      <br />
      <p style={style}>{v}</p>
    </>
  );
}
