// import { question } from "readline-sync";
import { read, write } from "./function.js";


// פונקציה לבקשות משרתים
export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch failed:", err);
    throw err;
  }
}



// הפעלת הפונקציה
try {
  const users = await fetchUsers();
  console.log(users);
} catch (err) {
  console.log("Error in app");
}




// read()
// write()



