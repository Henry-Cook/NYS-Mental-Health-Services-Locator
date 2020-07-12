# partOf

### Project Description

This is a website that connects people who live in New York State to local mental health programs and other human services organizations. A user will type in the their city name, and then the [Mapbox GL JS](https://www.mapbox.com/) library that is integrated in this website, will plot out available orgainizations on the map. From there a user can click on the markers or look at the information bar which will list the same data. The data will consist of titles, descriptions, and phone numbers. 

### API and Data Sample

The main API that I will be using is the [Local Mental Health Programs API](https://data.ny.gov/Human-Services/Local-Mental-Health-Programs/6nvr-tbv8) provided by [New York State](https://data.ny.gov/). The Parameter I will be passing into the get request will be `program_city=Cityname`. The cities first letter must be capitalized for a succesful request. If succesful the request will return data in a JSON format. 

*Please note: The second JSON object does not contain latitude and longitude. Unfortunetely at this time those entries will not be listed on this site. However this is not the norm, the majority of the objects will contain this data.*
 

|  Sample JSON from [Local Mental Health Programs API](https://data.ny.gov/Human-Services/Local-Mental-Health-Programs/6nvr-tbv8) |
:-------------------------:|

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



### Wireframes
|  Mobile            |
:-------------------------:|
|![Mobile](https://git.generalassemb.ly/HenryCook/super-project/blob/master/wire-frames/Screen%20Shot%202020-07-11%20at%203.57.52%20PM.png?raw=true)|


| Desktop            |
:-------------------------:|
|![desktop](https://git.generalassemb.ly/HenryCook/super-project/blob/master/wire-frames/Screen%20Shot%202020-07-11%20at%204.05.25%20PM.png?raw=true)| 

Made with [wireframe.cc](https://wireframe.cc/)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
