import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "14b9906509424e9bb4f925c2e492e48f",
  },
});

class APIclient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    const request = apiClient.get<FetchDataResponse<T>>(this.endPoint, config);
    return request.then((res) => res.data.results);
  };
}
export default APIclient;
