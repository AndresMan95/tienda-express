import Producto from "../../models/Producto.js";    

const allProductos = async (req, res) => {
    try {
        let all = await Producto.find();
        console.log(all);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: all
        });
    } catch (err) {
        console.error("Error al obtener los productos: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
};
// ver producto por tipo
const productosPorTipo = async (req, res) => {
    try {
        let tipo = req.params.tipo;
        let productos = await Producto.find({ tipo: tipo });
        console.log(productos);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: productos
        });
    } catch (err) {
        console.error("Error al obtener los productos: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
}

// ver productos por nombre
const productosPorNombre = async (req, res) => {
    try {
        let nombre = req.params.nombre;
        let productos = await Producto.find({ nombre: nombre });
        console.log(productos);  // Agregar este console.log para ver si la consulta devuelve algo
        return res.status(200).json({
            response: productos
        });
    } catch (err) {
        console.error("Error al obtener los productos: ", err);  // Agregar log para ver el error
        return res.status(500).json({
            response: err
        });
    }
}

export { allProductos, productosPorTipo, productosPorNombre };
