import React from 'react';
import Card from 'react-bootstrap/Card'

class DisplayCardDate extends React.Component {

    render() {
        return (

            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.48d418fc1ff8d8e8eac08d65327e5dc1&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=18&markers=icon:large-red-cutout|${this.props.locationData.lat},${this.props.locationData.lon}`} />
                    <Card.Body>
                        <Card.Title>{this.props.locationData.display_name}</Card.Title>
                        <Card.Text>
                            <p>Latitude : {this.props.locationData.lat}</p>
                            <p>Longitude : {this.props.locationData.lon}</p>
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </div>


        )
    }

}

export default DisplayCardDate;
