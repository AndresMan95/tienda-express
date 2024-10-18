import mongoose from 'mongoose';

const tiendaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true }
});

const Tienda = mongoose.model('Tienda', tiendaSchema);
export default Tienda;

