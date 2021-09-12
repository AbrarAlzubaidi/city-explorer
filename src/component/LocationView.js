import React, { Component } from 'react';
class LocationView extends Component {
    render() {
        return (
            <div>
                <h2>City name: {this.props.cityName}</h2>
                <h4> lon: {this.props.lon}</h4>
                <h4> lat: {this.props.lat}</h4>
                <img src={this.props.map} alt='.....'/>

            </div>
        )
    }
}

export default LocationView
