const validasiFormPesan = () => {
  // const btnPesan = document.getElementById("buatPesan");
  const salamNow = document.getElementById("now");

  const preview = document.getElementById("preview");

  if (preview) {
    // Nama
    if (localStorage.getItem("nama")) {
      namaPrev.innerHTML = `Nama saya ${localStorage.getItem("nama")}`;
    }
    // NIM
    if (localStorage.getItem("nim")) {
      nimPrev.innerHTML = `(${localStorage.getItem("nim")}), dari`;
    }
    // Kelas
    if (localStorage.getItem("kelas")) {
      kelasPrev.innerHTML = `Kelas ${localStorage.getItem("kelas")}.`;
    }

    // Jurusan
    jurusan.addEventListener("keyup", function () {
      localStorage.setItem("jurusan", jurusan.value);
      jurusanPrev.innerHTML = `jurusan ${jurusan.value},`;
    });

    // Prodi
    prodi.addEventListener("keyup", function () {
      localStorage.setItem("prodi", prodi.value);
      prodiPrev.innerHTML = `prodi. ${prodi.value},`;
    });

    // Jenis Kelamin
    if (pria.checked) {
      localStorage.setItem("jk", "pria");
      jkPrev.innerHTML = "Mner.";
    }
    pria.addEventListener("change", function () {
      localStorage.setItem("jk", "pria");
      jkPrev.innerHTML = "Mner.";
    });
    wanita.addEventListener("change", function () {
      localStorage.setItem("jk", "wanita");
      jkPrev.innerHTML = "Enci.";
    });

    // Gunakan option
    // option 1
    option1.addEventListener("change", function () {
      if (option1.checked) {
        if (pria.checked) {
          jkPrev.innerHTML = "Mner,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
        if (wanita.checked) {
          jkPrev.innerHTML = "Enci,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
      } else {
        if (pria.checked) {
          jkPrev.innerHTML = "Mner.";
          option1Prev.innerHTML = "";
        }
        if (wanita.checked) {
          jkPrev.innerHTML = "Enci.";
          option1Prev.innerHTML = "";
        }
      }
    });

    // Salam
    localStorage.setItem("salam", salamNow.value);
    salamPrev.innerHTML = salamNow.value;

    salam.addEventListener("change", function () {
      const index = salam.selectedIndex;
      const options = salam.options;
      const key = "salam";
      if (index == 0) {
        localStorage.setItem(key, salamNow.value);
        salamPrev.innerHTML = salamNow.value;
      } else if (index == 1) {
        localStorage.setItem(key, options[index].text);
        salamPrev.innerHTML = options[index].text;
      } else if (index == 2) {
        localStorage.setItem(key, options[index].text);
        salamPrev.innerHTML = options[index].text;
      } else if (index == 3) {
        localStorage.setItem(key, options[index].text);
        salamPrev.innerHTML = options[index].text;
      } else if (index == 4) {
        localStorage.setItem(key, options[index].text);
        salamPrev.innerHTML = options[index].text;
      } else if (index == 5) {
        salamPrev.innerHTML = "";
        localStorage.setItem(key, customSalam.value);
        customSalam.addEventListener("keyup", function () {
          localStorage.setItem(key, customSalam.value);
          salamPrev.innerHTML = customSalam.value;
        });
      }
    });

    // Tujuan
    tujuan.addEventListener("keyup", function () {
      localStorage.setItem("tujuan", tujuan.value);
      tujuanPrev.innerHTML = `<br /><br />${tujuan.value}.`;
    });

    // Pertanyaan
    pertanyaan.addEventListener("keyup", function () {
      localStorage.setItem("pertanyaan", pertanyaan.value);
      pertaPrev.innerHTML = `<br />${pertanyaan.value}.`;
    });

    // Ucapan
    ucapan.addEventListener("keyup", function () {
      localStorage.setItem("penutup", ucapan.value);
      penutupPrev.innerHTML = `<br /><br />${ucapan.value}.`;
    });

    // Copy teks
    copy.addEventListener("click", function () {
      notif.classList.remove("closed");
      const final = preview.innerText;
      navigator.clipboard.writeText(final).then(
        function () {
          notif.innerHTML = "Teks berhasil dicopy!";
          setTimeout(function () {
            notif.classList.add("closed");
          }, 2000);
          setTimeout(function () {
            notif.classList.remove("closed");
            notif.innerHTML = "";
          }, 3600);
        },
        function () {
          /* clipboard write failed */
          alert("tidak berhasil dicopy");
        }
      );
    });

    // Save ke history
    // save.addEventListener("click", function () {
    //   if (localStorage.getItem("jmlPesan")) {
    //     let jmlPesan = localStorage.getItem("jmlPesan");
    //     let total = parseInt(jmlPesan) + 1;
    //     localStorage.setItem("jmlPesan", total);
    //     let idPesan = `history${total}`;
    //     localStorage.setItem(idPesan, preview.innerText);
    //   } else {
    //     localStorage.setItem("jmlPesan", 0);
    //     let jmlPesan = localStorage.getItem("jmlPesan");
    //     let total = parseInt(jmlPesan) + 1;
    //     // console.log("Jumlah pesan baru dibuat");
    //     // console.log(total);
    //     localStorage.setItem("jmlPesan", total);
    //     let idPesan = `history${total}`;
    //     localStorage.setItem(idPesan, preview.innerText);
    //   }

    //   notif.innerHTML =
    //     "Teks berhasil disimpan! Anda bisa melihatnya kembali di menu Profil bagian History";
    //   setTimeout(function () {
    //     notif.classList.add("closed");
    //   }, 4000);
    //   setTimeout(function () {
    //     notif.classList.remove("closed");
    //     notif.innerHTML = "";
    //   }, 5600);
    // });

    //   btnPesan.addEventListener("click", function () {
    //     // Salam pembuka
    //     const index = salam.selectedIndex;
    //     const options = salam.options;
    //     const key = "salam";

    //     if (index == 0) {
    //       alert(salamNow.value);
    //       localStorage.setItem(key, salamNow.value);
    //     } else if (index == 1) {
    //       alert(options[index].text);
    //       localStorage.setItem(key, options[index].text);
    //     } else if (index == 2) {
    //       alert(options[index].text);
    //       localStorage.setItem(key, options[index].text);
    //     } else if (index == 3) {
    //       alert(options[index].text);
    //       localStorage.setItem(key, options[index].text);
    //     } else if (index == 4) {
    //       alert(options[index].text);
    //       localStorage.setItem(key, options[index].text);
    //     } else if (index == 5) {
    //       alert(customSalam.value);
    //       localStorage.setItem(key, customSalam.value);
    //     }
    //   });
  }
};

export default validasiFormPesan;
