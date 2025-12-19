import mongoose from "mongoose";

const remedySchema = new mongoose.Schema({
  category: String,
  title: String,
  plant: String,
  partUsed: String,
  ingredients: [String],
  preparation: String,
  dosage: String,
  caution: String
});

export default mongoose.model("Remedy", remedySchema);