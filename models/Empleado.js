import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true }
});

const Empleado = mongoose.model('Empleado', empleadoSchema);
export default Empleado;