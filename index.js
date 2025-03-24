"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coche_1 = require("./clases/coche");
const miCoche = new coche_1.Coche("BMW", "serie 1", 2.0, coche_1.TipoCombustible.Gasoil, 5, 100, 310);
miCoche.metodoMostrarDatos();
miCoche.metodoAcelerar(20);
miCoche.metodoDesacelerar(50);
miCoche.metodoFrenar();
