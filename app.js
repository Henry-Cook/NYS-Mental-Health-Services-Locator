// Adding the map using Mapbox GL JS
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGZjcG9zdCIsImEiOiJja2NnemNmZ2cwcXU2MnNucXhscGh2dWk2In0.9mlPi2i5taDiPLkmEXbSEg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/hfcpost/ckckvf68502cz1jmfdnzbpjki", // stylesheet location
  center: [-76.182, 42.868], // starting position [lng, lat]
  zoom: 5, // starting zoom
});
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

// Function that grabs user input.
const userInput = (e) => {
  e.preventDefault();
  const userCity = document.querySelector(".userInput").value;
  let lowerCase = userCity.toLowerCase();
  // let city = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  const city = lowerCase.replace(/\b\w/g, (l) => l.toUpperCase());
  document.querySelector(".userInput").value = "";

  apiCall(city);
};
// Grabbing the form and adding an event listener.
const form = document.querySelector("form");
form.addEventListener("submit", userInput);

let currentMarkers = [];

// Function that marks map and creates cards.
const elementCreator = (data) => {
  // Sorts the elements in data.data placing an orgainizations programs next to eachother.
  data.data.sort((a, b) => (a.agency_name > b.agency_name ? 1 : -1));

  // Not my code right here see => https://stackoverflow.com/questions/46155523/mapbox-clear-all-current-markers
  // needed to clear all the markers from the map when switching cities and this guy had a good solution.
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
        }</p><a href="#${[i]}">More Info</a>`
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
    // newCard.setAttribute("id", `${[i]}`);
    if (
      data.data[i].program_name !== data.data[i].program_name &&
      data.data[i].populations_served !== undefined
    ) {
      newCard.innerHTML = ` <a class="anchor" id="${[i]}"></a> <h1>${
        data.data[i].agency_name
      }</h1>
        <p>${data.data[i].program_name}</p>
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
