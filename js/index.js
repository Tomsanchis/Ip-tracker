const container = document.getElementById("adress");
const map = document.querySelector("#map");

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
      <div class="liner">
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
      </div>
      </div>
      <div class="liner">
      <div class="wrapper">
      <h2>Latitude</h2>
      <span>${data.latitude}</span>
      </div>
      <div class="wrapper">
      <h2>Longitude</h2>
      <span>${data.longitude}</span>
      </div>
      <div class="wrapper">
      <h2>Currency</h2>
      <span>${data.currency_name}</span>
      </div>
      <div class="wrapper">
      <h2>Version</h2>
      <span>${data.version}</span>
      </div>
      <div class="wrapper">
      <h2>Languages</h2>
      <span>${data.languages}</span>
      </div>
      </div>`;
      }
      const iframe = document.querySelector("iframe");
      iframe.src = `https://maps.google.it/maps?q=${data.latitude},${data.longitude}&z=10&output=embed`;
    });
});
