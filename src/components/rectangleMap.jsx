import React, { Component } from 'react';
import { Map, Rectangle, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

const bounds = {
    north: 37.789411,
    south: 37.731757,
    east: -122.410333,
    west: -122.489116,
};

class Rectanglemap extends Component {

    render() {
        return (
            <Map google={this.props.google} className="map" style={{ height: '100%', position: 'relative', width: '100%' }} zoom={11} >
                <Rectangle fillColor="#0000FF" fillOpacity={0.35} bounds={bounds} strokeColor="#ff0028" strokeOpacity={0.8} strokeWeight={2} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(Rectanglemap);