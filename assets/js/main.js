/*
|
|    Main Script
|
**/

// Module

import formAwal from "./module/formAwal.js";
import validasiFormAwal from "./module/validasiFormAwal.js";
import formPesan from "./module/formPesan.js";
import validasiFormPesan from "./module/validasiFormPesan.js";
import formProfil from "./module/formProfil.js";
import fakultas from "./module/fakultas.js";

formAwal();
validasiFormAwal();

formPesan();
fakultas();
validasiFormPesan();

formProfil();

// +===========================================================+

// Versi tools
version.innerHTML = "Beta 1.7";

// Title
title.innerHTML = "E-tika Chat Dosen";

// Base URL

// const total = localStorage.getItem("jmlPesan");
// const container = document.getElementById("history");
// for (let i = 1; i <= total; i++) {
//   let pesan = `history${i}`;
//   console.log(localStorage.getItem(pesan));
//   const textArea = document.createElement("textarea");
//   const btnCopy = document.createElement("button");
//   textArea.className = "form-control";
//   textArea.rows = "3";
//   textArea.placeholder = "Pesan ...";
//   textArea.value = i;
//   btnCopy.className = "btn btn-sm btn-outline-primary mb-3";
//   btnCopy.id = i;
//   btnCopy.type = "button";
//   btnCopy.innerText = "Copy";
//   container.appendChild(textArea);
//   container.appendChild(btnCopy);
// }
