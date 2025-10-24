// Popup sapaan saat pengunjung masuk
window.onload = function () {
    let nama = prompt("Halo! Siapa namamu?");
    if (nama && nama.trim() !== "") {
        document.getElementById("welcome-title").textContent = `Hi ${nama} Welcome To My Website`;
    } else {
        document.getElementById("welcome-title").textContent = "Welcome To My Website";
    }
};

// Form
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let pesan = document.getElementById("pesan").value;

    // Tampilkan hasil
    document.getElementById("time").textContent = "Current time : " + new Date();
    document.getElementById("hasil-nama").textContent = "Nama : " + nama;
    document.getElementById("hasil-tgl").textContent = "Tanggal Lahir : " + tgl;
    document.getElementById("hasil-gender").textContent = "Jenis Kelamin : " + gender;
    document.getElementById("hasil-pesan").textContent = "Pesan : " + pesan;

    // Popup pesan terkirim
    alert(`Hi ${nama}, pesan kamu sudah terkirim!`);
    
    this.reset();
});
