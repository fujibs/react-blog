const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    displayName: {
        type: String,
        required: false, // change when login added
    },
    email: {
        type: String,
        required: false, // change when login added
    },
    categories: {
        type: Array,
        required: false,
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);