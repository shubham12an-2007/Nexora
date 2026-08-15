import api from "./api";

export const resumeService = {
  async getResumes() { return api.get("/resumes"); },
  async uploadResume(formData) {
    return api.post("/resumes", formData, { headers: { "Content-Type": "multipart/form-data" } });
  },
  async deleteResume(id) { return api.delete(`/resumes/${id}`); }
};