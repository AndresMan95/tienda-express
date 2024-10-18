import 'dotenv/config.js';
import '../../config/database.js';
import Tienda from '../../models/Tienda.js';

let tiendas = [
    {nombre:"Tienda 1", direccion:"Calle 1", telefono:12345678},
    {nombre:"Tienda 2", direccion:"Calle 2", telefono:12345678},
    {nombre:"Tienda 3", direccion:"Calle 3", telefono:12345678},
    {nombre:"Tienda 4", direccion:"Calle 4", telefono:12345678},
    {nombre:"Tienda 5", direccion:"Calle 5", telefono:12345678},
    {nombre:"Tienda 6", direccion:"Calle 6", telefono:12345678}
];

Tienda.insertMany(tiendas);
