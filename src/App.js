import React, { Component } from 'react';
import Form from './component/Form';
import Header from './component/Header';
import LocationView from './component/LocationView';
import Weather from './component/Weather';
import AlertMsg from './component/AlertMsg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MovieList from './component/MovieList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      lon: '',
      lat: '',
      showData: false,
      map: '',
      showWeather: false,
      weatherInfo: [],
      showAlert: false,
      showMovie: false,
      MovieInfo: [],
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.cityName !== '') {
      let config = {
        method: 'GET',
        baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}`
      }
      axios(config).then(res => {
        let responsedData = res.data[0];
        this.setState({
          city_name: responsedData.display_name,
          lon: responsedData.lon,
          lat: responsedData.lat,
          showData: true,
          map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responsedData.lat},${responsedData.lon}&zoom=1-18`,
        })

      })
        .then(() => {
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(
            res => {
              this.setState({
                showWeather: true,
                weatherInfo: res.data,
              })
              //console.log('from waether', this.state.weatherInfo)
            }
          )
        }).then(() => {
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies?searchQuery=${this.state.cityName}`).then(
            res => {
              this.setState({
                showMovie: true,
                MovieInfo: res.data,
              })
              //console.log('from movie', this.state.MovieInfo)
            }
          )
        })
      this.setState({
        showAlert: false
      })


    } else {
      this.setState({
        showAlert: true
      })

    }

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
        {
          this.state.showAlert && <AlertMsg />
        }
        <Form handleClick={this.handleClick} handleChange={this.handleChange} />
        {
          this.state.showData &&
          <LocationView cityName={this.state.cityName}
            lon={this.state.lon}
            lat={this.state.lat}
            map={this.state.map}
          />
        }
        <div className='row' style={{ backgroundColor:'beige'}}>
          {this.state.showWeather && <Weather weatherInfo={this.state.weatherInfo} cityName={this.state.cityName}/>
          }
  
        </div>

        <div className='row' style={{ backgroundColor:'cadetblue'}}>

          {this.state.showMovie && <MovieList MovieInfo={this.state.MovieInfo}/>
          }

        </div>

      </div>
    )
  }
}

export default App
