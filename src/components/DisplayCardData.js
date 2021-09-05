import React from 'react';
import Card from 'react-bootstrap/Card'

class DisplayCardDate extends React.Component {

    render() {
        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.locationData.icon} />
                    <Card.Body>
                        <Card.Title>{this.props.locationData.display_name}</Card.Title>
                        <Card.Text>
                            <p>{this.props.locationData.lat}</p>
                            <p>{this.props.locationData.lon}</p>
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </div>


        )
    }

}

export default DisplayCardDate;
