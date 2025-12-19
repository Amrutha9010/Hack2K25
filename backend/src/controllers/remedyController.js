import Remedy from "../models/Remedy.js";

export const getRemedies = async (req, res) => {
  const { category } = req.query;
  const remedies = await Remedy.find({
    category: new RegExp(category, "i")
  });
  res.json(remedies);
};