// Adding the map using Mapbox GL JS
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGZjcG9zdCIsImEiOiJja2NnemNmZ2cwcXU2MnNucXhscGh2dWk2In0.9mlPi2i5taDiPLkmEXbSEg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/hfcpost/ckckvf68502cz1jmfdnzbpjki", // stylesheet location
  center: [-76.182, 42.868], // starting position [lng, lat]
  zoom: 4.5, // starting zoom
});

// Making an AXIOS get request to the New York State API.
const apiCall = async (city) => {
  const url = "https://data.ny.gov/resource/6nvr-tbv8.json";
  try {
    const response = await axios.get(`${url}?program_city=${city}`);
    removeCards();
    elementCreator(response);
  } catch (error) {
    console.log("=>" + error);
  }
};

// Function that grabs user input.
const userInput = (e) => {
  e.preventDefault();
  const userCity = document.querySelector(".userInput").value;
  let lowerCase = userCity.toLowerCase();
  let city = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  document.querySelector(".userInput").value = "";
  apiCall(city);
};
// Grabbing the form and adding an event listener.
const form = document.querySelector("form");
form.addEventListener("submit", userInput);

// Function that marks map and creates cards.
const elementCreator = (data) => {
  console.log(data.data);
  for (let i = 0; i < data.data.length; i++) {
    if (data.data[i].location.latitude) {
      var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          `<h1>${data.data[i].facility_name}</h1> <br> <p>${data.data[i].program_type_description}</p>`
        )
        .setMaxWidth("300px");

      var marker = new mapboxgl.Marker({ color: "#3e64ff" })
        .setLngLat([
          data.data[i].location.longitude,
          data.data[i].location.latitude,
        ])
        .setPopup(popup)
        .addTo(map);
      map.flyTo({
        center: [
          data.data[0].location.longitude,
          data.data[0].location.latitude,
        ],
        zoom: 12,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }
  addCard(data);
};

const addCard = (data) => {
  for (let i = 0; i < data.data.length; i++) {
    const cardList = document.querySelector(".card-list");
    const newCard = document.createElement("div");
    newCard.innerHTML = `<h1>${data.data[i].agency_name}</h1>
    <br>
    <p>${data.data[i].populations_served}</p>
    <p>${data.data[i].agency_phone}</p>
    <p>${data.data[i].program_address_1}</p>
    <p>${data.data[i].program_city}, ${data.data[i].program_state}</p>
    <p>${data.data[i].program_zip}</p>`;
    newCard.className = "card";
    cardList.append(newCard);
  }
};

// Function to delete Exsisting cards when searching again.
const removeCards = () => {
  const cardList = document.querySelector(".card-list");
  while (cardList.lastChild) {
    cardList.removeChild(cardList.lastChild);
  }
};
