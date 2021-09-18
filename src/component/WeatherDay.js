import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';



class WeatherDay extends Component {
    render() {
        let cityName = this.props.cityName;
        let date = this.props.date;
        let description = this.props.description;

        return (
            <div className='col-md-4' style={{ margin: '17px' }}>
                <Alert variant="success">
                    <Alert.Heading>{cityName}</Alert.Heading>
                    <p>
                        the date: {date}
                    </p>
                    <hr />
                    <p className="mb-0">
                        the weather of the date: {description}
                    </p>
                </Alert>
            </div>
        )
    }
}

export default WeatherDay
