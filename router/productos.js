import { Router } from "express";

import { allProductos, productosPorTipo, productosPorNombre } from "../controllers/productos/readProdcuto.js"; // Aquí ya es una función    

const router = Router();

router.get("/", allProductos); // allProductos ya es la función, no un objeto
router.get ('/tipo/:tipo', productosPorTipo);
router.get ('/nombre/:nombre', productosPorNombre);
export default router;  