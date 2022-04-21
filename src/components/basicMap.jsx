import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%'
}

class Basicmap extends Component {
    render() {
        return (
            <Map initialCenter={{ lat: 37.788411, lng: -122.422116 }} className="map" google={this.props.google} style={style} zoom={14} />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(Basicmap);
