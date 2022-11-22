const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const TablesSchema = new Schema({
    users_id: String,
    fee_to_pay: Number
})

const TableSchema = mongoose.model('TableForFees', TablesSchema);

module.exports = TableSchema;