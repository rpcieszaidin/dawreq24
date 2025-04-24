import { Controller } from "./Controller.js";

export const UI = {
    tabla : null,
    containerButtons : null,
    
    setTabla: (tabla)=>{
        UI.tabla = tabla;
    },

    setContainer: (containerButtons)=>{
        UI.containerButtons = containerButtons;
    },
    
    tableDisplay: (total) => {
        document.getElementById("display").innerHTML = total;
        UI.tabla.innerHTML = "";

        let tabla = document.createElement("table");
        for (let fila = 0; fila < total; fila++) {
            let tr = document.createElement("tr");

            for (let columna = 0; columna < total; columna++) {
                let td = document.createElement("td");
                td.innerHTML = fila + ", " + columna;
                tr.appendChild(td);
                td.classList.add("celda");
            }
            tabla.appendChild(tr);
        }
        UI.tabla.appendChild(tabla);
    },


    buttonDisplay2: (a,b)=>{
        const botonmas = document.createElement("button");
        botonmas.innerHTML = "+";
        UI.containerButtons.appendChild(botonmas);
         botonmas.addEventListener("click",()=>{
             a();
         });
         const botonmenos = document.createElement("button");
         botonmenos.innerHTML = "-";
         UI.containerButtons.appendChild(botonmenos);
          botonmenos.addEventListener("click",()=>{
              b();
          });
     } 

    
}