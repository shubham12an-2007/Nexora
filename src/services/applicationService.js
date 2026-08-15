import api from "./api";

export const applicationService = {
  async getApplications(params) { return api.get("/applications", { params }); },
  async getApplication(id) { return api.get(`/applications/${id}`); },
  async createApplication(data) { return api.post("/applications", data); },
  async updateApplication(id, data) { return api.put(`/applications/${id}`, data); },
  async deleteApplication(id) { return api.delete(`/applications/${id}`); }
};