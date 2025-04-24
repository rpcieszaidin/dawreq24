var total = 0;

function sumar() {
    total++;
    actualizar2();
}

function restar() {
    total--;
    actualizar2();
}

function actualizar() {
    document.getElementById("display").innerHTML = total;

    let contenido = "<table style='border:1px solid black'>";
    for (let fila = 0; fila < total; fila++) {
        contenido = contenido + "<tr>";
        for (let columna = 0; columna < total; columna++) {
            contenido = contenido + "<td>" + fila + "," + columna + "</td>";
        }
        contenido = contenido + "</tr>";
    }
    contenido = contenido + "</table>";
    document.getElementById("tabla").innerHTML = contenido;
}

function actualizar2() {
    document.getElementById("display").innerHTML = total;
    let contenedor = document.getElementById("tabla");
    contenedor.innerHTML = "";

    let tabla = document.createElement("table");
    for(let fila = 0; fila < total; fila++){
        let tr = document.createElement("tr");

        for(let columna = 0; columna < total; columna++){
            let td = document.createElement("td");
            td.innerHTML = fila + ", "+ columna;
            tr.appendChild(td);
            td.classList.add("celda");
        }
        tabla.appendChild(tr);
    }
    contenedor.appendChild(tabla);
}


document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);