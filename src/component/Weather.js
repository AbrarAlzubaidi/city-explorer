import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                <h6>lat: {this.props.date}</h6>
                <h6>lon: {this.props.lon}</h6>

            </div>
        )
    }
}

export default Weather