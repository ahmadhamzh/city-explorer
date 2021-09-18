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
      locationData: [],
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
  // https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=a2e340f9&app_key=76ad5cfe20a12f9e1aed43cb5ab1a364&field=label&field=image&field=dietLabels&field=ingredientLines&field=calories&field=mealType
  getResponse = async () => {
    try {

      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.state.cityName}&app_id=a2e340f9&app_key=76ad5cfe20a12f9e1aed43cb5ab1a364&field=label&field=image&field=dietLabels&field=ingredientLines&field=calories&field=mealType&field=dishType`

      // const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.cityName}&format=json`
      const response = await axios.get(url)
      console.log(response.data.hits[0].recipe);
      let responseArr = [];
      for (let i = 0; i < 4 ; i++) {
        responseArr.push(response.data.hits[i].recipe)
        
      }
      await this.setState({ locationData: responseArr, showCardData: true, showError: false, showMoviesList: true })


      // const srverUrl = `${process.env.REACT_APP_SERVER_URL}/weather?&lon=${this.state.locationData.lon}&lat=${this.state.locationData.lat}`
      // const serverResponse = await axios.get(srverUrl);
      // await this.setState({ weatherData: serverResponse.data });

      // const serverMoviesUrl = `${process.env.REACT_APP_SERVER_URL}/moveis?query=${this.state.cityName}`;
      // const serverMoviesResponse = await axios.get(serverMoviesUrl)
      // await this.setState({ moviesList: serverMoviesResponse.data });
      
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