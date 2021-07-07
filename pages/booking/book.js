var count = 0;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
var seats = document.getElementsByClassName("seat");
for (var i = 0; i < seats.length; i++) {
  var item = seats[i];

  item.addEventListener("click", (event) => {
    var price = 10;

    if (
      !event.target.classList.contains("occupied") &&
      !event.target.classList.contains("selected")
    ) {
      count++;

      var total = count * price;
      event.target.classList.add("selected");
      document.getElementById("count").innerText = count;
      document.getElementById("total").innerText = total;
    }
  });
}
const urlParams = new URLSearchParams(location.search);
let a = [];
let z = 0;
for (const value of urlParams.values()) {
  console.log(value);
  a[z] = value;
  z++;
}
document.getElementById("title").innerHTML = a[0];

document.getElementById("movimg").innerHTML = `
             <img src="${
               a[1] ? IMG_URL + a[1] : "http://via.placeholder.com/1080x1580"
             }" alt=""  height="80%" width="70%">`;
