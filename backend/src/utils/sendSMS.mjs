import axios from "axios";

export const sendSMS = async ({
  message,
  phone = process.env.EMERGENCY_PHONE,
}) => {
  if (!phone) return;

  await axios.post(
    "https://www.fast2sms.com/dev/bulkV2",
    {
      route: "q",
      message,
      numbers: phone,
    },
    {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
};
