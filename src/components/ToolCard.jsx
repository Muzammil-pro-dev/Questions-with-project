import { useState } from "react";

function ToolCard({ title, action, isArray }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleRun = () => {
    let value = isArray
      ? input.split(",").map(Number)
      : input;

    let res = action(value);
    setResult(JSON.stringify(res));
  };

  return (
    <div className="card">
      <h3>{title}</h3>

      <input
        placeholder={isArray ? "1,2,3,4" : "Enter text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleRun}>Run</button>

      <p className="result">{result}</p>
    </div>
  );
}

export default ToolCard;