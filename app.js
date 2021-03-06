const form = document.querySelector("form");

// This array holds the marker count for the map.
let currentMarkers = [];

// Adding the map using Mapbox GL JS
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGZjcG9zdCIsImEiOiJja2NnemNmZ2cwcXU2MnNucXhscGh2dWk2In0.9mlPi2i5taDiPLkmEXbSEg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/hfcpost/ckckvf68502cz1jmfdnzbpjki", // stylesheet location
  center: [-76.182, 42.868], // starting position [lng, lat]
  zoom: 5, // starting zoom
});

// Main API endpoint
const url = "https://data.ny.gov/resource/6nvr-tbv8.json";

// Making an AXIOS get request to the New York State API.
const apiCall = async (city) => {
  const response = await axios.get(`${url}?program_city=${city}`);
  try {
    removeCards();
    elementCreator(response);
  } catch (error) {
    console.log("=>" + error);
  }
};

// Function that grabs user input and sanitizes it.
const userInput = (e) => {
  e.preventDefault();
  const userCity = document.querySelector(".userInput").value;
  let lowerCase = userCity.toLowerCase();

  // This line will the first letter in each word the user inputs
  const city = lowerCase.replace(/\b\w/g, (l) => l.toUpperCase());
  document.querySelector(".userInput").value = "";
  apiCall(city);
};

// Adding an event listener to the form
form.addEventListener("submit", userInput);

// Function that marks map and creates cards.
const elementCreator = (data) => {
  // Sorts the elements in data.data placing orgainizations in alphabetical order, this is useful because
  // many orgainizations have multiple programs listed together and this will place them all together.
  data.data.sort((a, b) => (a.agency_name > b.agency_name ? 1 : -1));

  // Not my code right here see => https://stackoverflow.com/questions/46155523/mapbox-clear-all-current-markers
  // needed to clear all the markers from the map when switching cities and this person had a good solution.
  if (currentMarkers.length !== 0) {
    for (let i = currentMarkers.length - 1; i >= 0; i--) {
      currentMarkers[i].remove();
    }
  }

  // Back to my code.
  for (let i = 0; i < data.data.length; i++) {
    let popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h1>${data.data[i].agency_name}</h1> <p>${
          data.data[i].program_type_description
        }</p><a class="link" href="#${[i]}">More Info</a>`
      )
      .setMaxWidth("300px");
    if (data.data[i].location && data.data[i].location.latitude) {
      let marker = new mapboxgl.Marker({ color: "#3e64ff" })
        .setLngLat([
          data.data[i].location.longitude,
          data.data[i].location.latitude,
        ])
        .setPopup(popup)
        .addTo(map);
      currentMarkers.push(marker);
      map.flyTo({
        center: [
          data.data[0].location.longitude,
          data.data[0].location.latitude,
        ],
        zoom: 11,
        essential: true,
      });
    }
  }
  addCard(data);
};

// This is the function that creates the card elements.
// There are multiple ways cards will be added becuase some of the JSON
// has incomplete records and I wanted to minimize the amount of "undefined"
// being displayed.
const addCard = (data) => {
  for (let i = 0; i < data.data.length; i++) {
    const cardList = document.querySelector(".card-list");
    const newCard = document.createElement("div");
    if (
      data.data[i].program_name !== data.data[i].program_name &&
      data.data[i].populations_served !== undefined
    ) {
      newCard.innerHTML = ` <a class="anchor" id="${[i]}"></a> <h1>${
        data.data[i].agency_name
      }</h1>
        <p >${data.data[i].program_name}</p>
        <p>${data.data[i].program_type_description}</p>
        <p>${data.data[i].populations_served}</p>
        <p>${data.data[i].agency_phone}</p>
        <p>${data.data[i].program_address_1}</p>
        <p>${data.data[i].program_city}, ${data.data[i].program_state}</p>
        <p>${data.data[i].program_zip}</p>`;
    } else if (
      data.data[i].program_name === data.data[i].program_name &&
      data.data[i].populations_served !== undefined
    ) {
      newCard.innerHTML = `<a class="anchor" id="${[i]}"></a> <h1>${
        data.data[i].agency_name
      }</h1>
      <p>${data.data[i].program_name}</p>
      <p>${data.data[i].populations_served}</p>
      <p>${data.data[i].agency_phone}</p>
      <p>${data.data[i].program_address_1}</p>
      <p>${data.data[i].program_city}, ${data.data[i].program_state}</p>
      <p>${data.data[i].program_zip}</p>`;
    } else {
      newCard.innerHTML = `<a class="anchor" id="${[i]}"></a><h1>${
        data.data[i].agency_name
      }</h1>
      <p>${data.data[i].program_name}</p>
      <p>${data.data[i].agency_phone}</p>
      <p>${data.data[i].program_address_1}</p>
      <p>${data.data[i].program_city}, ${data.data[i].program_state}</p>
      <p>${data.data[i].program_zip}</p>`;
    }

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

// This function allows the user to switch between light and dark modes.
// It also sets the style of the map.
const modeBtn = document.querySelector(".dark-light-mode");
const cssLink = document.querySelector("#mode");
modeBtn.addEventListener("click", () => {
  if (cssLink.getAttribute("href") == "./style.css") {
    cssLink.href = "./darkMode.css";
    map.setStyle("mapbox://styles/hfcpost/ckcnkb2yu1d931imm7q2a6237");
    modeBtn.innerText = "Light Mode";
  } else {
    cssLink.href = "./style.css";
    map.setStyle("mapbox://styles/hfcpost/ckckvf68502cz1jmfdnzbpjki");
    modeBtn.innerText = "Dark Mode";
  }
});
