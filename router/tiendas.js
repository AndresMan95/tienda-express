import { Router } from "express";
import { allTiendas, tiendaDireccion, tiendaNombre} from "../controllers/tiendas/readTienda.js"; // Aquí ya es una función
import createTienda from "../controllers/tiendas/createTienda.js";
const router = Router();

router.get("/", allTiendas); // allTiendas ya es la función, no un objeto
router.get ('/direccion/:direccion', tiendaDireccion);
router.get ('/nombre/:nombre', tiendaNombre);
router.post ('/create', createTienda);
export default router;


