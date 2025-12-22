import fs from "node:fs/promises";

// קריאה מקובץ
export async function read() {
  try {
    const data = await fs.readFile("output.json", "utf-8");
    //   המרה json > js
    const change = JSON.parse(data);
    console.log(change);
  } catch (err) {
    console.log("Yishay throw an Error");
  }
}

// כתיבה לקובץ
export async function write() {
  try {
    const text = "asdfghjh";
    // המרה js > json
    const change = JSON.stringify(text);
    await fs.writeFile("output.json", change);
  } catch (err) {
    console.log("baddd");
  }
}