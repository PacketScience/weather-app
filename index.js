const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9ec78e208bmshd1e8a93ad884079p1d3161jsnc2f2b2907b80",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const city = document.querySelector(".city");
const details = document.querySelector(".details");

const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");

const getWeather = (searchBar) => {
  const response = fetch(`${url}${searchBar}`, options);
  fetch(`${url}${searchBar}`, options)
    .then((response) => response.json())
    .then(
      (response) => (
        (city.innerHTML = `<p>${response.location.name}</p>`),
        (details.innerHTML = `<img src="${response.current.condition.icon}"><p class="text">${response.current.condition.text}</p>
        <p><span>Region:</span>${response.location.region}</p>
        <p><span>Country:</span>${response.location.country}</p>
        <p><span>Temp:</span>${response.current.condition["temp_c"]}</p>
        <p><span>Local Time:</span>${response.location["localtime"]}</p>`)
      )
    )
    .catch((error) => console.error(error));
};

searchBtn.onclick = () => getWeather(searchBar.value);
searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeather(searchBar.value);
    searchBar.value = "";
  }
});
