import { Tabla } from "./Tabla.js";

export class Controller {

    #tabla
    constructor(tabla) {
        this.#tabla = tabla;
    }

    aumento() {
        this.#tabla.celdas = this.#tabla.celdas + 1 ;
        this.#tabla.render();
    }

    decremento() {
        this.#tabla.celdas = this.#tabla.celdas - 1 ;
        this.#tabla.render();
    }

    

}

