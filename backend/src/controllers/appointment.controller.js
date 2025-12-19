import Appointment from "../models/Appointment.model.js";
import Slot from "../models/Slot.model.js";

export const createAppointment = async (req, res) => {
  const { doctorId, slotId, consultationType, patient } = req.body;

  const slot = await Slot.findById(slotId);

  if (slot.isBooked) {
    return res.status(400).json({ message: "Slot already booked" });
  }

  slot.isBooked = true;
  await slot.save();

  const appointment = await Appointment.create({
    doctorId,
    slotId,
    consultationType,
    patient,
    meetLink:
      consultationType === "video"
        ? `https://meet.google.com/${Math.random().toString(36).substring(2, 12)}`
        : null
  });

  res.status(201).json(appointment);
};
