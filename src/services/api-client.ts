import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_API_KEY,
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

  get = (id: number | string, config?: AxiosRequestConfig) => {
    const request = apiClient.get<T>(`${this.endPoint}/${id}`, config);
    return request.then((res) => res.data);
  };
}
export default APIclient;
