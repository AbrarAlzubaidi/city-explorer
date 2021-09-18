import React, { Component } from 'react'
import WeatherDay from './WeatherDay'

class Weather extends Component {
    render() {
        let weatherInfo = this.props.weatherInfo;
        let cityName = this.props.cityName;
        return (
            <div >
                {
                    weatherInfo.map(value => {
                        return <WeatherDay cityName={cityName}
                            date={value.date}
                            description={value.description}
                        />
                    })
                }

            </div>

        )
    }
}

export default Weather