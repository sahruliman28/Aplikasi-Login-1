/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variabel dari tiap elemen
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Menginisialisasi variabel
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// Membuat button submit
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
