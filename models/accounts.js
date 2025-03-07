const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  clientName : { type: String, required: true},
  clientCode: { type: String, required: true },
  password: { type: String, required: true },
  totpKey: { type: String, required: true },
  apiKey: { type: String, required: true },
  jwtToken: { type: String, default: "" },
  refreshToken: { type: String, default: "" },
  feedToken: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  orders: [
   {
    name : {String},
    u_id: {String},
   }],
   
});

const Accounts = mongoose.model('Accounts', AccountSchema);

module.exports = {Accounts};
