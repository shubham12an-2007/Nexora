import api from "./api";

export const interviewService = {
  async getInterviews(params) { return api.get("/interviews", { params }); },
  async createInterview(data) { return api.post("/interviews", data); },
  async updateInterview(id, data) { return api.put(`/interviews/${id}`, data); }
};