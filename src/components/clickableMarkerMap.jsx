import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

class ClickableMarkermap extends Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        return (
            <div className="map-container">
                <Map className="map" google={this.props.google} onClick={this.onMapClicked} style={style} zoom={14}>
                    <Marker name="SOMA" onClick={this.onMarkerClick} position={{ lat: 37.778519, lng: -122.40564 }} />

                    <Marker name="Dolores park" onClick={this.onMarkerClick} position={{ lat: 37.759703, lng: -122.428093 }} />

                    <Marker name="Center" onClick={this.onMarkerClick} />

                    <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
                        <div><h1> {this.state.selectedPlace.name} </h1></div>
                    </InfoWindow>

                    <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
                        <small> Click on any of the markers to display an additional info. </small>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(ClickableMarkermap);