import { dataFak, dataJurTeknik, dataProdiElektro } from "./dataFakultas.js";

const fakultas = () => {
  const index = document.getElementById("index");

  if (index) {
    // Function
    function printData(data, select) {
      for (let j = 0; j < data.length; j++) {
        let options = document.createElement("option");
        options.text = data[j];
        select.add(options);
      }
    }

    function clearData(select) {
      for (let j = 0; j < select.length; j++) {
        select.remove(2);
      }
    }

    function optionCustom(select) {
      select.options[1].text = "Custom";
    }

    printData(dataFak, fak);

    // Custom event
    // fak.addEventListener("change", function () {
    //   const i = fak.selectedIndex;
    //   if (i == 1) {
    //     jurSelect.classList.remove("d-none");
    //     jurSelect.classList.add("d-block");
    //     customJur.classList.remove("d-none");
    //     customJur.classList.add("d-block");

    //     prodiSelect.classList.remove("d-none");
    //     prodiSelect.classList.add("d-block");
    //     customProdi.classList.remove("d-none");
    //     customProdi.classList.add("d-block");

    //     optionCustom(jur);
    //     jur.selectedIndex = 1;
    //     jur.disabled = true;
    //     optionCustom(prodi);
    //     prodi.selectedIndex = 1;
    //     prodi.disabled = true;
    //   } else {
    //     customJur.classList.remove("d-block");
    //     customJur.classList.add("d-none");
    //     customProdi.classList.remove("d-block");
    //     customProdi.classList.add("d-none");

    //     jur.selectedIndex = 0;
    //     prodi.selectedIndex = 0;
    //     jur.disabled = false;
    //     prodi.disabled = false;
    //   }
    // });

    // Select event
    fak.addEventListener("change", function () {
      const i = fak.selectedIndex;
      if (i == 0) {
        jurSelect.classList.remove("d-block");
        jurSelect.classList.add("d-none");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 1) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 2) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);
        printData(dataJurTeknik, jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 3) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 4) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 5) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 6) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 7) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      } else if (i == 8) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jur.selectedIndex = 0;
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");

        optionCustom(jur);
        clearData(jur);

        jurusanPrev.innerHTML = "";
        prodiPrev.innerHTML = "";
      }
    });

    // Jurusan
    jur.addEventListener("change", function () {
      const i = jur.selectedIndex;
      if (i == 1) {
        customJur.classList.remove("d-none");
        customJur.classList.add("d-block");

        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        prodiSelect.classList.remove("d-none");
        prodiSelect.classList.add("d-block");

        customProdi.classList.remove("d-none");
        customProdi.classList.add("d-block");
        prodi.selectedIndex = 1;
        prodi.disabled = true;

        optionCustom(prodi);

        jurusanPrev.innerHTML = "";
      } else {
        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");
      }
    });
    customJur.addEventListener("keyup", function () {
      const final = customJur.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
      customJur.value = final;
      setData("jurusan", customJur.value);
      jurusanPrev.innerHTML = `jurusan ${customJur.value},`;
    });

    if (getData("jurusan")) {
      jurusanPrev.innerHTML = `jurusan ${getData("jurusan")},`;
    }
    jur.addEventListener("change", function () {
      const i = jur.selectedIndex;
      const opt = jur.options;
      if (i == 0) {
        prodiSelect.classList.remove("d-block");
        prodiSelect.classList.add("d-none");

        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");
        prodi.selectedIndex = 1;

        jurusanPrev.innerHTML = "";
      } else if (i == 2) {
        prodiSelect.classList.remove("d-none");
        prodiSelect.classList.add("d-block");

        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");
        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");

        prodi.selectedIndex = 0;
        prodi.disabled = false;

        optionCustom(prodi);
        clearData(prodi);
        printData(dataProdiElektro, prodi);
        setData("jurusan", opt[i].text);
        jurusanPrev.innerHTML = `jurusan ${opt[i].text},`;
      } else if (i == 3) {
        prodiSelect.classList.remove("d-none");
        prodiSelect.classList.add("d-block");

        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");
        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");

        prodi.selectedIndex = 0;
        prodi.disabled = false;

        optionCustom(prodi);
        clearData(prodi);
        setData("jurusan", opt[i].text);
        jurusanPrev.innerHTML = `jurusan ${opt[i].text},`;
      } else if (i == 4) {
        prodiSelect.classList.remove("d-none");
        prodiSelect.classList.add("d-block");

        customJur.classList.remove("d-block");
        customJur.classList.add("d-none");
        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");

        prodi.selectedIndex = 0;
        prodi.disabled = false;

        optionCustom(prodi);
        clearData(prodi);
        setData("jurusan", opt[i].text);
        jurusanPrev.innerHTML = `jurusan ${opt[i].text},`;
      }
    });

    if (getData("prodi")) {
      prodiPrev.innerHTML = `prodi. ${getData("prodi")},`;
    }
    prodi.addEventListener("change", function () {
      const i = prodi.selectedIndex;
      if (i == 1) {
        jurSelect.classList.remove("d-none");
        jurSelect.classList.add("d-block");

        customProdi.classList.remove("d-none");
        customProdi.classList.add("d-block");

        prodiPrev.innerHTML = "";
      } else {
        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");
      }
    });
    customProdi.addEventListener("keyup", function () {
      const final = customProdi.value.replace(
        /(^\w{1})|(\s+\w{1})/g,
        (letter) => letter.toUpperCase()
      );
      customProdi.value = final;
      setData("prodi", customProdi.value);
      prodiPrev.innerHTML = `prodi. ${customProdi.value},`;
    });

    prodi.addEventListener("change", function () {
      const i = prodi.selectedIndex;
      const opt = prodi.options;
      if (i == 0) {
        customProdi.classList.remove("d-block");
        customProdi.classList.add("d-none");

        prodiPrev.innerHTML = "";
      } else if (i == 2) {
        setData("prodi", opt[i].text);
        prodiPrev.innerHTML = `prodi. ${opt[i].text},`;
      } else if (i == 3) {
        setData("prodi", opt[i].text);
        prodiPrev.innerHTML = `prodi. ${opt[i].text},`;
      }
    });
  }
};

export default fakultas;
