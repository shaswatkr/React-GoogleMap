import React, { Component } from 'react';
import { Map, HeatMap, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

class Heatmap extends Component {
    state = {
        data: [
            { "lat": 28.6697, "lng": 77.159521 },
            { "lat": 28.6453, "lng": 77.218721 },
            { "lat": 28.6375, "lng": 77.213721 },
            { "lat": 28.6318, "lng": 77.221921 },
            { "lat": 28.6742, "lng": 77.277521 },
            { "lat": 28.6602, "lng": 77.569521 },
            { "lat": 28.6368, "lng": 77.219785 },
            { "lat": 28.6572, "lng": 77.219521 },
            { "lat": 28.6378, "lng": 77.218721 },
            { "lat": 28.6368, "lng": 77.219785 }
        ],
        gradient: [
            "rgba(0, 255, 255, 0)",
            "rgba(0, 255, 255, 1)",
            "rgba(0, 191, 255, 1)",
            "rgba(0, 127, 255, 1)",
            "rgba(0, 63, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 223, 1)",
            "rgba(0, 0, 191, 1)",
            "rgba(0, 0, 159, 1)",
            "rgba(0, 0, 127, 1)",
            "rgba(63, 0, 91, 1)",
            "rgba(127, 0, 63, 1)",
            "rgba(191, 0, 31, 1)",
            "rgba(255, 0, 0, 1)"
        ]
    }

    render() {
        return (
            <div className="map-container">
                <Map google={this.props.google} style={style} zoom={13} className={"map"} initialCenter={{ lat: 28.644800, lng: 77.216721 }} >
                    <HeatMap gradient={this.state.gradient} positions={this.state.data} opacity={1} radius={20} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBTJUSLhZUVMWASvwteV4yoYvRvDl-rwho",
    libraries: ["visualization"]
})(Heatmap);