import axios from "axios";

const API = axios.create({
  baseURL: "https://credit-risk-score-v2-latest.onrender.com",
});

export const predictCreditRisk = (data) =>
    API.post("/predict_credit_risk", data);
