const mongoose = require("mongoose");

const Connect = () => {
  return mongoose.connect(
    "mongodb+srv://sd:sd@cluster0.snevwow.mongodb.net/emi"
  );
};
module.exports = Connect;
