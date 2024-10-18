import 'dotenv/config.js';
import '../../config/database.js';
import Empleado from '../../models/Empleado.js';

let empleados = [
    {nombre: "Empleado 1", cargo: "Gerente", salario: 5000},
    {nombre: "Empleado 2", cargo: "Cajero", salario: 2500},
    {nombre: "Empleado 3", cargo: "Repartidor", salario: 2000},
    {nombre: "Empleado 4", cargo: "Vendedor", salario: 1800},
    {nombre: "Empleado 5", cargo: "Supervisor", salario: 3500},
    {nombre: "Empleado 6", cargo: "Gerente", salario: 5000},
    {nombre: "Empleado 7", cargo: "Cajero", salario: 2500},
    {nombre: "Empleado 8", cargo: "Repartidor", salario: 2000},
    {nombre: "Empleado 9", cargo: "Vendedor", salario: 1800},
    {nombre: "Empleado 10", cargo: "Supervisor", salario: 3500},
    {nombre: "Empleado 11", cargo: "Cajero", salario: 2500},
    {nombre: "Empleado 12", cargo: "Repartidor", salario: 2000},
    {nombre: "Empleado 13", cargo: "Vendedor", salario: 1800},
    {nombre: "Empleado 14", cargo: "Supervisor", salario: 3500},
    {nombre: "Empleado 15", cargo: "Cajero", salario: 2500}
];

Empleado.insertMany(empleados);