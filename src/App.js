import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Heatmap from './components/heatMap';
import Markermap from "./components/markerMap"
import BasicMap from './components/basicMap';
import clickableMarkerMap from './components/clickableMarkerMap';
import polygonMap from './components/polygonMap';
import polylinesMap from './components/polylinesMap';
import rectangleMap from './components/rectangleMap';
import AutoCompletemap from './components/autoCompleteMap';

function App() {
    return (
        <Switch>
            <Route exact path="/basicmap" component={BasicMap} />
            <Route exact path="/heatmap" component={Heatmap} />
            <Route exact path="/markermap" component={Markermap} />
            <Route exact path="/clickablemarkermap" component={clickableMarkerMap} />
            <Route exact path="/polygonmap" component={polygonMap} />
            <Route exact path="/polylinesmap" component={polylinesMap} />
            <Route exact path="/rectanglemap" component={rectangleMap} />

            {/* This route will work if you're using the full paid version of Google API */}
            <Route exact path="/autocompletemap" component={AutoCompletemap} />
        </Switch>
    );
}

export default App;
