const validasiFormPesan = () => {
  const index = document.getElementById("index");

  if (index) {
    /*+=====================================================+*/
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
    // jurusan.addEventListener("keyup", function () {
    //   localStorage.setItem("jurusan", jurusan.value);
    //   jurusanPrev.innerHTML = `jurusan ${jurusan.value},`;
    // });

    // // Prodi
    // prodi.addEventListener("keyup", function () {
    //   localStorage.setItem("prodi", prodi.value);
    //   prodiPrev.innerHTML = `prodi. ${prodi.value},`;
    // });

    // Jenis Kelamin penerima
    // Pria
    mner.addEventListener("change", function () {
      jkPrev.innerHTML = "Mner.";
    });
    bapak.addEventListener("change", function () {
      jkPrev.innerHTML = "Pak.";
    });
    // Wanita
    enci.addEventListener("change", function () {
      jkPrev.innerHTML = "Enci.";
    });
    ibu.addEventListener("change", function () {
      jkPrev.innerHTML = "Bu.";
    });
    // Custom penerima
    // cp = custom penerima
    cp.addEventListener("keyup", function () {
      cp.value = cp.value.charAt(0).toUpperCase() + cp.value.slice(1);
      jkPrev.innerHTML = cp.value + ".";
      salamPrev.innerHTML = localStorage.getItem("salam");
    });

    // Gunakan option
    // option 1
    option1.addEventListener("change", function () {
      if (option1.checked) {
        if (mner.checked) {
          jkPrev.innerHTML = "Mner,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
        if (bapak.checked) {
          jkPrev.innerHTML = "Pak,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
        if (enci.checked) {
          jkPrev.innerHTML = "Enci,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
        if (ibu.checked) {
          jkPrev.innerHTML = "Bu,";
          option1Prev.innerHTML = "mohon maaf menganggu waktunya.";
        }
        option1Prev.innerHTML = "Mohon maaf menganggu waktunya.";
      } else {
        if (mner.checked) {
          jkPrev.innerHTML = "Mner,";
          option1Prev.innerHTML = "";
        }
        if (bapak.checked) {
          jkPrev.innerHTML = "Pak,";
          option1Prev.innerHTML = "";
        }
        if (enci.checked) {
          jkPrev.innerHTML = "Enci,";
          option1Prev.innerHTML = "";
        }
        if (ibu.checked) {
          jkPrev.innerHTML = "Bu,";
          option1Prev.innerHTML = "";
        }
        option1Prev.innerHTML = "";
      }
    });

    // Salam
    localStorage.setItem("salam", salamNow.value);
    salamPrev.innerHTML = salamNow.value + ".";

    salam.addEventListener("change", function () {
      const i = salam.selectedIndex;
      const opt = salam.options;
      const key = "salam";
      if (i == 0) {
        cs.value = "";
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = salamNow.value;
          localStorage.setItem(key, salamNow.value);
        } else {
          salamPrev.innerHTML = salamNow.value + ".";
          localStorage.setItem(key, salamNow.value);
        }
      } else if (i == 1) {
        cs.value = "";
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text;
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ".";
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 2) {
        cs.value = "";
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text;
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ".";
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 3) {
        cs.value = "";
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text;
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ".";
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 4) {
        cs.value = "";
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text;
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ".";
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 5) {
        salamPrev.innerHTML = "";
        localStorage.setItem(key, cs.value);
        cs.addEventListener("keyup", function () {
          cs.value = cs.value.charAt(0).toUpperCase() + cs.value.slice(1);
          if (cs.value.charAt(cs.value.length - 1) == ".") {
            salamPrev.innerHTML = cs.value;
            localStorage.setItem(key, cs.value);
          } else if (cs.value.charAt(cs.value.length - 1) == "?") {
            salamPrev.innerHTML = cs.value;
            localStorage.setItem(key, cs.value);
          } else {
            if (
              mner.checked ||
              bapak.checked ||
              enci.checked ||
              ibu.checked ||
              cp.value
            ) {
              salamPrev.innerHTML = cs.value;
              localStorage.setItem(key, cs.value);
            } else {
              salamPrev.innerHTML = cs.value + ".";
              localStorage.setItem(key, cs.value);
            }
          }
        });
      }
    });

    // Tujuan
    tujuan.addEventListener("keyup", function () {
      localStorage.setItem("tujuan", tujuan.value);
      if (tujuan.value.charAt(tujuan.value.length - 1) == ".") {
        tujuanPrev.innerHTML = `<br /><br />${tujuan.value}`;
      } else if (tujuan.value.charAt(tujuan.value.length - 1) == "?") {
        tujuanPrev.innerHTML = `<br /><br />${tujuan.value}`;
      } else {
        tujuanPrev.innerHTML = `<br /><br />${tujuan.value}.`;
      }
    });

    // Pertanyaan
    pertanyaan.addEventListener("keyup", function () {
      localStorage.setItem("pertanyaan", pertanyaan.value);
      if (pertanyaan.value.charAt(pertanyaan.value.length - 1) == ".") {
        pertaPrev.innerHTML = `<br />${pertanyaan.value}`;
      } else if (pertanyaan.value.charAt(pertanyaan.value.length - 1) == "?") {
        pertaPrev.innerHTML = `<br />${pertanyaan.value}`;
      } else {
        pertaPrev.innerHTML = `<br />${pertanyaan.value}.`;
      }
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
    /*-=====================================================-*/
  }
};

export default validasiFormPesan;
