import React, { Component } from 'react';
import axios from 'axios'
import Searchform from './components/Searchform';
import DisplayCardDate from './components/DisplayCardData';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      cityName : '',
      locationData : {}

    }

  }
  getLocationData = async (city) => {
    await this.setState({cityName : city
    })
    
    console.log('cityname : '+this.state.cityName)
    this.getResponse()
  }

  getResponse = async () => {
    const url = `https://eu1.locationiq.com/v1/search.php?key=pk.48d418fc1ff8d8e8eac08d65327e5dc1&q=${this.state.cityName}&format=json`

    const response = await axios.get(url)

    this.setState({locationData : response.data[0]})


    console.log(this.state.locationData)

    
  }
  render() {


    return (
      <div>
        <Searchform 
        getLocationData = {this.getLocationData}
        />
        <DisplayCardDate
        locationData = {this.state.locationData}
        />       

        <div>
          
        </div>
      </div>

    )
  }


}
export default App;