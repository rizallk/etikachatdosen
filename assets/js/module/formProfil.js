const formProfil = () => {
  const profil = document.getElementById("profil");

  if (profil) {
    // Form profil
    nama.value = localStorage.getItem("nama");
    nim.value = localStorage.getItem("nim");
    kelas.value = localStorage.getItem("kelas");

    btnEdit.addEventListener("click", function () {
      if (!nama.value) {
        Swal.fire({
          icon: "warning",
          confirmButtonColor: "#3085d6",
          title: "Oops...",
          text: "Nama harus diisi!",
        });
      } else if (!nim.value) {
        Swal.fire({
          icon: "warning",
          confirmButtonColor: "#3085d6",
          title: "Oops...",
          text: "NIM harus diisi!",
        });
      } else if (!kelas.value) {
        Swal.fire({
          icon: "warning",
          confirmButtonColor: "#3085d6",
          title: "Oops...",
          text: "Kelas harus diisi!",
        });
      } else if (
        nama.value &&
        nama.value.length <= 70 &&
        nim.value &&
        nim.value.length <= 16 &&
        kelas.value &&
        kelas.value.length <= 1
      ) {
        Swal.fire({
          title: "Apakah Anda yakin?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem("nama", nama.value);
            localStorage.setItem("nim", nim.value);
            localStorage.setItem("kelas", kelas.value);
            Swal.fire({
              icon: "success",
              confirmButtonColor: "#3085d6",
              title: "Berhasil!",
            }).then((result) => {
              if (result.isConfirmed) {
                location.reload();
              } else if (result.dismiss === Swal.DismissReason.backdrop) {
                location.reload();
              }
            });
          }
        });
      }
    });

    // History pesanmu
    const container = document.getElementById("history");
    const dataHis = JSON.parse(getData("history"));

    if (dataHis.length) {
      for (let i = 0; i < dataHis.length; i++) {
        const textArea = document.createElement("textarea");
        const btnCopy = document.createElement("button");
        const btnShare = document.createElement("button");
        const btnDel = document.createElement("button");
        const notif = document.createElement("div");
        textArea.className = "form-control";
        textArea.rows = "3";
        textArea.placeholder = "Pesan ...";
        textArea.value = dataHis[i];
        textArea.id = i;
        // ====== Salin
        btnCopy.className = "btn btn-sm btn-outline-primary mb-3";
        btnCopy.type = "button";
        btnCopy.innerText = "Salin";
        // btnCopy.id = dataHis[i];
        // ====== Bagikan
        btnShare.className = "btn btn-sm btn-outline-success mb-3";
        btnShare.type = "button";
        btnShare.innerText = "Bagikan";
        // btnShare.id = dataHis[i];
        // ====== Hapus
        btnDel.className = "btn del btn-sm btn-outline-danger mb-3";
        btnDel.type = "button";
        btnDel.innerText = "Hapus";
        // ====== Notif
        notif.id = "notif";
        notif.className = "notif mb-2";
        // ======
        container.appendChild(textArea);
        container.appendChild(notif);
        container.appendChild(btnCopy);
        container.appendChild(btnShare);
        container.appendChild(btnDel);

        // Hapus data
        btnDel.addEventListener("click", function () {
          Swal.fire({
            title: "Apakah Anda yakin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya!",
          }).then((result) => {
            if (result.isConfirmed) {
              dataHis.splice(textArea.id, 1);
              setData("history", JSON.stringify(dataHis));
              Swal.fire({
                icon: "success",
                confirmButtonColor: "#3085d6",
                title: "Berhasil!",
              }).then((result) => {
                if (result.isConfirmed) {
                  location.reload();
                } else if (result.dismiss === Swal.DismissReason.backdrop) {
                  location.reload();
                }
              });
            }
          });
        });

        // Share
        btnShare.addEventListener("click", function () {
          navigator.share({ text: textArea.value });
        });

        // Copy teks
        btnCopy.addEventListener("click", function () {
          const text = document.createElement("small");
          const br = document.createElement("br");
          text.classList.add("text-primary");
          notif.classList.remove("closed");
          const final = textArea.value;
          navigator.clipboard.writeText(final).then(
            function () {
              notif.appendChild(text);
              notif.appendChild(br);
              text.innerHTML = "Teks berhasil disalin!";
              setTimeout(function () {
                notif.classList.add("closed");
              }, 2000);
              setTimeout(function () {
                notif.classList.remove("closed");
                text.innerHTML = "";
                br.remove();
              }, 3600);
            },
            function () {
              /* clipboard write failed */
              alert("tidak berhasil dicopy");
            }
          );
        });
      }
    } else {
      container.innerHTML = "Tidak ada pesan tersimpan.";
    }

    // const obj = [
    //   {
    //     id: 1,
    //     pesan:
    //       "Selamat malam Sddfsdfdf. Nama saya Ricardo Milos (216969), dari jurusan Teknik Elektro, prodi. Teknik Informatika, Kelas S.",
    //   },
    //   {
    //     id: 2,
    //     pesan:
    //       "Selamat malam Sddfsdfdf. Nama saya Ricardo Milos (216969), dari jurusan Teknik Elektro, prodi. Teknik Informatika, Kelas S.",
    //   },
    // ];

    // console.log(obj);

    // localStorage.setItem("history", JSON.stringify(array));
    // const test = JSON.parse(getData("history"));
    // console.log(test.length);
    // test.push("hello");
    // localStorage.setItem("history", JSON.stringify(test));
    // console.log(JSON.parse(getData("history")).length);
  }
};

export default formProfil;
