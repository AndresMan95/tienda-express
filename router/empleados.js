import { Router } from "express";
import { allEmpleados,empleadoPorNombre,empleadoPorCargo } from "../controllers/empleados/readEmpleado.js"; // Aquí ya es una función

const router = Router();

router.get("/", allEmpleados); // allEmpleados ya es la función, no un objeto
router.get ('/nombre/:nombre',empleadoPorNombre);
router.get ('/cargo/:cargo',empleadoPorCargo);  

export default router;
