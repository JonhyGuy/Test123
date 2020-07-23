export{};
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TruckSchema = new Schema({
  _id: Number,
  model: String,
  brand: String,
  serialNumber: String,
  motorNumber: String,
  maintenancePeriod: String,
  inicialMilage: Number,
  milage: Number,
  circulationCard: String,
  airbag: String,
  dock: String
});

module.exports = mongoose.model('Truck', TruckSchema);