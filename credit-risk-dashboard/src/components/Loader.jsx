import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 2;
      });
    }, 40); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Loading Application...
      </h1>

      <div className="w-72 bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-indigo-600 h-4 transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-3 text-gray-600 font-semibold">{progress}%</p>
    </div>
  );
}
