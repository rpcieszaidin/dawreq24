"use strict";
import { UI } from "./ui.js"
import { Controller2 } from "./Controller2.js";

UI.setTabla(document.getElementById("tabla4"));
UI.setContainer(document.getElementById("algo"));

const controller = new Controller2(UI);
