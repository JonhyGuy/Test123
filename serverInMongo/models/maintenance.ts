export{};
const mongoose = require('mongoose');
const { Schema } = mongoose;

const MaintenanceSchema = new Schema({
  _id: Number,
	truckId: Number,
	boxId: Number,
	mechanic: String,
	endDate: Date,
	reasons: String,
	comments:String,
  starDate: Date
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);