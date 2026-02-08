import { useState } from "react";

export default function UploadBox({ setResult }) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("student");
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, mode }), // 👈 EXACT backend contract
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div className="card">
      <h3>Paste Document</h3>

      <textarea
        rows="6"
        placeholder="Paste Terms, terms & conditions, Policy, or Legal Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="or-text">OR</p>

      <div className="file-upload">
  <label htmlFor="fileInput" className="file-label">
   Upload a file
    <span>PDF, DOCX, TXT, PNG, JPG</span>
  </label>

  <input
    id="fileInput"
    type="file"
    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
    onChange={(e) => setText(e.target.files[0])}
  />

</div>
          <label>Explanation Level:</label>
      <select className="level-select" value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="eli10">Explain Like I'm 10</option>
        <option value="student">College Student</option>
        <option value="professional">Professional</option>
        <option value="bullets">Bullet Points</option>
      </select>

      <button onClick={handleAnalyze}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
