import Tienda from "../../models/Tienda.js";

let createTienda = async (req, res) => {
    try { 
        let nuevaTienda = new Tienda(req.body); // Crear una nueva tienda
        let nuevo = await  Tienda.create(nuevaTienda);
        console.log(nuevo);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(201).json({
            response: nuevo
        });
    } catch (err) {
        console.error("Error al crear la tienda: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};

export default createTienda;

