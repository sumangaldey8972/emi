const express = require("express");
const app = express.Router();

app.post("/", async (req, res) => {
  const { loan, Pa_interest, month } = req.body;
  // console.log(loan,Pa_interest,month);
  try {
    let monthly_interest = Pa_interest / 12 / 100;

    let num = Math.pow(1 + monthly_interest, month);

    let monthly_payment = (loan * num * monthly_interest) / (num - 1);

    let total_amount = monthly_payment.toFixed(2) * month;

    let interest = total_amount - loan;
    res.send({
      message: "success",
      data: {
        emi: Math.round(monthly_payment),
        interest: Math.round(interest),
        totalpayment: Math.round(total_amount),
      },
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
module.exports = app;
