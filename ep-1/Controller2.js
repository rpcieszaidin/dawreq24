import { Tabla } from "./Tabla.js";

export class Controller2 {

    #ui
    #tabla
    constructor(ui) {
        this.#ui = ui;
        this.#tabla = new Tabla(10, this.#ui.tableDisplay);
        this.#ui.buttonDisplay2(()=>{this.aumento()},()=>{this.decremento()});
        console.log(this.#tabla.celdas);
    }

    aumento() {
        this.#tabla.celdas = this.#tabla.celdas + 1;
        this.#tabla.render();
    }

    decremento() {
        this.#tabla.celdas = this.#tabla.celdas - 1;
        this.#tabla.render();
    }



}
