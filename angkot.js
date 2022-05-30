var angkot = 1;
var printAngkot = false;

var prod = document.createElement("div");
prod.setAttribute("class", "angkot-prod");
document.body.append(prod);

printAngkot = confirm("Cetak angkot ke-" + angkot + "?");

while (printAngkot) {
  console.log("Angkot " + angkot + " berhasil diproduksi!");
  prodAngkot(angkot);
  angkot++;
  printAngkot = confirm("Cetak angkot ke-" + angkot + "?");
}

function prodAngkot(angkot) {
  var div = document.createElement("div");
  div.setAttribute("class", "angkot");
  div.setAttribute("id", "angkot" + angkot);

  var h2 = document.createElement("h2");
  h2.textContent = "Angkot " + angkot;
  h2.setAttribute("class", "angkot-number");
  div.append(h2);

  var img = document.createElement("img");
  img.setAttribute("class", "angkot-img");
  img.setAttribute("src", "assets/angkot.png");
  div.append(img);

  prod.append(div);
  document.body.append(prod);
}
