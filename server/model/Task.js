const mongoose = require("mongoose")
// creating  schema
const TaskSchema = new mongoose.Schema({

    // creating object
    title: {
        type: String,
        required: true,
        unique: true,
    },
    complited: {
        type:Boolean,
        required: true
    },
  
},
    // updated at created at will be included
    { timestamps: true }
)

// finaly support to export the schema
module.exports = mongoose.model("Task", TaskSchema);