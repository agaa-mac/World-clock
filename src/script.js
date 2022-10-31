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
