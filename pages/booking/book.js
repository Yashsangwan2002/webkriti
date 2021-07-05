value = localStorage["key"];
const IMG_URL = "https://image.tmdb.org/t/p/w500";

var count = 0;
var seats = document.getElementsByClassName("seat");
for (var i = 0; i < seats.length; i++) {
  var item = seats[i];

  item.addEventListener("click", (event) => {
    var price = document.getElementById("movie").value;

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

document.getElementsByClassName("movimg").innerHTML = `
<img src="${
  value ? IMG_URL + value : "http://via.placeholder.com/1080x1580"
}" alt="cant load">`;
