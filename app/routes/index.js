import profile from "./profile";
import plans from "./plans"; 
import express from "express"; 
const routes = express.Router();
routes.use("/profile", profile);
routes.use("/plans", plans); 
export default routes;