const Mahasiswa = [
  { nama: "Karina", nrp: "724178", email: "karina@example.com", jurusan: "Manajement", idDosenWali: 1 },
  { nama: "Rich Brian", nrp: "234178", email: "brian@example.com", jurusan: "Economy", idDosenWali: 2 },
  { nama: "Warren Hue", nrp: "5276178", email: "warren@example.com", jurusan: "Designer", idDosenWali: 3 },
  { nama: "Hanni", nrp: "736248", email: "hanni@example.com", jurusan: "Manajement", idDosenWali: 4 },
  { nama: "Momo", nrp: "1124178", email: "momo@example.com", jurusan: "Computer Science", idDosenWali: 5 },
];

//Synchronous callback

console.log("mulai");
Mahasiswa.forEach((item) => {
  for (let i = 0; i < 10000000; i++) {
    let date = new Date();
  }
  console.log(item.nama);
});

console.log("selesai");

// Asynchronous callback
function getSongs(url, success, error) {
  //request as Asynchronous
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.response); //callbacks success
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("start");
getSongs(
  "datas/songs.json",
  (result) => {
    const artists = JSON.parse(result);
    artists.forEach((songs) => console.log(songs.artis));
  },
  () => {}
);
console.log("finish");

// JQuery  Asynchronous callback

mulai = setTimeout(() => {
  console.log("begin");
}, 0);

$.ajax({
  url: "datas/songs.json",
  success: (result) => {
    let songs = result;
    songs.forEach((music) => console.log(music.song));
  },
  error: () => {},
});

console.log("done");
