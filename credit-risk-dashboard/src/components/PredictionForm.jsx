import { useState } from "react";
import { predictCreditRisk } from "../services/api";

export default function PredictionForm({ setResult }) {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      ...form,
      age: Number(form.age),
      income: Number(form.income),
      loan_amount: Number(form.loan_amount),
      loan_tenure_months: Number(form.loan_tenure_months),
      avg_dpd_per_delinquency: Number(form.avg_dpd_per_delinquency),
      delinquency_ratio: Number(form.delinquency_ratio),
      credit_utilization_ratio: Number(form.credit_utilization_ratio),
      num_open_accounts: Number(form.num_open_accounts),
    };

    try {
      const res = await predictCreditRisk(payload);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const inputStyle =
    "w-full block border border-gray-300 rounded-md p-3 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none";

  const labelStyle = "text-sm font-semibold text-gray-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 bg-white shadow-lg p-4 md:p-6 rounded-xl"
    >
      <div className="flex flex-col">
        <label className={labelStyle}>Age</label>
        <input
          name="age"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Income</label>
        <input
          name="income"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Loan Amount</label>
        <input
          name="loan_amount"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Loan Tenure (Months)</label>
        <input
          name="loan_tenure_months"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Average DPD</label>
        <input
          name="avg_dpd_per_delinquency"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Delinquency Ratio</label>
        <input
          name="delinquency_ratio"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Credit Utilization</label>
        <input
          name="credit_utilization_ratio"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Open Accounts</label>
        <input
          name="num_open_accounts"
          type="number"
          className={inputStyle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Residence Type</label>
        <div className="relative w-fit">
          <select
            name="residence_type"
            className={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Owned">Owned</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Rented">Rented</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Loan Purpose</label>
        <div className="relative w-fit">
          <select
            name="loan_purpose"
            className={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Education">Education</option>
            <option value="Home">Home</option>
            <option value="Auto">Auto</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label className={labelStyle}>Loan Type</label>
        <div className="relative w-fit">
          <select
            name="loan_type"
            className={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Secured">Secured</option>
            <option value="Unsecured">Unsecured</option>
          </select>
        </div>
      </div>

      {/* BUTTON WITH LOADER */}
      <button
        disabled={loading}
        className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-md mt-3 flex justify-center items-center gap-2"
      >
        {loading && (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}

        {loading ? "Predicting..." : "Predict Credit Risk"}
      </button>
    </form>
  );
}
