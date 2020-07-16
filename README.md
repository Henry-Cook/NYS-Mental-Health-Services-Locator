# New York State Mental Health Services Locator

https://pages.git.generalassemb.ly/HenryCook/NYS-Mental-Health-Services-Locator/

## Project Description

This is a website that connects people who live in New York State to local mental health programs and other human services organizations. A user will type in the their city name, and then with help from the [Mapbox GL JS](https://www.mapbox.com/) library will plot out available orgainizations on the map. From there a user can click on the markers or look at the information bar which will list the same data. The data will consist of titles, descriptions, and phone numbers.

## API and Data Sample

The main API that is being used is the [Local Mental Health Programs API](https://data.ny.gov/Human-Services/Local-Mental-Health-Programs/6nvr-tbv8) provided by [New York State](https://data.ny.gov/). The parameter being passed into the get request will be `program_city=Cityname`. The cities first letter must be capitalized for a succesful request. If succesful the request will return data in a JSON format.

_Please Note: The second JSON object does not contain latitude and longitude. Unfortunetely at this time those entries will not be listed on this site. However, this is not the norm and the majority of the data will contain these values._

| Sample JSON from [Local Mental Health Programs API](https://data.ny.gov/Human-Services/Local-Mental-Health-Programs/6nvr-tbv8) |
| :----------------------------------------------------------------------------------------------------------------------------: |


```JSON
  [
    {
        "row_created_date_time": "2018-04-27T09:52:56.000",
        "sponsor_name": "Goodwill Industries of Greater New York Inc.",
        "sponsor_code": "598099",
        "agency_name": "Goodwill Industries of Greater New York Inc.",
        "agency_code": "40460",
        "facility_name": "Goodwill Industries of Greater New York Inc.",
        "facility_code": "6329",
        "program_name": "Goodwill PROS Rebound",
        "program_code": "003",
        "populations_served": "Adults",
        "agency_phone": "(718)728-5400",
        "program_phone": "(718)728-5400",
        "program_address_1": "4-21 27th Avenue",
        "program_city": "Astoria",
        "program_state": "NY",
        "program_zip": "11102-4510",
        "operating_certificate_required": "Y",
        "operating_certificate_duration": "36",
        "program_county": "Queens",
        "program_region": "New York City",
        "program_type_description": "Comprehensive PROS with Clinical Treatment",
        "program_category_description": "Outpatient",
        "program_subcategory_description": "Personalized Recovery-Oriented Services",
        "location": {
            "latitude": "40.784048",
            "longitude": "-73.917088",
            "human_address": "{\"address\": \"4 21 27th Avenue\", \"city\": \"Astoria\", \"state\": \"NY\", \"zip\": \"11102-4510\"}"
        }
    },
    {
        "row_created_date_time": "2018-04-27T09:52:56.000",
        "sponsor_name": "Creedmoor Psychiatric Center",
        "sponsor_code": "905099",
        "agency_name": "Creedmoor Psychiatric Center",
        "agency_code": "90050",
        "facility_name": "Creedmoor Psychiatric Center",
        "facility_code": "0005",
        "program_name": "Steinway Community Services",
        "program_code": "441",
        "populations_served": "Adults",
        "agency_phone": "(718)464-7500",
        "program_phone": "(718)726-5953",
        "program_address_1": "38-11 Broadway",
        "program_city": "Astoria",
        "program_state": "NY",
        "program_zip": "11103",
        "operating_certificate_required": "Y",
        "operating_certificate_duration": "36",
        "program_county": "Queens",
        "program_region": "New York City",
        "program_type_description": "Clinic Treatment",
        "program_category_description": "Outpatient",
        "program_subcategory_description": "Clinic Treatment",
        "location": {
            "human_address": "{\"address\": \"38 11\", \"city\": \"Astoria\", \"state\": \"NY\", \"zip\": \"11103\"}"
        }
    }
]
```

## Wireframes

|                                                                       Mobile                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Mobile](https://git.generalassemb.ly/HenryCook/super-project/blob/master/wire-frames/Screen%20Shot%202020-07-11%20at%203.57.52%20PM.png?raw=true) |

|                                                                       Desktop                                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![desktop](https://git.generalassemb.ly/HenryCook/super-project/blob/master/wire-frames/Screen%20Shot%202020-07-11%20at%204.05.25%20PM.png?raw=true) |

Made with [wireframe.cc](https://wireframe.cc/)

## MVP

_Minimum Viable Product_

- Responsive desgin for mobile vs desktop users.
- A search bar for the user to input a city name.
- Render a map centering on New York State using the [Mapbox GL JS](https://www.mapbox.com/) library.
- Make an API call using [Axios](https://github.com/axios/axios) to New York State’s [Local Mental Health Programs API](https://data.ny.gov/Human-Services/Local-Mental-Health-Programs/6nvr-tbv8) using the city name the user input.
- Use returned data's latitude and longitude values to populate the map with markers.
- Display program names, descriptions, categories, and contact information on cards next to the map.
- Display the same info except in a pop-up after you click a marker.

## PostMVP

_Features that will help create a better expierence and better website._

- Light and dark modes.
- Map animation to zoom in on selected city.
- Hover effect on cards.
- Directions that appear until a user makes a search.

## Project Schedule

| Day        | Deliverable                                                                                   | Status     |
| ---------- | --------------------------------------------------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes                                            | Complete   |
| July 13    | Project approval, organization, HTML & basic CSS.                                             | Complete   |
| July 14    | Create functions for user input, add Mapbox map, and create a function for API call.          | Complete   |
| July 15    | Plot data on map from api call, dynamically add returned content, add pop-ups to map markers. | Complete   |
| July 16    | Add CSS for responsivness on desktop, style map and card lists, make sure MVP is completed.   | Complete   |
| July 17    | Presentations                                                                                 | Incomplete |

## Priority Matrix

![Priority Matrix Chart](https://git.generalassemb.ly/HenryCook/super-project/blob/master/Priority-Matrix/Untitled%20Diagram.png?raw=true)

## Timeframes

_Please Note: This time frame only includes items in the MVP list, Nothing from the PostMVP list._
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Create color scheme and choose fonts | H | 2hrs| 1hr | - |
| Write pseudocode for JS file | H | 2hrs| 1hr | - |
| Add basic HTML structure | M | 3hrs| 1hr | - |
| Add basic mobile view oriented CSS - See wireframe | M | 3hrs| 2hrs | - |
| Create the Mapbox map | M | 3hrs| .5hr | - |
| Create a function that returns the users input and capitalizes first letter.|H | 2hrs| 1hr | - |
| Create a function to make an API call to main API using the users inputed city name. | H | 2hrs| .5hr | - |
| Create a function to iterate through the data and create map markers| M | 3hrs| 2.5hrs | - |
| Complete the above function by adding code to create a card for each JSON object. | M | 3hrs| 1hr | - |
| Add popups to the map markers | M | 3hrs| 2hrs | - |
| Confirm that all MVP requirements are met| H | 1hrs| .25hr | - |
| Style the map | M | 1hr| 1 | .5hr |
| Style the cards | M | 1hr| 1 | .5hr |
| Style the search bar and surrounding area| M | 1hr| .5 | - |
| Total | - | 40hrs| 14.25 | - |

## Code Snippet

```
// Function that grabs user input and sanitizes it.
const userInput = (e) => {
  // Stops page from reloading on form submit.
  e.preventDefault();
  // Grabs user input.
  const userCity = document.querySelector(".userInput").value;
  // Makes user input lowercase.
  let lowerCase = userCity.toLowerCase();
  // Looks for the first letter and makes it uppcase, if two or more words,
  // it will make that words first character uppcase as well.
  const city = lowerCase.replace(/\b\w/g, (l) => l.toUpperCase());
  // Sets the value of the searh bar back to placeholder text.
  document.querySelector(".userInput").value = "";
  // Makes API call.
  apiCall(city);
};

```

## Change Log

- Added a postMVP: type-ahead predictor. When the user types the code will "guess" what they are going to type.
