const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  offername: {
    type: String
  },
  offertype: {
    type: String
  },
  offerdescription: {
    type: String
  },
  offerowner: {
    type: mongoose.Schema.Types.ObjectId
  },
  imageUrl: { type: String, default: "/images/defaultcourse.jpg" }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
