const validasiFormPesan = () => {
  const index = document.getElementById('index');

  if (index) {
    /*+=====================================================+*/
    // Nama
    if (getData('nama')) {
      namaPrev.innerHTML = `Nama saya ${localStorage.getItem('nama')}`;
    }
    // NIM
    if (getData('nim')) {
      nimPrev.innerHTML = `(${localStorage.getItem('nim')}), dari`;
    }
    // Kelas
    if (getData('kelas')) {
      kelasPrev.innerHTML = `Kelas ${localStorage.getItem('kelas')}.`;
    }

    // Jenis Kelamin penerima
    // Pria
    if (getData('penerima')) {
      jkPrev.innerHTML = getData('penerima') + '.';
    }
    mner.addEventListener('change', function () {
      setData('penerima', 'Mner');
      jkPrev.innerHTML = getData('penerima') + '.';
      sp1.innerHTML = 'Apakah Mner ada waktu untuk minggu ini ?';
      sp2.innerHTML = 'Apakah Mner memiliki waktu ?';
      su1.innerHTML = 'Terima kasih sebelumnya Mner';
      su2.innerHTML = 'Terima kasih atas waktunya Mner';
    });
    bapak.addEventListener('change', function () {
      setData('penerima', 'Pak');
      jkPrev.innerHTML = getData('penerima') + '.';
      sp1.innerHTML = 'Apakah Bapak ada waktu untuk minggu ini ?';
      sp2.innerHTML = 'Apakah Bapak memiliki waktu ?';
      su1.innerHTML = 'Terima kasih sebelumnya Pak';
      su2.innerHTML = 'Terima kasih atas waktunya Pak';
    });
    // Wanita
    enci.addEventListener('change', function () {
      setData('penerima', 'Enci');
      jkPrev.innerHTML = getData('penerima') + '.';
      sp1.innerHTML = 'Apakah Enci ada waktu untuk minggu ini ?';
      sp2.innerHTML = 'Apakah Enci memiliki waktu ?';
      su1.innerHTML = 'Terima kasih sebelumnya Enci';
      su2.innerHTML = 'Terima kasih atas waktunya Enci';
    });
    ibu.addEventListener('change', function () {
      setData('penerima', 'Bu');
      jkPrev.innerHTML = getData('penerima') + '.';
      sp1.innerHTML = 'Apakah Ibu ada waktu untuk minggu ini ?';
      sp2.innerHTML = 'Apakah Ibu memiliki waktu ?';
      su1.innerHTML = 'Terima kasih sebelumnya Bu';
      su2.innerHTML = 'Terima kasih atas waktunya Bu';
    });
    // Custom penerima
    // cp = custom penerima
    cp.addEventListener('keyup', function () {
      cp.value = cp.value.charAt(0).toUpperCase() + cp.value.slice(1);
      setData('penerima', `${cp.value}`);
      jkPrev.innerHTML = getData('penerima') + '.';
      if (cp.value) {
        salamPrev.innerHTML = getData('salam') + ',';
      } else {
        salamPrev.innerHTML = getData('salam');
      }
      sp1.innerHTML = `Apakah ${getData(
        'penerima'
      )} ada waktu untuk minggu ini ?`;
      sp2.innerHTML = `Apakah ${getData('penerima')} memiliki waktu ?`;
      su1.innerHTML = `Terima kasih sebelumnya ${getData('penerima')}`;
      su2.innerHTML = `Terima kasih atas waktunya ${getData('penerima')}`;
    });

    // Gunakan option
    // option 1
    if (getData('option1')) {
      option1Prev.innerHTML = getData('option1');
    }
    option1.addEventListener('change', function () {
      const text = 'mohon maaf mengganggu waktunya.';
      if (option1.checked) {
        if (mner.checked) {
          setData('option1', text);
          jkPrev.innerHTML = 'Mner.';
          option1Prev.innerHTML = text;
        }
        if (bapak.checked) {
          setData('option1', text);
          jkPrev.innerHTML = 'Pak.';
          option1Prev.innerHTML = text;
        }
        if (enci.checked) {
          setData('option1', text);
          jkPrev.innerHTML = 'Enci.';
          option1Prev.innerHTML = text;
        }
        if (ibu.checked) {
          setData('option1', text);
          jkPrev.innerHTML = 'Bu.';
          option1Prev.innerHTML = text;
        }
        setData('option1', text.charAt(0).toUpperCase() + text.slice(1));
        option1Prev.innerHTML = text.charAt(0).toUpperCase() + text.slice(1);
      } else {
        setData('option1', '');
        if (mner.checked) {
          jkPrev.innerHTML = 'Mner.';
          option1Prev.innerHTML = '';
        }
        if (bapak.checked) {
          jkPrev.innerHTML = 'Pak.';
          option1Prev.innerHTML = '';
        }
        if (enci.checked) {
          jkPrev.innerHTML = 'Enci.';
          option1Prev.innerHTML = '';
        }
        if (ibu.checked) {
          jkPrev.innerHTML = 'Bu.';
          option1Prev.innerHTML = '';
        }
        option1Prev.innerHTML = '';
      }
    });

    // Salam
    setData('salam', salamNow.value);
    if (getData('penerima')) {
      salamPrev.innerHTML = getData('salam') + ',';
    } else {
      salamPrev.innerHTML = getData('salam') + '.';
    }

    salam.addEventListener('change', function () {
      const i = salam.selectedIndex;
      const opt = salam.options;
      const key = 'salam';
      if (i == 0) {
        cs.value = '';
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = salamNow.value + ',';
          localStorage.setItem(key, salamNow.value);
        } else {
          salamPrev.innerHTML = salamNow.value + ',';
          localStorage.setItem(key, salamNow.value);
        }
      } else if (i == 1) {
        cs.value = '';
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 2) {
        cs.value = '';
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 3) {
        cs.value = '';
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 4) {
        cs.value = '';
        if (mner.checked || bapak.checked || enci.checked || ibu.checked) {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        } else {
          salamPrev.innerHTML = opt[i].text + ',';
          localStorage.setItem(key, opt[i].text);
        }
      } else if (i == 5) {
        salamPrev.innerHTML = '';
        localStorage.setItem(key, cs.value);
        cs.addEventListener('keyup', function () {
          cs.value = cs.value.charAt(0).toUpperCase() + cs.value.slice(1);
          if (cs.value.charAt(cs.value.length - 1) == ',') {
            salamPrev.innerHTML = cs.value;
            localStorage.setItem(key, cs.value);
          } else if (cs.value.charAt(cs.value.length - 1) == '?') {
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
              salamPrev.innerHTML = cs.value + ',';
              localStorage.setItem(key, cs.value);
            } else {
              salamPrev.innerHTML = cs.value + ',';
              localStorage.setItem(key, cs.value);
            }
          }
        });
      }
    });

    // Tujuan
    if (getData('tujuan')) {
      if (getData('tujuan').charAt(getData('tujuan').length - 1) == '.') {
        tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}`;
      } else if (
        getData('tujuan').charAt(getData('tujuan').length - 1) == '?'
      ) {
        tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}`;
      } else {
        tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}.`;
      }
    }
    tujuan.addEventListener('keyup', function () {
      setData('tujuan', tujuan.value);
      if (tujuan.value == '') {
        tujuanPrev.innerHTML = '';
      } else {
        if (tujuan.value.charAt(tujuan.value.length - 1) == '.') {
          tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}`;
        } else if (tujuan.value.charAt(tujuan.value.length - 1) == '?') {
          tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}`;
        } else {
          tujuanPrev.innerHTML = `<br /><br />${getData('tujuan')}.`;
        }
      }
    });

    // Pertanyaan
    if (getData('pertanyaan')) {
      if (
        getData('pertanyaan').charAt(getData('pertanyaan').length - 1) == '.'
      ) {
        pertaPrev.innerHTML = `<br />${getData('pertanyaan')}`;
      } else if (
        getData('pertanyaan').charAt(getData('pertanyaan').length - 1) == '?'
      ) {
        pertaPrev.innerHTML = `<br />${getData('pertanyaan')}`;
      } else {
        pertaPrev.innerHTML = `<br />${getData('pertanyaan')}.`;
      }
    }
    pertanyaan.addEventListener('keyup', function () {
      setData('pertanyaan', pertanyaan.value);
      if (pertanyaan.value == '') {
        pertaPrev.innerHTML = '';
      } else {
        if (pertanyaan.value.charAt(pertanyaan.value.length - 1) == '.') {
          pertaPrev.innerHTML = `<br />${getData('pertanyaan')}`;
        } else if (
          pertanyaan.value.charAt(pertanyaan.value.length - 1) == '?'
        ) {
          pertaPrev.innerHTML = `<br />${getData('pertanyaan')}`;
        } else {
          pertaPrev.innerHTML = `<br />${getData('pertanyaan')}.`;
        }
      }
    });

    // Ucapan
    if (getData('ucapan')) {
      penutupPrev.innerHTML = `<br /><br />${getData('ucapan')}.`;
    }
    ucapan.addEventListener('keyup', function () {
      setData('ucapan', ucapan.value);
      if (ucapan.value == '') {
        penutupPrev.innerHTML = '';
      } else {
        penutupPrev.innerHTML = `<br /><br />${getData('ucapan')}.`;
      }
    });

    // Copy teks
    copy.addEventListener('click', function () {
      const text = document.createElement('small');
      const br = document.createElement('br');
      text.classList.add('text-primary');
      notif.classList.remove('closed');
      const final = preview.innerText;
      navigator.clipboard.writeText(final).then(
        function () {
          notif.appendChild(text);
          notif.appendChild(br);
          text.innerHTML = 'Teks berhasil disalin!';
          setTimeout(function () {
            notif.classList.add('closed');
          }, 2000);
          setTimeout(function () {
            notif.classList.remove('closed');
            text.innerHTML = '';
            br.remove();
          }, 3600);
        },
        function () {
          /* clipboard write failed */
          alert('tidak berhasil dicopy');
        }
      );
    });

    // Share
    share.addEventListener('click', function () {
      navigator.share({ text: preview.innerText });
    });

    // Save ke history
    save.addEventListener('click', function () {
      const text = document.createElement('small');
      const a = document.createElement('a');
      const br = document.createElement('br');
      a.href = 'profile.html';
      a.style.fontSize = '14px';
      text.classList.add('text-success');
      notif.classList.remove('closed');
      if (getData('history')) {
        const data = JSON.parse(getData('history'));
        data.push(preview.innerText);
        setData('history', JSON.stringify(data));
      } else {
        setData('history', JSON.stringify([preview.innerText]));
      }
      text.innerHTML =
        'Teks berhasil disimpan! Kamu bisa melihat history pesanmu di menu Profil atau bisa klik ';
      a.innerHTML = 'disini!';
      notif.appendChild(text);
      notif.appendChild(a);
      notif.appendChild(br);
      setTimeout(function () {
        notif.classList.add('closed');
      }, 5000);
      setTimeout(function () {
        notif.classList.remove('closed');
        text.innerHTML = '';
        a.innerHTML = '';
        br.remove();
      }, 6600);
    });
    /*-=====================================================-*/
  }
};

export default validasiFormPesan;
