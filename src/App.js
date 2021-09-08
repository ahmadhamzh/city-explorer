import React, { Component } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Searchform from './components/Searchform';
import DisplayCardDate from './components/DisplayCardData';
import Movieslist from './components/Movieslist';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      locationData: {},
      weatherData: [],
      showCardData: false,
      showMoviesList: false,
      messgeError: '',
      showError: false,
      moviesList: [],
    }

  }
  getLocationData = async (city) => {
    await this.setState({
      cityName: city

    })

    this.getResponse()
  }

  getResponse = async () => {
    try {

      const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.cityName}&format=json`
      const response = await axios.get(url)
      await this.setState({ locationData: response.data[0], showCardData: true, showError: false, showMoviesList: true })


      const srverUrl = `http://localhost:3001/weather?&lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`
      const serverResponse = await axios.get(srverUrl);
      await this.setState({ weatherData: serverResponse.data });

      const serverMoviesUrl = `http://localhost:3001/moveis?query=${this.state.cityName}`;
      const serverMoviesResponse = await axios.get(serverMoviesUrl)
      await this.setState({ moviesList: serverMoviesResponse.data });
      
    } catch (err) {
      this.setState({
        showError: true,
        messgeError: err.message,
        showCardData: false,
        showMoviesList: false,
      })
    }


  }
  render() {
    return (
      <div>
        <Searchform
          getLocationData={this.getLocationData}
        />

        <div className='display'>
          {
            this.state.showCardData &&
            <DisplayCardDate
              locationData={this.state.locationData}
              weatherData={this.state.weatherData}
            />
          }

          {
            this.state.showMoviesList &&
            <Movieslist
              moviesList={this.state.moviesList}
            />
          }

          {
            this.state.showError &&
            <Alert >
              {this.state.messgeError}
            </Alert>
          }

        </div>

      </div>

    )
  }
}
export default App;