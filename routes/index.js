import { Router } from "express";
import { getProductController } from "../controllers/product.controller.js";
import { getCartController } from "../controllers/cart.controller.js";
import { errorController } from "../controllers/error.controller.js";

const appRoutes = Router();
appRoutes.get("/", getProductController);
appRoutes.get("/cart", getCartController);
appRoutes.get("/*", errorController);

export default appRoutes;
