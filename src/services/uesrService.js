import { httpAxios } from "@/helper/httpHelper";

export async function signUP(userId){
 const result = await httpAxios.post("/api/users",userId)
 .then(res=>{
    return res.data;
 })   
 return result;
}