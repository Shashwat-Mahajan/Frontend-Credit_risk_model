import { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Form */}
      <div className="w-full max-w-4xl mx-auto overflow-x-hidden">
        <PredictionForm setResult={setResult} />
      </div>

      {/* Result */}
      {result && (
        <div className="mt-10">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}
