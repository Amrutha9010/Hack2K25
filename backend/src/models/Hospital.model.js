import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true }
});

export default mongoose.model("Hospital", hospitalSchema);
