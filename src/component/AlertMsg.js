import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'

 class AlertMsg extends Component {
    render() {
        return (
            <Alert variant='warning' style={{marginTop:'40px'}}>
            ERROR: something went wrong!
            CHECK your country/city name
            </Alert>
        )
    }
}

export default AlertMsg
