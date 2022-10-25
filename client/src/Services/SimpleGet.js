import axios from 'axios';

export const simpleGet = async (url) => {
  const response = await axios.get(url);
  console.log("RESPONSE DATA FROM SERVICE: ", response.data);
  return response.data;
}