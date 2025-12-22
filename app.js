import { question } from "readline-sync";
import { read, write } from "./function.js";



                                       
export async function fetchUsers() {
  try {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = (await fetch(url));
  const data = await response.json();
  // console.log(data);
  

  return data;
  }
  catch (err){
    response.json("faild with message: ", err)
  }
}



console.log(await fetchUsers());



// read()
// write()



