# partOf

### Project Description

This is a website that connects people to local non-profits and charities. With the users permission it will employ the location services on their device, and mark local organizations on a map. From there a user can click on the markers or look at the information bar which will list the same data. In this list they will see titles, descriptions, donation acceptance status, a link to donate, and links to their social profiles. 

### API and Data Sample

The API's I'm using are from [Charity API](http://charityapi.orghunter.com/) provided by [OrgHunter](https://orghunter.com/). Specifically, I am using their [Charity Search Summary API](http://charityapi.orghunter.com/content/charity-search-summary-api) which can take in latitude and longitude as parameters. This will search for orgainizations within a specified milage of the user. The second API is the [Charity Basic API](http://charityapi.orghunter.com/content/charity-basic-api). This API will be used after obtaining the orgainizations EIN number when the search query comes back. This is in an effort to gain further information about the orgainizations the user clicked on the map or item list. Unfortunately not all non-profits or charities are going to come back after the request with completed data-sets. I will do my best to provide as much information as possible, but sometimes I will be limited. 

|  JSON from Charity Search Summary API  |
:-------------------------:|

```JSON
   {
            "ein": "237451740",
            "charityName": "NICHIREN SHOSHU ACADEMY NEW YORK",
            "url": "http://www.orghunter.com/organization/237451740",
            "donationUrl": "http://donate.makemydonation.org/donate/237451740",
            "city": "LONG IS CITY",
            "state": "New York",
            "zipCode": "11101-2806",
            "start": 0,
            "rows": 20,
            "recordCount": 650,
            "score": 1,
            "acceptingDonations": 1,
            "category": "Not Provided",
            "eligibleCd": 1,
            "deductibilityCd": 1,
            "statusCd": 1,
            "website": "",
            "missionStatement": "",
            "parent_ein": 1,
            "longitude": "-73.934456",
            "latitude": "40.752659"
        },
        {
            "ein": "593799225",
            "charityName": "FRIENDS OF BORDEN AVENUE HOMELESS",
            "url": "http://www.orghunter.com/organization/593799225",
            "donationUrl": "http://donate.makemydonation.org/donate/593799225",
            "city": "SUNNYSIDE",
            "state": "New York",
            "zipCode": "11104-0000",
            "start": 0,
            "rows": 20,
            "recordCount": 650,
            "score": 1,
            "acceptingDonations": 0,
            "category": "Not Provided",
            "eligibleCd": 0,
            "deductibilityCd": 0,
            "statusCd": 4,
            "website": "",
            "missionStatement": "",
            "parent_ein": 1,
            "longitude": "-73.919815",
            "latitude": "40.744873"
        }
```

|  JSON from Charity Basic API - Example of Lack of data  |
:-------------------------:|
```JSON
{
    "code": 200,
    "msg": "OK, all went through!",
    "data": {
        "ein": "593799225",
        "name": "FRIENDS OF BORDEN AVENUE HOMELESS",
        "inCareOfName": "",
        "street": "C/O RONALD CASEY",
        "city": "SUNNYSIDE",
        "state": "NY",
        "zipCode": "11104-0000",
        "country": "USA",
        "groupExemption": null,
        "subsection": "501(c)(0)",
        "classification": "",
        "affiliation": null,
        "rullingDate": "",
        "deductibility": null,
        "deductibilityStatus": null,
        "foundation": null,
        "activity1": null,
        "activity2": null,
        "activity3": null,
        "organization": null,
        "exemptStatus": null,
        "taxPeriod": "",
        "assetCodeDesc": null,
        "incomeCodeDesc": null,
        "filingRequirementCodeDesc ": null,
        "pfFilingRequirementCodeDesc": null,
        "accountingPeriod": null,
        "assetAmount": "0.00",
        "incomeAmount": "0.00",
        "form990": "0.00",
        "nteeCd": "?",
        "nteeClass": "Not Provided",
        "nteeType": "Not Provided",
        "sortName": "@",
        "revocationDt": "2011-05-15",
        "revPostingDt": "2012-02-22",
        "irsRevocationStatus": "This Charity is listed on the IRS revocation file and not on the pub78 file.",
        "acceptingDonations": "0"
    }
}
```
|  JSON from Charity Basic API - Example of desired amount of data  |
:-------------------------:|
```JSON
{
    "code": 200,
    "msg": "OK, all went through!",
    "data": {
        "ein": "205846694",
        "name": "KIDS FOR TOMORROW INC",
        "inCareOfName": "SAMANTHA TANNEHILL",
        "street": "353THIRDAVEUNIT127",
        "city": "NEWYORK",
        "state": "NY",
        "zipCode": "10010-0000",
        "country": "USA",
        "groupExemption": null,
        "subsection": "501(c)(3)",
        "classification": "Charitable Organization",
        "affiliation": "Independent - This code is used if the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).",
        "rullingDate": "July, 2008",
        "deductibility": "Contributions are deductible.",
        "deductibilityStatus": "PC",
        "foundation": "Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)",
        "activity1": null,
        "activity2": null,
        "activity3": null,
        "organization": "Corporation",
        "exemptStatus": "Unconditional Exemption",
        "taxPeriod": "December, 2016",
        "assetCodeDesc": "0",
        "incomeCodeDesc": "0",
        "filingRequirementCodeDesc ": "Not required to file (income less than $25,000)",
        "pfFilingRequirementCodeDesc": "No PF return",
        "accountingPeriod": "December",
        "assetAmount": "0.00",
        "incomeAmount": "0.00",
        "form990": "0.00",
        "nteeCd": "Q33",
        "nteeClass": "International Relief",
        "nteeType": "International, Foreign Affairs and National Security",
        "sortName": "",
        "revocationDt": null,
        "revPostingDt": null,
        "irsRevocationStatus": null,
        "acceptingDonations": "1"
    }
}
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
