import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const fetchImage = async () => {
  const response = await api.get("/image");
  return response.data;
};

export default api;