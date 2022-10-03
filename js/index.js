const container = document.getElementById("adress");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const search = document.getElementById("name").value;
  fetch(`https://ipapi.co/${search}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        container.innerHTML = `<h3>${data.reason}</h3>`;
      } else {
        container.innerHTML = `
      <div class="wrapper">
      <h2>ip adress</h2>
      <span>${data.ip}</span>
      </div>
      <div class="wrapper">
      <h2>city</h2>
      <span>${data.city}</span>
      </div>
      <div class="wrapper">
      <h2>Country</h2>
      <span>${data.country}</span>
      </div>
      <div class="wrapper">
      <h2>Timezone</h2>
      <span>${data.timezone}</span>
      </div>
      <div class="wrapper">
      <h2>postal</h2>
      <span>${data.postal}</span>
      </div>`;
      }
    });
});
