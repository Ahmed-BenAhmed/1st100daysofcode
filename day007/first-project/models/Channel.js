const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    views: Number
});

const channelSchema = new Schema({
    name: String,
    vidoes: [videoSchema]
});
// const channelSchema = new Schema({
//     name: String,
//     ownerName: String,
//     subscribers: Number,
//     vidoes: [videosSchema]
// });

const Channel = mongoose.model("channel",channelSchema);

module.exports = Channel;
