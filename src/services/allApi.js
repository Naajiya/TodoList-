import commonAPI from "./commonAPI";
import SERVER_URL from "./Server_url";

export const addVideo= async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allTodo`,video)
}

export const getTodo = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/allTodo`, '')
}

export const deletTodo = async (todo) =>{
    return await commonAPI("DELETE", `${SERVER_URL}/allTodo/${todo}`, {})
}