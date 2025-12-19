import axios from "axios";

export const sendSOS = async (data) => {
  return await axios.post("http://localhost:5173/api/sos", data);
};
