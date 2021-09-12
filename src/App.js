import React, { Component } from 'react';
import Form from './component/Form';
import Header from './component/Header';
import LocationView from './component/LocationView';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lon: '',
      lat: '',
      showData: false,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_LOCATIONIQ_API_KEY);
    let config = {
      method: 'GET',
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}`
    }
    axios(config).then(res => {
      let responsedData = res.data[0];
    
      this.setState({
        city_name: responsedData.display_name,
        lon: responsedData.lon,
        lat: responsedData.lat,
        showData: true
      })
      
    
    })
  }
  handleChange = (e) => {
    
    let cityName = e.target.value;
    this.setState({
      cityName: cityName,
    })
    
  }
  render() {
    return (
      <div>
        <Header />
        <Form handleClick={this.handleClick} handleChange={this.handleChange} />
        {
          this.state.showData&&
          <LocationView cityName={this.state.cityName}
          lon={this.state.lon}
          lat={this.state.lat}
        />
        }
        
      </div>
    )
  }
}

export default App
