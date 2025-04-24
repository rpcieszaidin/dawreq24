export class Tabla {
    #celdas;
    #ui;
    constructor(celdas = 5, ui = null) {
        this.#celdas = celdas;
        this.#ui = ui;
    }
    get celdas() {
        return this.#celdas;
    }
    set celdas(celdas) {
        this.#celdas = celdas;
    }

    render(){
        this.#ui(this.#celdas);
    }
}