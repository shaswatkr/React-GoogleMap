# Google Map API In React
The project gives us Basic, Marker, Clickable Maker, Heat Maps creation using `google-maps-react` and `React 16.13.1`

Along with this we can also create Polygons, Polylines and Rectangle in the maps.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) version 16.13.1.

- [basicMap.jsx](/src/components/basicMap.jsx) creates Basic Google map in your project with user-desined size, zoom and map center.
- [markerMap.jsx](/src/components/markerMap.jsx) creates Google map with Markers present in the coordinates you provide in the code.
- [clickableMarkerMap.jsx](/src/components/clickableMarkerMap.jsx) creates Google map with Markers which when clicked gives user-defined name of the respective marker.
- [heatMap.jsx](/src/components/heatMap.jsx) creates Google Heatmap based on coordinats you want to highlight with user-defined opacity of points and their radius.
- [autoCompleteMap.jsx](/src/components/autoCompleteMap.jsx) creates Google map with a form on the left side where user can enter the location name and search, which will get the location in the map present on the right along with the Latitude and Longitude of the location.
- [polygonMap.jsx](/src/components/polygonMap.jsx) creates Google map with a polygon drawn based on coordinates user give in the code. You can set the fillColour, strokeColor(color of the border), opacity of the polygon and the border and the weight of the border.
- [polylinesMap.jsx](/src/components/polylinesMap.jsx) creates Google map with a Polyline(open polygon) drawn based on coordinates user give in the code. You can set the fillColour, strokeColor(color of the border), opacity of the polygon & the border along with the weight of the border.
- [rectangleMap.jsx](/src/components/rectangleMap.jsx) creates Google map with a Rectangle drawn based on the North, South, East, West limit of the rectangle given by the user in the code. You can set the fillColour, strokeColor(color of the border), opacity of the rectangle & the border along with the weight of the border.


## Need for the project
#### Often time when we're creating a project we're in a need of adding Google maps inside them, may it be to create a marker to point a particular location or maybe to create heatmap to represent a statistic.

But how to get a Google Map API, how to use Heatmap, how to style it - These are big obstacles almost all UI developer faces!! 

That's why I'm creating this project which will act as a walkthrough.

You want to use heatmap:
1. Get your very own Google Map API key using the steps provided,
2. Then just open the heatmap.jsx file and copy-paste the code into your React application and you're good to go!!!

# Getting Started

## Prerequisites
Get latest version of `Node.js` and `Create React App` from appstore (appstore.uhc.com)

## Installation Of Packages (To be done in the folder containing your project)
`npm install --save google-maps-react`

## Steps to get your Google Map API
1. Open [Google Cloud Platform Console](https://console.cloud.google.com/google/maps-apis/overview).
2. If this is your fist time, you'll be asked to log into using any of yours Google account.
3. Once you log into the Console, you'll get a Welcome page where you've to put in your Country name and accept the `Terms of Service`.
4. As this is your fist time, you'll have to create a Project for which API can be created it later steps.
  - Click `Create Project` and you'll be moved to New Project page where you've to enter `Project Name`(this can be anything you like, project name is not used anywhere while you use the APIs) & `Location`(It too don't matter, just select No organization and move on). Finally click `Create`.
5. Now once you've created a Project, you'll be able to create API or services.
6. As currently I'll be making a free API, I'll select `Maps JavaScript API`. You can select any of the API you want, they are of varying cost, so decide as per your project's use.
7. Now you'll get the `Maps JavaScript API` page(or any other choice which you've selected in above step) and you've to just click `ENABLE`.
8. Once you've enabled any of the APIs you'll get a `Metric` page, where you can find all the charts.
9. Click on the menu button(3 line present on the top left) and select `APIs & Services` -> `Credentials`.
10. On the Credential page, select `Create Credentials` deopbox and then select `API key`.
11. `API key created` dialogue box will be created with your very own API key.
12. Just paste this key instead of the `(YOUR_GOOGLE_API_KEY_GOES_HERE)` while you copy the code and you're good to go.

## Sample Images of the different Map types

### Basic Map
![Basic Map](/assets/Basicmap.PNG)

### Map with Markers
![Marker Map](/assets/Markermap.PNG)

### Map with Clickable Markers
![Clickable Marker Map](/assets/ClickableMarkermap.PNG)

### HeatMap
![HeatMap](/assets/Heatmap.PNG)

### Map with search Location field
![Autocomplete Map](/assets/AutoCompletemap.PNG)

### Map with Polygon drawn over it
![Polygon Map](/assets/Polygonmap.PNG)

### Map with Polyline drawn over it
![Polyline Map](/assets/Polylinesmap.PNG)

### Map with Rectangle drawn over it
![Rectangle Map](/assets/Rectanglemap.PNG)

## Development server
### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser, if the above port(3000) is busy it'll be open in some other port so keep that in mind..

The page will reload if you make edits.
You will also see any lint errors in the console.

## Build
### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Maintainers (Authors) 
Shaswat Kumar (shaswat_kumar87@optum.com)

Shobhit Vijaivergia (shobhit.vijaivergia@optum.com)

# Contributing Guidelines
Please refer to [Contribution Guidelines](/CONTRIBUTING.md) for guidance on contributing to this project. There is also a [pull request template](/PULL_REQUEST_TEMPLATE) in this repo for guiding contributors through the pull request process.


## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
