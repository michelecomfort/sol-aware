# Sol Aware - a project by Michele Comfort
Mod3 2108 FE

Deployed project: [here]()

<img width="900" alt="Sol Aware landing page" src="https://user-images.githubusercontent.com/86859884/149706030-2f557530-f90c-48e5-939c-23a1232fb2be.png">

## Table of Contents
  - [Install + Setup](#set-up)
  - [Project Specs](#project-specs)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  
## Install + Setup
  - clone this repo: [here](https://github.com/michelecomfort/sol-aware)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - The app will run on port 3000.
   - Visit (http://localhost:3000/) in your browser. 

## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Abstract

  Sol Aware is a web application designed for users who are proactively taking care of their skin, by limiting exposure to high harmful UV rays or are needing to be cautious due to ongoing skin conditions, diseases, melanoma or cancer. The app makes use of two public APIs ([Envirofacts Data Service API](https://www.epa.gov/enviro/envirofacts-data-service-api) and [Ziptastic API](https://ziptasticapi.com/)) that allow the user to search using their zip code. Once the user types in a valid zip code, they can click 'Go' and be taken to a data page, which lists the city and state and well as the current date. It will show the user the UV high of the day, the UV status (low, moderate, high, very high, extreme). The user will also see a section where they can enter their skin type and the application will immediately calculate the exposure of direct sunlight based on the UV max of the day and their skin type. Beneath the initial data, the user will see a chart populated with UV indices for the entire day.
  
  **Landing Page**
  ![Search_zip](https://user-images.githubusercontent.com/86859884/150004693-d0d3aa76-f09b-49a3-99c3-fd1b6a641ddb.gif)
  
  **Data Display**:
  ![Capturing_exposure_minutes](https://user-images.githubusercontent.com/86859884/150004173-d88a0c38-7c15-4697-91f2-31183e9b02a6.gif)
  
  **Saving Locations**:
  
  ![Save_locations](https://user-images.githubusercontent.com/86859884/149998205-7f7b05a0-9cba-4c46-8afa-7679bc836fec.gif)

  **Informational Charts**:
  
  ![Navigating](https://user-images.githubusercontent.com/86859884/149998277-c456a942-cd0d-4499-b180-c0f691b726bb.gif)

  **Tablet Responsive Views**:
  
  <img width="260" alt="Screen Shot 2022-01-18 at 11 10 55 AM" src="https://user-images.githubusercontent.com/86859884/149998413-85cce65e-c9ec-463a-9d8f-2175db4f987e.png"><img width="260" alt="Screen Shot 2022-01-18 at 11 12 24 AM" src="https://user-images.githubusercontent.com/86859884/149998351-82e680c0-7706-4e05-a869-8fa15a21b7a6.png"><img width="260" alt="Screen Shot 2022-01-18 at 11 10 47 AM" src="https://user-images.githubusercontent.com/86859884/149998498-1c761b3f-414e-4f46-9218-d6038b0fbf7b.png">

  **Mobile Responsive Views**:
  
  <img width="150" alt="Screen Shot 2022-01-18 at 11 10 05 AM" src="https://user-images.githubusercontent.com/86859884/149998575-5007f68e-6dc4-4edc-bc24-1af7b86b3caf.png"><img width="150" alt="Screen Shot 2022-01-18 at 11 10 23 AM" src="https://user-images.githubusercontent.com/86859884/149998611-7729965d-888f-479c-a7fd-b52421baa19b.png"><img width="150" alt="Screen Shot 2022-01-18 at 11 10 34 AM" src="https://user-images.githubusercontent.com/86859884/149998648-7a3821da-1c65-495c-9000-f1b3a15bc504.png">

## Architecture

This project utilizes functional components using React hooks to hold onto state. On page load, data has not been fetched. The zipcode depending data will fetch after user input. The zipcode is first used in an API call grabbing the city and state data. For this, I used the Ziptastic API. Next, an API call is run to fetch the hour UV data. For this fetch, both the current day and zipcode were needed for the API call. Data is stored in a Data Display component

A series of calculations run on the stored data to grab the highest UV index of the day, and use that information against a user-chosen skin type to display a recommended max exposure time in direct sun for the day. Chart.js is also used in this project to show hourly data so a user can plan their outdoor time accordingly. The data bars in the chart change color based on UV index levels, anywhere from green indicating that UV levels are low and safe, up to violet which indicates UV levels are extreme.

## Technologies
  - React Framework
  - React Router
  - React hooks
  - Cypress Testing Framework
  - Chart.js
  - Javascript
  - CSS HTML
  - VSCode
  - Git Version Control / GitHub
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - GitHub pages deployment

## Contributors
  - [Michele Comfort](https://github.com/michelecomfort)

## Wins
  - Conceptualized and designed entire application to completing
  - Successfully utilized functional component using React hooks
  - Responsive layout for desktop, tablet and mobile devices
  
## Challenges + Improvements
  - There are inconsistencies in the UV data derived from the API such as different time values closer to the international data line (specifically with Hawaii).
  - Timing issues with making calls to two separate with APIs
  - One API returned status 200 even with an invalid zipcode - had to add additional checks in my error handling
  - Data can only be pulled up to 36 hours in the future - ideally, having a forecast addition might be nice for users to plan ahead
  - While global state management might be overall for this simple application, it would be a straight-forward implementation
  
