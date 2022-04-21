import React, { Component } from 'react';
import { Map, Polygon, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

const polygon = [
    { lat: 37.789411, lng: -122.422116 },
    { lat: 37.785757, lng: -122.421333 },
    { lat: 37.789352, lng: -122.415346 }
];

class Polygonmap extends Component {

    render() {
        return (
            <Map google={this.props.google} initialCenter={{ lat: 37.788411, lng: -122.422116 }} className="map" style={style} zoom={14} >
                <Polygon fillColor="#0000FF" fillOpacity={0.35} paths={[polygon]} strokeColor="#0000FF" strokeOpacity={0.8} strokeWeight={2} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(Polygonmap);