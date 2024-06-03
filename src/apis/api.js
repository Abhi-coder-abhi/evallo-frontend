import axios from 'axios';
import { API_URL } from './url';

const baseURL = API_URL + "api/";

const createApiInstance = () => {
  return axios.create({
    baseURL,

  });
};

const protectedApiGet = async (path, params) => {
  try {
    const api = createApiInstance(); 
    const resp = await api.get(path, { params });
    return resp.data;
  } catch (error) {
    console.error("Error in protected GET request:", error);
    throw error;
  }
};

const protectedApiPost = async (path, data) => {
  try {
    const api = createApiInstance();
    const resp = await api.post(path, data);
    return resp.data;
  } catch (error) {
    console.error("Error in protected POST request:", error);
    throw error;
  }
};

export {
  protectedApiGet,
  protectedApiPost,
};
