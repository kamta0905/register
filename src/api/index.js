import React from "react";
import axios from "axios";
const BASE_URL = "https://0324-122-171-229-23.ngrok.io/";

const userAuthToken = async () => {
  const auth = await localStorage.getItem("auth");
  const { token } = !!auth ? JSON.parse(auth) : {};
  return token;
};

const post = async (url, token, data = {}, _config = {}) => {
  const config = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios
    .post(url, data, { ...config })
    .then((res) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }) => {
      return response;
    });
};

const get = async (url, token, _config = {}) => {
  const config = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return await axios.get(url, { ...config }).then((res) => res.data);
};

const user = {
  signUp: async (params) => {
    try {
      const res = await post(`${BASE_URL}/sign_up`, null, {
        ...params,
        role: "OWNER",
      });
      if (res?.status === 400) {
        return {
          error: true,
          message: res.data.message,
        };
      } else if (res?.status === 201 && !!res?.data.message) {
        return {
          error: true,
          message: [res.data.message],
        };
      }
      return res.data;
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  },
  signIn: async (params) => {
    try {
      const res = await post(`${BASE_URL}/sign_in`, null, params);
      if (res?.status === 400) {
        return {
          error: true,
          message: [res.data.message],
        };
      } else if (res?.status === 401) {
        return {
          error: true,
          message: ["Incorrect Email Address or password."],
        };
      }
      return res.data;
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  },

  uploadImage: async (params) => {
    try {
      return await post(`${BASE_URL}/accounts/avatar`, await userAuthToken(), params);
    } catch (error) {
      return error;
    }
  },
  user: async () => {
    return await get(`${BASE_URL}/user`, await userAuthToken());
  },
};
export default user;
