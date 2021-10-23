const validasiFormAwal = () => {
  // Validasi Form Awal
  const register = document.getElementById("register");

  if (register) {
    /*+=====================================================+*/
    // Submit button
    btnSubmit.addEventListener("click", function () {
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
        if (nim.value === localStorage.getItem("nim")) {
          swalWithBootstrapButtons.fire({
            icon: "warning",
            title: "Oops...",
            text: "Data yang Anda inputkan sudah ada!",
          });
        } else {
          Swal.fire({
            title: "Just info",
            text: "Data Anda akan tersimpan di local storage, jika Anda melakukan hapus data browser, maka semua data akan ikut terhapus.",
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
                title: "Berhasil!",
                icon: "success",
                confirmButtonColor: "#3085d6",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.replace("index.html");
                } else if (result.dismiss === Swal.DismissReason.backdrop) {
                  window.location.replace("index.html");
                }
              });
            }
          });
        }
      }
    });
    /*-=====================================================-*/
  }
};

export default validasiFormAwal;
