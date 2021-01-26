import axios from "axios";

const storesSufix = "/sellers";
const storeSufix = "/seller";

export const getStores = async () => {
  const result = await axios.get(`${storesSufix}`);
  return result;
};

export const getStore = async (id) => {
  const result = await axios.get(`${storeSufix}/${id}`);
  return result;
};
