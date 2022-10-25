import axios from "axios"


export const simpleDelete = async (url) => {
  axios.delete(url)
    .then(res => console.log(res))
    .catch(err=>console.log("error: ", err)) 
}