import api from "./api";

export const jobService = {
  async getJobs(params) { return api.get("/jobs", { params }); },
  async getJob(id) { return api.get(`/jobs/${id}`); },
  async saveJob(id) { return api.post(`/jobs/${id}/save`); }
};