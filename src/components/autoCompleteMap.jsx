/*
    This functionality will work when you're using the paid Google API and not the free version...
    
    Error you'll get = This API project is not authorized to use this API. Places API error: ApiNotActivatedMapError
    https://developers.google.com/maps/documentation/javascript/error-messages#api-not-activated-map-error

*/

import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100vh',
    position: 'relative'
}

class Contents extends Component {
    state = {
        position: null
    };

    componentDidMount() {
        this.renderAutoComplete();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps.map) this.renderAutoComplete();
    }

    onSubmit(e) {
        e.preventDefault();
    }

    renderAutoComplete() {
        const { google, map } = this.props;

        if (!google || !map) return;

        const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
        autocomplete.bindTo('bounds', map);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();

            if (!place.geometry) return;

            if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }

            this.setState({ position: place.geometry.location });
        });
    }

    render() {
        const { position } = this.state;

        return (
            <div className="flexWrapper">
                <div className="left">
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="Enter a location" ref={ref => (this.autocomplete = ref)} type="text" />

                        <input className="button" type="submit" value="Go" />
                    </form>

                    <div>
                        <div>Lat: {position && position.lat()}</div>
                        <div>Lng: {position && position.lng()}</div>
                    </div>
                </div>

                <div className="right">
                    <Map {...this.props} center={position} centerAroundCurrentLocation={false} containerStyle={style}>
                        <Marker position={position} />
                    </Map>
                </div>
            </div>
        );
    }
}

const AutoCompletemap = props => (
    <Map className="map" google={props.google} visible={false}>
        <Contents {...props} />
    </Map>
);

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization", "places"]
})(AutoCompletemap);