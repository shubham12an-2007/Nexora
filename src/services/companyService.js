import api from "./api";

export const companyService = {
  async getCompanies(params) { return api.get("/companies", { params }); },
  async getCompany(id) { return api.get(`/companies/${id}`); }
};