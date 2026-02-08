import { useState } from "react";

export default function CompareBox() {
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [output, setOutput] = useState("");

  async function handleCompare() {
    const res = await fetch("http://localhost:5000/api/analyze/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ doc1, doc2 }), // 👈 EXACT backend contract
    });

    const data = await res.json();
    setOutput(data.comparison);
  }

  return (
    <div className="card">
      <h3>Compare Two Documents</h3>

      <textarea
        placeholder="Paste Document 1..."
        value={doc1}
        onChange={(e) => setDoc1(e.target.value)}
      />

      <textarea
        placeholder="Paste Document 2..."
        value={doc2}
        onChange={(e) => setDoc2(e.target.value)}
      />

      <button onClick={handleCompare}>Compare</button>

      {output && <div className="result">{output}</div>}
    </div>
  );
}
