import axios from "axios";

const authSufix = "/auth";
const userSufix = "/user";

export const getUser = async (id) => {
  const result = await axios.get(`${userSufix}/${id}`);
  return result;
};

export const login = async (data) => {
  const { email, password } = data;
  const result = await axios.post(`${authSufix}/user`, {
    email,
    password,
  });

  return result;
};

export const register = async (data) => {
  const { name, password, email, mobile, address } = data;

  const result = await axios.post(`${userSufix}`, {
    name,
    password,
    email,
    mobile,
    address,
  });

  return result;
};

export const updateUser = async (data, id) => {
  const {
    name,
    password,
    email,
    mobile,
    address,
    favList,
    temp_verification_code,
  } = data;

  const result = await axios.put(`${userSufix}/${id}`, {
    name,
    password,
    email,
    mobile,
    address,
    favList,
    temp_verification_code,
  });

  return result;
};

export const disableUser = async (id) => {
  const result = await axios.delete(`${userSufix}`);
  return result;
};
