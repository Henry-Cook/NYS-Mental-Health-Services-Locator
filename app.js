// // Adding the map using Mapbox GL JS
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiaGZjcG9zdCIsImEiOiJja2NnemNmZ2cwcXU2MnNucXhscGh2dWk2In0.9mlPi2i5taDiPLkmEXbSEg";
// var map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/hfcpost/ckckvf68502cz1jmfdnzbpjki", // stylesheet location
//   center: [-76.182, 42.868], // starting position [lng, lat]
//   zoom: 5.7, // starting zoom
// });

// Function that grabs user input.
const userInput = (e) => {
  e.preventDefault();
  const userCity = document.querySelector(".userInput").value;
  let lowerCase = userCity.toLowerCase();
  let city = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  document.querySelector(".userInput").value = "";
};
// Grabbing the form and adding an event listener.
const form = document.querySelector("form");
form.addEventListener("submit", userInput);
