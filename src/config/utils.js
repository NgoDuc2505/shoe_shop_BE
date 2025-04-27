import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const logRoute = (baseRoute, endpoint) => {
    const fullRoute = `${baseRoute}${endpoint}`;
    console.log(`Route: ${fullRoute}`);
}

const copyRight = "© Ngo Minh Duc, Tran Quoc Si, Dang Van Rin, Ngo Van Bao An - VKU - Shoeshop API";
const addRouteToList = (method, endpoint, baseURL="default")=>{
    baseURL = baseURL == "default" ? `http://localhost:${process.env.PORT}${process.env.SHOE_BASE_URL}` : baseURL;
    const fullRoute = `${baseURL}${endpoint}`;
    const deployRoute = `${method}: ${process.env.DEPLOY_BASE_URL}${process.env.SHOE_BASE_URL}${endpoint}`;
    return `${method}: ${fullRoute} <====> ${deployRoute}`;
}


const saveRoutesToFile = (routeList, fileName="api_routes.txt" ,isActive=false) => {  
    if (!isActive) return;
    const fileContent = routeList.join('\n');
    fs.writeFileSync(fileName, fileContent, "utf8");
    console.log(`API routes have been saved to ${fileName}`);
  };

  const saveRoutesToFile2 = (routeList ,isActive=false) => {
    if (!isActive) return;
    const newContent = routeList.join('\n');
    const filePath = "api_routes.txt";
    let shouldWrite = false;
  
    if (fs.existsSync(filePath)) {
      console.log("File api_routes.txt already exists, checking content...");
      const existingContent = fs.readFileSync(filePath, "utf8");
      if (existingContent === newContent) {
        console.log("Content is the same, skipping write...");
        return; 
      } else {
        console.log("Content has changed, overwriting file...");
        shouldWrite = true; 
      }
    } else {
      console.log("File api_routes.txt does not exist, creating new file...");
      shouldWrite = true; 
    }
  
    if (shouldWrite) {
      fs.writeFileSync(filePath, newContent, "utf8");
      console.log("API routes have been saved to api_routes.txt");
    }
  };

export {logRoute, copyRight, addRouteToList, saveRoutesToFile}