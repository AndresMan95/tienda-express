import 'dotenv/config'; // sin '.js'
import '../../config/database.js'; // conexión a la BD
import Producto from '../../models/Producto.js';
import mongoose from 'mongoose';

let productos = [];

const marcas = ['Marca A', 'Marca B', 'Marca C', 'Marca D'];
const tipos = ['Electrónica', 'Ropa', 'Alimentos', 'Juguetes'];

// Generar 100 productos
for (let i = 0; i < 100; i++) {
    productos.push({
        nombre: `Producto ${i + 1}`, // Si prefieres empezar en 1
        marca: marcas[Math.floor(Math.random() * marcas.length)],
        tipo: tipos[Math.floor(Math.random() * tipos.length)],
        precio: Math.floor(Math.random() * 1000) + 1000, // Precios entre 1000 y 2000
    });
}

// Insertar productos en la BD
const cargarProductos = async () => {
    try {
        await Producto.insertMany(productos);
        console.log('Productos insertados con éxito');
    } catch (err) {
        console.error('Error al insertar productos:', err);
    } finally {
        mongoose.connection.close(); // Asegurarse de cerrar la conexión
    }
};

cargarProductos();
