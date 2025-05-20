import axios from "axios";
const request = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_URL ,
  timeout: 5000,
});
export namespace service {
  export function test(data: object){
    return request({
      method:"post",
      url:"/think",
      data
    })
  }
}
