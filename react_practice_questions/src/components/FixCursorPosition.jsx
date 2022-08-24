import { useState } from "react";

/**
 * Ques - 10.
 * The code below seems to work,
 * except for one edge case.
 *
 * After a user types anything into the
 * input field wishes to edit something in
 * the middle, the cursor jumps to the end
 * of the input field after any change is made.
 *
 * Steps to reproduce:
 * 1. Position the cursor after the first "I"
 * 2. Type any alphabet
 * 3. Notice that the cursor is now at the end
 *      of the string
 *
 * Task: Fix this behaviour!
 */


export function FixCursorPosition() {
  const [v, setV] = useState("BIGBINARY");

    const cursorAndPostion = (text, currPosition, formatter) => {
        const firstPart = text.slice(0, currPosition);  //getting first part of the string from the current postion of cursor
        const secPart = text.slice(currPosition);   // second part i.e. after the current position

        const beforeCursorText = formatter(firstPart);

        const newText = beforeCursorText + secPart;
        const newPosition = beforeCursorText.length; //new cursor position is currposition + 1 or before cursor text length ;

        return [newText, newPosition]
    }

  const handleChange = (e) => {
    const input = e.target;
    const value = input.value;
    const currPosition = input.selectionStart; //current position of the cursor

    const formatter = (f) => f.toUpperCase();

    const [formattedText, newPosition] = cursorAndPostion(value, currPosition, formatter);

    setV(formattedText);
    window.requestAnimationFrame(()=>{
        input.selectionStart = newPosition;
        input.selectionEnd = newPosition;
    });
  };
  return (
    <>
      <input value={v} onChange={handleChange} />
    </>
  );
}
