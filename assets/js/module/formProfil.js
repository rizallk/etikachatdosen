const formProfil = () => {
  const profil = document.getElementById("profil");

  if (profil) {
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
  }
};

export default formProfil;
