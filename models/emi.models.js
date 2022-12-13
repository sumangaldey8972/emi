const mongoose = require("mongoose");

const EmiSchema = mongoose.Schema({
  loan: { type: Number, required: true },
  Pa_interest: { type: Number, required: true },
  month: { type: Number, required: true },
});
const EmiModel = new mongoose.model("emi", EmiSchema);
module.exports = EmiModel;
