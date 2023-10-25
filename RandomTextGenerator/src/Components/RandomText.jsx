import React, { useState, useCallback, useEffect } from "react";
import "./RandomText.css";
export default function RandomText() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const TextGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhjiklmnopkrstuvwxyz";
    const number = "123456789";
    const characters = "`~!@#$%^&*()_{}:/.,";
    let emptyStr = "";
    if (numberAllowed) str += number;
    if (charAllowed) str += characters;

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      emptyStr += str.charAt(index);
    }
    setText(emptyStr);
  }, [setText, length, numberAllowed, charAllowed]);

  //  useEffect is used when page is reload for the first time
  useEffect(() => {
    TextGenerator();
    console.log(text);
  }, [TextGenerator]);

  return (
    <div className="container">
      <div className="box">
        <h1>Random Text Generator</h1>
        <div className="input-field">
          <input type="text" value={text} readOnly />
        </div>
        <div className="check-items">
          <input
            type="range"
            value={length}
            min={6}
            max={20}
            id="range"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="range">Length:{length}</label>
          <div className="num-check">
            <label htmlFor="number">Number </label>
            <input type="checkbox" 
            id="number" 
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
          </div>
          <div className="char-check">
            <label htmlFor="character">Characters </label>
            <input type="checkbox" 
            id="character" 
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
          </div>
        </div>
      <div className="button">
        <button>Copy</button>
      </div>
      </div>
    </div>
  );
}
