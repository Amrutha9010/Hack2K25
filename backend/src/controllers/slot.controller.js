import Slot from "../models/Slot.model.js";

export const getSlots = async (req, res) => {
  const { doctorId, date } = req.query;

  const slots = await Slot.find({
    doctorId,
    date,
    isBooked: false
  });

  res.json(slots);
};
