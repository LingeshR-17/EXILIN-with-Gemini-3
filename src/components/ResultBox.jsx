export default function ResultBox({ result }) {
  return (
    <div className="card">
      <h3>Output</h3>

      {!result && (
        <p className="placeholder">
          Your explanation will appear here.
        </p>
      )}

      {result?.explanation && (
        <section className="fade-in">
          <h4>📘 Simple Explanation</h4>
          <p>{result.explanation}</p>
        </section>
      )}

      {result?.keyPoints && (
        <section className="fade-in">
          <h4>📌 Key Points</h4>
          <ul>
            {result.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {result?.example && (
        <section className="fade-in">
          <h4>🧠 Example</h4>
          <p>{result.example}</p>
        </section>
      )}

      {result?.nextSteps && (
        <section className="fade-in">
          <h4>👉 What You Should Do Next</h4>
          <ul>
            {result.nextSteps.map((step, index) => (
              <li key={index}>✅ {step}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
