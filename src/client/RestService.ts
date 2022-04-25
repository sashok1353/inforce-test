import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class RestService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = RestService.initAxiosInstance();
  }

  private static initAxiosInstance() {
    return axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  get(url: string, params?: any) {
    return this.axiosInstance.get(url, { params });
  }

  post(url: string, data: any, params?: AxiosRequestConfig) {
    return this.axiosInstance.post(url, data, { params });
  }

  put(url: string, data: any) {
    return this.axiosInstance.put(url, data);
  }

  delete(url: string, params?: any) {
    return this.axiosInstance.delete(url, { params });
  }
}

export default new RestService();
