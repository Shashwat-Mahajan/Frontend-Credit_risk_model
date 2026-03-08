export default function ResultCard({ result }) {
  const riskColor =
    result.rating === "Low Risk"
      ? "bg-green-100 text-green-700 border-green-300"
      : result.rating === "Medium Risk"
        ? "bg-yellow-100 text-yellow-700 border-yellow-300"
        : "bg-red-100 text-red-700 border-red-300";

  const probabilityPercent = (result.probability * 100).toFixed(2);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Prediction Result
      </h3>

      <div className="space-y-6">
        {/* Probability */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-medium">Probability</span>
            <span className="font-semibold text-gray-800">
              {probabilityPercent}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all"
              style={{ width: `${probabilityPercent}%` }}
            />
          </div>
        </div>

        {/* Credit Score */}
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-600 font-medium">Credit Score</span>

          <div className="bg-indigo-100 text-indigo-700 font-bold px-4 py-1 rounded-lg">
            {result.credit_score}
          </div>
        </div>

        {/* Risk Rating */}
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-600 font-medium">Risk Rating</span>

          <span
            className={`px-4 py-1 rounded-full font-semibold border ${riskColor}`}
          >
            {result.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
