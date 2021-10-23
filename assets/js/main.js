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
import mainFunction from "./module/mainFunction.js";

mainFunction();

formAwal();
validasiFormAwal();

formPesan();
fakultas();
validasiFormPesan();

formProfil();

// +===========================================================+

// Versi tools
version.innerHTML = "Beta 2.0";

// Title
title.innerHTML = "E-tika Chat Dosen";

// ================================================
// Testing

var str = "your long string with many words. anjay mabar";
var wordCount = str.match(/(\w+)/g).length;

// for (let i = 0; i < wordCount; i++) {
//   if (str.split(" ")[i] == "anjay") {
//     console.log(`kata yang terpilih adalah : ${str.split(" ")[i]}`);
//     break;
//   }
//   console.log(str.split(" ")[i]);
// }

// ================================================
