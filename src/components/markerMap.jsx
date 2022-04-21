import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

class Markermap extends Component {
    render() {
        return (
            <div className="map-container">
                <Map google={this.props.google} className="map" style={style} zoom={14} >
                    <Marker name="SOMA" position={{ lat: 37.778519, lng: -122.40564 }} title="Marker No. 1" />

                    <Marker name="Dolores park" position={{ lat: 37.759703, lng: -122.428093 }} title="Marker No. 2" />

                    <Marker title="Marker created at the center" />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(Markermap);