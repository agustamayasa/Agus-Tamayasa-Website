function hitungFibonacci() {
  const n = parseInt(document.getElementById("fibonacciInput").value);

  if (n > 0) {
    let fibonacci = [];
    let a = 1,
      b = 1;

    for (let i = 0; i < n; i++) {
      fibonacci.push(a);
      const nextFib = a + b;
      a = b;
      b = nextFib;
    }

    const hasilFibonacci = fibonacci.join(", ");
    document.getElementById("fibonacci-Result").textContent = hasilFibonacci;
  } else {
    alert("PERHATIKAN NILAI N HARUS LEBIH BESAR DARI 0");
  }
}

function tampilkanInput() {
  const jenisBangun = document.getElementById("bangun-ruang").value;
  const semuaInput = document.querySelectorAll(".input-volume > div");

  semuaInput.forEach((input) => (input.style.display = "none"));
  document.getElementById("input-" + jenisBangun.toLowerCase()).style.display =
    "block";
}

document
  .getElementById("bangun-ruang")
  .addEventListener("change", tampilkanInput);

function volumeBalok() {
  const panjangBalok = parseFloat(
    document.getElementById("panjang-balok").value
  );
  const lebarBalok = parseFloat(document.getElementById("lebar-balok").value);
  const tinggiBalok = parseFloat(document.getElementById("tinggi-balok").value);

  const volumeBalok = panjangBalok * lebarBalok * tinggiBalok;

  document.getElementById("hasil-volume-balok").textContent =
    "Volume Balok = " + volumeBalok.toFixed(2) + " cm³";
}

function volumeKubus() {
  const sisiKubus = parseFloat(document.getElementById("sisi-kubus").value);

  const volumeKubus = sisiKubus * sisiKubus * sisiKubus;

  document.getElementById("hasil-volume-kubus").textContent =
    "Volume Kubus = " + volumeKubus.toFixed(2) + " cm³";
}

function volumeBola() {
  const jariJariBola = parseFloat(
    document.getElementById("jari-jari-bola").value
  );

  const volumeBola = (4 / 3) * Math.PI * Math.pow(jariJariBola, 3);

  document.getElementById("hasil-volume-bola").textContent =
    "Volume Bola = " + volumeBola.toFixed(2) + " cm³";
}

function volumeLimas() {
  const luasAlasLimas = parseFloat(
    document.getElementById("luas-alas-limas").value
  );
  const tinggiLimas = parseFloat(document.getElementById("tinggi-limas").value);

  const volumeLimas = (1 / 3) * luasAlasLimas * tinggiLimas;

  document.getElementById("hasil-volume-limas").textContent =
    "Volume limas = " + volumeLimas.toFixed(2) + " cm³";
}

function volumeTabung() {
  const jarijariTabung = parseFloat(
    document.getElementById("jari-jari-tabung").value
  );
  const tinggiTabung = parseFloat(
    document.getElementById("tinggi-tabung").value
  );

  const volumeTabung =
    Math.PI * (jarijariTabung * jarijariTabung) * tinggiTabung;

  document.getElementById("hasil-volume-tabung").textContent =
    "Volume Tabung = " + volumeTabung.toFixed(2) + " cm³";
}
