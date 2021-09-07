import React, { Component } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Searchform from './components/Searchform';
import DisplayCardDate from './components/DisplayCardData';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      locationData: {},
      weatherData: [],
      showCardData: false,
      messgeError: '',
      showError: false

    }

  }
  getLocationData = async (city) => {
    await this.setState({
      cityName: city

    })
    console.log('cityname : ' + this.state.cityName)
    console.log('location data : ' + this.state.weatherData)

    this.getResponse()
  }

  getResponse = async () => {
    try {

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.cityName}&format=json`

    const response = await axios.get(url)

    await this.setState({ locationData: response.data[0], showCardData: true, showError: false, })

    const srverUrl = `http://localhost:3001/weather?&lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`



    const serverResponse = await axios.get(srverUrl);

    await this.setState({ weatherData: serverResponse.data })


    console.log('get Response');
    console.log(this.state.weatherData.data)
    console.log(this.state.locationData)
    } catch (err) {

      console.log('ssss');
      console.log(this.state.weatherData)
      this.setState({
        showError: true,
        messgeError: err.message,
        showCardData: false
      })



    }


  }
  render() {


    return (
      <div>
        <Searchform
          getLocationData={this.getLocationData}
        />
        {
          this.state.showCardData &&
          <DisplayCardDate
            locationData={this.state.locationData}
            weatherData={this.state.weatherData}
          />
        }

        {
          this.state.showError &&
          <Alert >
            {this.state.messgeError}
          </Alert>
        }

        <div>

        </div>
      </div>

    )
  }


}
export default App;