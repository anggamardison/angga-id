// Mengambil semua elemen dengan kelas "key" dan menyimpannya dalam variabel btn
const btn = document.querySelectorAll(".key");
// Mengambil elemen input dan output dari layar kalkulator
const layar_input = document.querySelector(".layar .input");
const layar_output = document.querySelector(".layar .output");

// Inisialisasi variabel input sebagai string kosong
let input = "";

// Loop melalui setiap tombol yang diambil sebelumnya
for (let key of btn) {
  // Mengambil nilai dari atribut data-key pada tombol
  const value = key.dataset.key;

  // Menambahkan event listener untuk setiap tombol
  key.addEventListener("click", () => {
    // Jika tombol yang ditekan adalah "clear"
    if (value == "clear") {
      // Reset input dan layar
      input = "";
      layar_input.innerHTML = "";
      layar_output.innerHTML = "";
    } 
    // Jika tombol yang ditekan adalah "delete"
    else if (value == "delate") {
      // Menghapus karakter terakhir dari input
      input = input.slice(0, -1);
      layar_input.innerHTML = input; // Memperbarui layar input
    } 
    // Jika tombol yang ditekan adalah "="
    else if (value == "=") {
      // Menghitung hasil dari ekspresi input menggunakan eval
      let result = eval(input);
      layar_output.innerHTML = result; // Menampilkan hasil di layar output
    } 
    // Jika tombol yang ditekan adalah "brackest" (tanda kurung)
    else if (value == "brackest") {
      // Memeriksa kondisi untuk menambahkan tanda kurung buka atau tutup
      if (
        input.indexOf("(") == -1 || // Jika tidak ada tanda kurung buka
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")")) // Jika ada tanda kurung buka dan tutup, dan kurung buka lebih dulu
      ) {
        input += "("; // Tambahkan tanda kurung buka
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) || // Jika ada tanda kurung buka tetapi tidak ada tanda kurung tutup
        (input.indexOf("(") != -1 &&
          input.indexOf(")") == -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")")) // Jika ada tanda kurung buka dan kurung buka lebih banyak dari kurung tutup
      ) {
        input += ")"; // Tambahkan tanda kurung tutup
      }
      layar_input.innerHTML = input; // Memperbarui layar input
    } 
    // Jika tombol yang ditekan adalah angka atau operator lainnya
    else {
      input += value; // Tambahkan nilai tombol ke input
      layar_input.innerHTML = input; // Memperbarui layar input
    }
  });
}
