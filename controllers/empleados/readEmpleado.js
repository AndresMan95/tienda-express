import Empleado from "../../models/Empleado.js";

const allEmpleados= async (req, res) => {
    try{ 
        let all = await Empleado.find();
        console.log(all);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: all
        });
    } catch (err) {
        console.error("Error al obtener los empleados: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};

// ver empleado por nombre 

const empleadoPorNombre = async (req, res) => {
    try {
        let nombre = req.params.nombre;
        let empleado = await Empleado.find({ nombre: nombre });
        console.log(empleado);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: empleado
        });
    } catch (err) {
        console.error("Error al obtener el empleado: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};

// ver empleado por cargo

const empleadoPorCargo = async (req, res) => {
    try {
        let cargo = req.params.cargo;
        let empleado = await Empleado.find({ cargo: cargo });
        console.log(empleado);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: empleado
        });
    } catch (err) {
        console.error("Error al obtener el empleado: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};


export { allEmpleados,empleadoPorNombre,empleadoPorCargo }; 