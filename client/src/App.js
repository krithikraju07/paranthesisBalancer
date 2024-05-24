import { useState } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");

  const updateString = (e) => {
    setString(e.target.value);
  };

  const cal = () => {
    if (!string) return;
    const array = [...string];
    const brackets = {
      "{": "}",
      "[": "]",
      "(": ")",
    };
    const stack = [];
    array.forEach((i) => {
      if (brackets[i]) {
        stack.push(brackets[i]);
      } else {
        const last = stack.at(-1);
        if (last == i) {
          stack.pop();
        }
      }
    });
    if (stack.length == 0) {
      setResult("Balanced");
    } else {
      setResult("Not balanced");
    }
  };

  return (
    <div className="App">
      <h1>Check balanced Paranthesis</h1>
      <input className="input-field" onChange={updateString} />
      <button className="button-4" onClick={cal} >
        Check
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
