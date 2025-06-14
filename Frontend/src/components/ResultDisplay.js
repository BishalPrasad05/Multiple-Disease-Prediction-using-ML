import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Merged Prediction Result</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-[400px]">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default ResultDisplay;
