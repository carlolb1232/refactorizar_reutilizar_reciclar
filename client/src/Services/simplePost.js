import axios from "axios"


export const simplePost = async (url, object) => {
  axios.post(url, object)
    .then(res=>console.log("Response: ", res))
    .catch(err=>console.log("error: ", err))
}