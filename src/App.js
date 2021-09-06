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
      weatherData:[],
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

    this.getResponse()
  }

  getResponse = async () => {
    try {

      const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.cityName}&format=json`

      const srverUrl = `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.cityName}&lon=${this.state.locationData.lon}.91&lat=${this.state.locationData.lat}`


      const response = await axios.get(url)

      const serverResponse = await axios.get(srverUrl);
      

      console.log(serverResponse)
      this.setState({ locationData: response.data[0],showError: false, showCardData: true, weatherData : serverResponse})

      // console.log(this.state.weatherData.data)
      // console.log(this.state.locationData)
    } catch (err) {
      this.setState({
        showError: true,
        showCardData: false,
        messgeError: err.message
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
            weatherData = {this.state.weatherData}
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