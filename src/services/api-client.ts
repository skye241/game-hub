import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "14b9906509424e9bb4f925c2e492e48f",
  },
});

export default apiClient;
