import React, { useState } from "react";
import { askQuestion } from "../services/api";

function QuestionBox({ sourceText }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim() || !sourceText) return;

    setLoading(true);
    setAnswer("");

    try {
      const data = await askQuestion(sourceText, question);
      setAnswer(data.answer);
    } catch {
      setAnswer("Unable to fetch answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="question-box">
      <h3>Ask a Follow-up Question</h3>

      <input
        type="text"
        placeholder="Ask a question about this text…"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Asking…" : "Ask"}
      </button>

      {answer && <div className="chat-bubble">{answer}</div>}
    </section>
  );
}

export default QuestionBox;
