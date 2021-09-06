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

      const response = await axios.get(url)

      this.setState({ locationData: response.data[0], showCardData: true })

      console.log(this.state.locationData)
      console.log(this.state.showCardData)
    } catch (err) {

      console.log('ssss');
      this.setState({
        showError: true,
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