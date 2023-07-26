import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '12a00cb8256ec6f304e4a8e13204f9b2';
class App extends Component {

  state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    desc: '',
    error: '',
  }
  getweather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const data = await api.json();
    if (city !== '' && country !== '') {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: '',
      })
    } else {
      this.setState({
        temp: '',
        city: '',
        country: '',
        humidity: '',
        desc: '',
        error: 'Please enter a valid data',
      })
    }
  }



  render() {
    return (
      <div className='wrapper'>
        <div className='form-container'>
          <h1>Weather App by Mahmoud</h1>
          <Form getweather={this.getweather} />
          <Weather
            temp={this.state.temp} city={this.state.city} country={this.state.country}
            humidity={this.state.humidity} desc={this.state.desc} error={this.state.error}
          />
        </div>
      </div>
    )
  }

}

export default App;
