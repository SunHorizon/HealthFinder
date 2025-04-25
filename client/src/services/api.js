import axios from "axios";

const api = axios.create({ baseURL: "/home" });

export const fetchImage = async () => {
  const response = await api.get("/image");
  return response.data;
};

export default api;