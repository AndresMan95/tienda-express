import Tienda from "../../models/Tienda.js";

const allTiendas = async (req, res) => {
    try {
        let all = await Tienda.find();
        console.log(all);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: all
        });
    } catch (err) {
        console.error("Error al obtener las tiendas: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};

let tiendaDireccion= async (req, res) => {
    try { 
        let direccion= req.params.direccion;
        let tienda=  await Tienda.find({direccion:direccion});
        console.log(tienda);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: tienda
        });
    } catch (err) {
        console.error("Error al obtener las tiendas: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};

let tiendaNombre= async (req, res) => {
    try { 
        let nombre= req.params.nombre;
        let tienda=  await Tienda.find({nombre:nombre});
        console.log(tienda);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: tienda
        });
    } catch (err) {
        console.error("Error al obtener las tiendas: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
        }
export { allTiendas, tiendaDireccion, tiendaNombre };
