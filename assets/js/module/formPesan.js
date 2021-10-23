const formPesan = () => {
  const index = document.getElementById("index");

  if (index) {
    // Jenis kelamin penerima
    pria.addEventListener("change", function () {
      if (pria.checked) {
        priaRadio.classList.remove("d-block");
        priaRadio.classList.add("d-none");

        mner.checked = true;
        enci.checked = false;
        if (mner) {
          setData("penerima", "Mner.");
          jkPrev.innerHTML = getData("penerima");
          salamPrev.innerHTML = getData("salam");
          sp1.innerHTML = "Apakah Mner ada waktu untuk minggu ini ?";
          sp2.innerHTML = "Apakah Mner memiliki waktu ?";
          su1.innerHTML = "Terima kasih sebelumnya Mner";
          su2.innerHTML = "Terima kasih atas waktunya Mner";
        }

        priaSelect.classList.remove("d-none");
        priaSelect.classList.add("d-block");

        wanitaRadio.classList.remove("d-none");
        wanitaRadio.classList.add("d-block");

        wanitaSelect.classList.remove("d-block");
        wanitaSelect.classList.add("d-none");

        cp.classList.remove("d-block");
        cp.classList.add("d-none");

        customJk.value = "";
      }
    });
    wanita.addEventListener("change", function () {
      if (wanita.checked) {
        wanitaRadio.classList.remove("d-block");
        wanitaRadio.classList.add("d-none");

        enci.checked = true;
        mner.checked = false;
        if (enci) {
          setData("penerima", "Enci.");
          jkPrev.innerHTML = getData("penerima");
          salamPrev.innerHTML = getData("salam");
          sp1.innerHTML = "Apakah Enci ada waktu untuk minggu ini ?";
          sp2.innerHTML = "Apakah Enci memiliki waktu ?";
          su1.innerHTML = "Terima kasih sebelumnya Enci";
          su2.innerHTML = "Terima kasih atas waktunya Enci";
        }

        wanitaSelect.classList.remove("d-none");
        wanitaSelect.classList.add("d-block");

        priaRadio.classList.remove("d-none");
        priaRadio.classList.add("d-block");

        priaSelect.classList.remove("d-block");
        priaSelect.classList.add("d-none");

        cp.classList.remove("d-block");
        cp.classList.add("d-none");

        customJk.value = "";
      }
    });
    customJk.addEventListener("change", function () {
      jkPrev.innerHTML = "";
      mner.checked = false;
      bapak.checked = false;
      enci.checked = false;
      ibu.checked = false;
      sp1.innerHTML = `Apakah ada waktu untuk minggu ini ?`;
      sp2.innerHTML = `Apakah memiliki waktu ?`;
      su1.innerHTML = `Terima kasih sebelumnya`;
      su2.innerHTML = `Terima kasih atas waktunya`;
      salamPrev.innerHTML = getData("salam") + ".";

      priaRadio.classList.remove("d-none");
      priaRadio.classList.add("d-block");

      wanitaRadio.classList.remove("d-none");
      wanitaRadio.classList.add("d-block");

      priaSelect.classList.remove("d-block");
      priaSelect.classList.add("d-none");

      wanitaSelect.classList.remove("d-block");
      wanitaSelect.classList.add("d-none");

      cp.classList.remove("d-none");
      cp.classList.add("d-block");
    });

    // Salam Now
    function text(w) {
      const text = "Gunakan waktu saat ini ";
      if (w >= 0 && w <= 9) {
        return (salamNow.innerHTML = text + "(Selamat pagi)");
      }
      if (w >= 10 && w <= 14) {
        return (salamNow.innerHTML = text + "(Selamat siang)");
      }
      if (w >= 15 && w <= 17) {
        return (salamNow.innerHTML = text + "(Selamat sore)");
      }
      if (w >= 18 && w <= 23) {
        return (salamNow.innerHTML = text + "(Selamat malam)");
      }
      return (salamNow.innerHTML = "tidak diketahui");
    }

    function value(w) {
      if (w >= 0 && w <= 9) {
        return (salamNow.value = "Selamat pagi");
      }
      if (w >= 10 && w <= 14) {
        return (salamNow.value = "Selamat siang");
      }
      if (w >= 15 && w <= 17) {
        return (salamNow.value = "Selamat sore");
      }
      if (w >= 18 && w <= 23) {
        return (salamNow.value = "Selamat malam");
      }
      return (salamNow.value = "tidak diketahui");
    }

    var d = new Date();
    text(d.getHours());
    value(d.getHours());

    // Salam
    // cs = custom salam
    cs.maxLength = "60";
    salam.addEventListener("change", function () {
      if (salam.selectedIndex == 5) {
        cs.classList.remove("d-none");
        cs.classList.add("d-block");
      } else {
        cs.classList.remove("d-block");
        cs.classList.add("d-none");
      }
    });

    // Field Tujuan
    tujuan.addEventListener("keyup", function () {
      tujuan.value =
        tujuan.value.charAt(0).toUpperCase() + tujuan.value.slice(1);
      if (tujuan.value) {
        suggestTujuan.classList.remove("d-block");
        suggestTujuan.classList.add("d-none");
      } else {
        suggestTujuan.classList.remove("d-none");
        suggestTujuan.classList.add("d-block");
      }
    });
    st1.innerHTML = "Saya ingin bertanya";
    st1.addEventListener("click", function () {
      tujuan.value = st1.innerHTML;
      setData("tujuan", tujuan.value);
      tujuan.value = `${getData("tujuan")} ...`;
      suggestTujuan.classList.remove("d-block");
      suggestTujuan.classList.add("d-none");
      tujuanPrev.innerHTML = "<br /><br />Saya ingin bertanya.";
    });
    st2.innerHTML = "Saya ingin mengajukan";
    st2.addEventListener("click", function () {
      tujuan.value = st2.innerHTML;
      setData("tujuan", tujuan.value);
      tujuan.value = `${getData("tujuan")} ...`;
      suggestTujuan.classList.remove("d-block");
      suggestTujuan.classList.add("d-none");
      tujuanPrev.innerHTML = "<br /><br />Saya ingin mengajukan.";
    });

    // Field Pertanyaan
    pertanyaan.addEventListener("keyup", function () {
      pertanyaan.value =
        pertanyaan.value.charAt(0).toUpperCase() + pertanyaan.value.slice(1);
      if (pertanyaan.value) {
        suggestPerta.classList.remove("d-block");
        suggestPerta.classList.add("d-none");
      } else {
        suggestPerta.classList.remove("d-none");
        suggestPerta.classList.add("d-block");
      }
    });
    sp1.innerHTML = "Apakah ada waktu untuk minggu ini ?";
    sp1.addEventListener("click", function () {
      pertanyaan.value = sp1.innerHTML;
      setData("pertanyaan", pertanyaan.value);
      pertanyaan.value = getData("pertanyaan");
      suggestPerta.classList.remove("d-block");
      suggestPerta.classList.add("d-none");
      pertaPrev.innerHTML = `<br />${pertanyaan.value}`;
    });
    sp2.innerHTML = "Apakah memiliki waktu ?";
    sp2.addEventListener("click", function () {
      pertanyaan.value = sp2.innerHTML;
      setData("pertanyaan", pertanyaan.value);
      pertanyaan.value = getData("pertanyaan");
      suggestPerta.classList.remove("d-block");
      suggestPerta.classList.add("d-none");
      pertaPrev.innerHTML = `<br />${pertanyaan.value}`;
    });

    // Field Ucapan
    ucapan.addEventListener("keyup", function () {
      if (ucapan.value) {
        suggestUcap.classList.remove("d-block");
        suggestUcap.classList.add("d-none");
      } else {
        suggestUcap.classList.remove("d-none");
        suggestUcap.classList.add("d-block");
      }
    });
    su1.innerHTML = "Terima kasih sebelumnya";
    su1.addEventListener("click", function () {
      ucapan.value = su1.innerHTML;
      setData("ucapan", ucapan.value);
      ucapan.value = getData("ucapan");
      suggestUcap.classList.remove("d-block");
      suggestUcap.classList.add("d-none");
      penutupPrev.innerHTML = `<br /><br />${ucapan.value}.`;
    });
    su2.innerHTML = "Terima kasih atas waktunya";
    su2.addEventListener("click", function () {
      ucapan.value = su2.innerHTML;
      setData("ucapan", ucapan.value);
      ucapan.value = getData("ucapan");
      suggestUcap.classList.remove("d-block");
      suggestUcap.classList.add("d-none");
      penutupPrev.innerHTML = `<br /><br />${ucapan.value}.`;
    });

    // Optional
    // Fakultas, Jurusan, Prodi. Select
    // Liat di script Fakultas.js

    // Custom
    // Field Jurusan
    // jurusan.maxLength = "40";
    // jurusan.addEventListener("focus", function () {
    //   suggestJurusan.classList.remove("d-none");
    //   suggestJurusan.classList.add("d-block");
    // });
    // jurusan.addEventListener("blur", function () {
    //   suggestJurusan.classList.remove("d-block");
    //   suggestJurusan.classList.add("d-none");
    // });
    // jurusan.addEventListener("keyup", function () {
    //   const finalJurusan = jurusan.value.replace(
    //     /(^\w{1})|(\s+\w{1})/g,
    //     (letter) => letter.toUpperCase()
    //   );
    //   jurusan.value = finalJurusan;
    // });

    // // Field Prodi
    // prodi.maxLength = "40";
    // prodi.addEventListener("focus", function () {
    //   suggestProdi.classList.remove("d-none");
    //   suggestProdi.classList.add("d-block");
    // });
    // prodi.addEventListener("blur", function () {
    //   suggestProdi.classList.remove("d-block");
    //   suggestProdi.classList.add("d-none");
    // });
    // prodi.addEventListener("keyup", function () {
    //   const finalProdi = prodi.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    //     letter.toUpperCase()
    //   );
    //   prodi.value = finalProdi;
    // });
  }
};

export default formPesan;
