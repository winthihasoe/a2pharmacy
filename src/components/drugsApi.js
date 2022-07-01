import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getDrugs = () => api.get("/drugs").then((res) => res.data);

export const getDrug = (id) => api.get(`/drugs/${id}`).then((res) => res.data);

export const updateDrug = ({ id, ...updatedDrug }) =>
  api.put(`/drugs/${id}`, updatedDrug).then((res) => res.data);

export const addDrug = (addedDrug) =>
  api.post("/drugs").then((res) => res.data);

export const registerUser = (data) =>
  api.post("/register", data).then((res) => res.data);
