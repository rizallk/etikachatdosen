const formAwal = () => {
  const register = document.getElementById("register");

  if (register) {
    /*+=====================================================+*/
    // Field Nama
    nama.maxLength = "70";
    nama.addEventListener("focus", function () {
      suggestName.classList.remove("d-none");
      suggestName.classList.add("d-block");
    });
    nama.addEventListener("blur", function () {
      suggestName.classList.remove("d-block");
      suggestName.classList.add("d-none");
    });
    nama.addEventListener("keyup", function () {
      const finalNama = nama.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
      nama.value = finalNama;
    });
    /*-=====================================================-*/

    /*+=====================================================+*/
    // Field NIM
    nim.maxLength = "16";
    nim.addEventListener("focus", function () {
      suggestNIM.classList.remove("d-none");
      suggestNIM.classList.add("d-block");
    });
    nim.addEventListener("blur", function () {
      suggestNIM.classList.remove("d-block");
      suggestNIM.classList.add("d-none");
    });
    /*-=====================================================-*/

    /*+=====================================================+*/
    // Field Kelas
    kelas.maxLength = "1";
    kelas.addEventListener("focus", function () {
      suggestKelas.classList.remove("d-none");
      suggestKelas.classList.add("d-block");
    });
    kelas.addEventListener("blur", function () {
      suggestKelas.classList.remove("d-block");
      suggestKelas.classList.add("d-none");
    });
    kelas.addEventListener("keyup", function () {
      kelas.value = kelas.value.toUpperCase();
    });
    /*-=====================================================-*/
  }
};

export default formAwal;
