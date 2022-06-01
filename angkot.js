var angkot = 1;
var startFactory = false;

const angkotFactory = [
  {
    nomor: 1,
    warna: "putih",
    status: "sempurna",
  },
  {
    nomor: 2,
    warna: "putih",
    status: "sempurna",
  },
  {
    nomor: 3,
    warna: "putih",
    status: "cacat",
  },
  {
    nomor: 4,
    warna: "merah",
    status: "sempurna",
  },
  {
    nomor: 5,
    warna: "biru",
    status: "sempurna",
  },
];

var prod = document.createElement("div");
prod.setAttribute("class", "angkot-prod");
document.body.append(prod);

startFactory = confirm("Apakah anda ingin mulai produksi angkot?");

if (startFactory) {
  if (angkotFactory.length > 0) {
    angkotFactory.forEach((angkot) => {
      prodAngkot(angkot);
    });

    alert("Selesai...");
  }
} else {
  alert("Anda bisa melakukan produksi angkot di lain kesempatan :D");
}

function prodAngkot(angkot) {
  var div = document.createElement("div");
  div.setAttribute("class", "angkot");
  div.setAttribute("id", "angkot" + angkot.nomor);

  var h2 = document.createElement("h2");
  h2.textContent = "Angkot " + angkot.nomor;
  h2.setAttribute("class", "angkot-number");
  div.append(h2);

  var color = document.createElement("p");
  color.textContent = "Warna: " + angkot.warna;
  if (angkot.warna === "merah") {
    color.setAttribute("class", "angkot-red");
  } else if (angkot.warna === "biru") {
    color.setAttribute("class", "angkot-blue");
  } else {
    color.setAttribute("class", "angkot-default");
  }
  div.append(color);

  var status = document.createElement("p");
  status.textContent = angkot.status;
  status.setAttribute(
    "class",
    angkot.status === "sempurna" ? "angkot-sempurna" : "angkot-cacat"
  );
  div.append(status);

  var img = document.createElement("img");
  img.setAttribute("class", "angkot-img");
  if (angkot.warna === "merah") {
    img.setAttribute("src", "assets/Angkot-Merah.png");
  } else if (angkot.warna === "biru") {
    img.setAttribute("src", "assets/Angkutan-Kota.webp");
  } else {
    img.setAttribute("src", "assets/angkot.png");
  }

  div.append(img);

  prod.append(div);
  document.body.append(prod);
}
