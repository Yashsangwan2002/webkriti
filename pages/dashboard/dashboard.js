// const apiUrl = " https://serverwebmonth.herokuapp.com";
const apiUrl = "https://serverwebmonth.herokuapp.com";

var key = localStorage.getItem("email");
let email = key;

window.addEventListener("load", () => {
  fetch(`${apiUrl}/movie/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("user").innerHTML = data[0].email;
      data.forEach((element) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("flex-container");
        movieEl.innerHTML = `    <div class="flex-container">
          <div class="content-container">
            <div class="form-container">
              <h1 style="color:rgb(9, 255, 0);">Details</h1>
              <h2 class="white" id="name">Movie Name:${element.moviename}</h2>
              <br />
             
              <h2 class="white">Location:IITM Gwalior</h2>
              <br />
    
              <span class="white" id="date">Date:${element.date}</span>
              <br />
            </div>
          </div>
        </div>`;
        main.appendChild(movieEl);
      });
    })
    .catch((err) => {
      alert("Error Fetching data");
      console.log(err);
    });
});
