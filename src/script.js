function updateTime() {
  let firstCityElement = document.querySelector("#firstCity");
  let firstCityDate = firstCityElement.querySelector(".date");
  let firstCityTime = firstCityElement.querySelector(".time");
  let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do, YYYY");
  firstCityDate.innerHTML = sydneyDate;
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss [<small>]a[</small>]");
  firstCityTime.innerHTML = sydneyTime;

  let secondCityElement = document.querySelector("#secondCity");
  let secondCityDate = secondCityElement.querySelector(".date");
  let secondCityTime = secondCityElement.querySelector(".time");
  let parisDate = moment().tz("Europe/Paris").format("MMMM Do, YYYY");
  secondCityDate.innerHTML = parisDate;
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("HH:mm:ss [<small>]a[</small>]");
  secondCityTime.innerHTML = parisTime;

  let thirdCityElement = document.querySelector("#thirdCity");
  let thirdCityDate = thirdCityElement.querySelector(".date");
  let thirdCityTime = thirdCityElement.querySelector(".time");
  let torontoDate = moment().tz("America/Toronto").format("MMMM Do, YYYY");
  thirdCityDate.innerHTML = torontoDate;
  let torontoTime = moment()
    .tz("America/Toronto")
    .format("HH:mm:ss [<small>]a[</small>]");
  thirdCityTime.innerHTML = torontoTime;
}
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  
<div class="displayCity">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss [<small>]a[</small>]"
          )}</div>
        </div>

  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
