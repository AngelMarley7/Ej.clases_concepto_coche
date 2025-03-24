export enum TipoCombustible {
    Gasolina,
    Bioetanol,
    Gasoil,
    Biodiesel,
    GasNatural,
  }
  
  export class Coche {
    marca: string;
    modelo: string;
    motor: number;
    tipoCombustible: TipoCombustible;
    numeroDePuertas: number;
    velocidadActual: number;
    velocidadMaxima: number;
  
    constructor(
      marca: string,
      modelo: string,
      motor: number,
      tipoCombustible: TipoCombustible,
      numeroDePuertas: number,
      velocidadActual: number,
      velocidadMaxima: number
    ) {
      this.marca = marca;
      this.modelo = modelo;
      this.motor = motor;
      this.tipoCombustible = tipoCombustible;
      this.numeroDePuertas = numeroDePuertas;
      this.velocidadActual = velocidadActual;
      this.velocidadMaxima = velocidadMaxima;
    }

    metodoAcelerar(cantidad: number): void{
        this.velocidadActual = this.velocidadActual + cantidad;
        console.log("Velocidad actual: ", this.velocidadActual, "km/h");
    }

    metodoDesacelerar(cantidad: number): void{
        this.velocidadActual = this.velocidadActual - cantidad;
        console.log("El coche ha reducido su velocidad: ", this.velocidadActual, "km/h");
    }

    metodoFrenar(): void{
        this.velocidadActual = 0;
        console.log("El coche ha frenado complettamente: ", this.velocidadActual, "km/h");
    }

    metodoMostrarDatos(): void {
        console.log("🚗 Datos del coche:");
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Motor:", this.motor, "L");
        console.log("Combustible:", TipoCombustible[this.tipoCombustible]);
        console.log("Puertas:", this.numeroDePuertas);
        console.log("Velocidad actual:", this.velocidadActual, "km/h");
        console.log("Velocidad máxima:", this.velocidadMaxima, "km/h");
      }
      
  }
  