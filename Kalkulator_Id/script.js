// Mengambil elemen input dengan id "inputBox"
let input = document.getElementById("inputBox");

// Mengambil semua elemen button di dalam dokumen
let buttons = document.querySelectorAll("button");

// Inisialisasi string kosong untuk menyimpan ekspresi matematika
let string = "";

// Mengubah NodeList buttons menjadi array agar bisa menggunakan metode array
let arr = Array.from(buttons);

// Menambahkan event listener untuk setiap button
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Jika button yang diklik adalah "="
    if (e.target.innerHTML == "=") {
      // Evaluasi ekspresi matematika dalam string dan simpan hasilnya
      string = eval(string);
      // Tampilkan hasil di input
      input.value = string;
    } 
    // Jika button yang diklik adalah "AC" (All Clear)
    else if (e.target.innerHTML == "AC") {
      // Reset string menjadi kosong
      string = "";
      // Kosongkan input
      input.value = string;
    } 
    // Jika button yang diklik adalah "DEL" (Delete)
    else if (e.target.innerHTML == "DEL") {
      // Hapus karakter terakhir dari string
      string = string.substring(0, string.length - 1);
      // Perbarui input dengan string yang telah diubah
      input.value = string;
    } 
    // Jika button yang diklik adalah "÷", ganti dengan simbol "/"
    else if (e.target.innerHTML == "÷") {
      string = string + "/";
      input.value = string;
    } 
    // Jika button yang diklik adalah "x", ganti dengan simbol "*"
    else if (e.target.innerHTML == "x") {
      string = string + "*";
      input.value = string;
    } 
    // Untuk semua button lainnya, tambahkan isi button ke string
    else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});