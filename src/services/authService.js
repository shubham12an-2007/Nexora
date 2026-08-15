import api from "./api";

export const authService = {
  async login(payload) { return api.post("/auth/login", payload); },
  async register(payload) { return api.post("/auth/register", payload); },
  async me() { return api.get("/auth/me"); }
};