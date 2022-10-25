import axios from "axios"

export const simpleUpdate = async (url, object) => {
  axios.put(url, object)
    .then(res => console.log(res))
    .catch(err=>console.log("error: ", err))
}