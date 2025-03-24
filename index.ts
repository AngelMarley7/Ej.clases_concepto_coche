import { Coche, TipoCombustible } from "./clases/coche";

const miCoche = new Coche(
    "BMW",
    "serie 1",
    2.0,
    TipoCombustible.Gasoil,
    5,
    100,
    310
);

miCoche.metodoMostrarDatos();

miCoche.metodoAcelerar(20);
miCoche.metodoDesacelerar(50);
miCoche.metodoFrenar();