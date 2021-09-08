import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class Searchform extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city : ''
    }
  }
  handelOnChange = (e) => {
         this.setState({city : e.target.value})
    }
      handelSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.city)
      this.props.getLocationData(this.state.city)
  }
  render() {
    return (
      <div className='form'>
        <Form onSubmit={this.handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>enter city name</Form.Label>
            <Form.Control type="text" onChange={this.handelOnChange} placeholder="city name" />
          </Form.Group>
          <Button  type="submit">
            Explore
          </Button>
        </Form>
      </div>
    )
  }
}
export default Searchform;