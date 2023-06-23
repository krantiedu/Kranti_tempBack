const mongoose = require("mongoose");

const queSchema = mongoose.Schema({

    module_id: String,
    question: String,
    op_one : String,
    op_two : String,
    op_three : String,
    op_forth : String,
    answer : String,


})

module.exports = mongoose.model("question",queSchema);