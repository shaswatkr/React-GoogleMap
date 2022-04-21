import React, { Component } from 'react';
import { Map, Polyline, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

const polyline = [
    { lat: 37.789411, lng: -122.422116 },
    { lat: 37.785757, lng: -122.421333 },
    { lat: 37.789352, lng: -122.415346 }
];

class PolyLinesmap extends Component {

    render() {
        return (
            <Map className="map" google={this.props.google} initialCenter={{ lat: 37.788411, lng: -122.422116 }} style={style} zoom={14}>
                <Polyline fillColor="#ff0028" fillOpacity={0.35} path={polyline} strokeColor="#ff0028" strokeOpacity={0.8} strokeWeight={2} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(PolyLinesmap);