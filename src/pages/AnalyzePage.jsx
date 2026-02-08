import { useState } from "react";
import UploadBox from "../components/UploadBox";
import ResultBox from "../components/ResultBox";

export default function AnalyzePage() {
  const [result, setResult] = useState("");

  return (
          <section id="tool" className="tool-section">

    <div className="tool-container">
      <UploadBox setResult={setResult} />
      <ResultBox result={result} />
    </div>
          </section>

  );
}
