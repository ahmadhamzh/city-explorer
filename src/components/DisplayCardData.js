import React from 'react';
import Card from 'react-bootstrap/Card'

class DisplayCardDate extends React.Component {

    render() {

        let weatherState = this.props.weatherData.data.map((element) => {
            return <p>{element.date} : {element.description}</p>

        }
        )
            
    return (

            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=18&markers=icon:large-red-cutout|${this.props.locationData.lat},${this.props.locationData.lon}`} />
                    <Card.Body>
                        <Card.Title>{this.props.locationData.display_name}</Card.Title>
                        <Card.Text>
                            <p>Latitude : {this.props.locationData.lat}</p>
                            <p>Longitude : {this.props.locationData.lon}</p>
                            <p>expected weather for next 3 days</p>
                            {weatherState}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        )
    }

}

export default DisplayCardDate;
