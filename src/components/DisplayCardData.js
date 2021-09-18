import React from 'react';
import Card from 'react-bootstrap/Card'

class DisplayCardDate extends React.Component {

    // renderIngrediants = (arr) =>{
    //     let newArr = arr.map(element => {
    //         return <p>{element}</p>
    //     })
    //     return newArr
    // }

    render() {
        let Ingrediants = this.props.locationData;
        console.log(Ingrediants);


        return (

            <div style={{ display: 'inline-block' }} >
                {
                    Ingrediants.map(element => {
                        return (

                            <Card style={{ width: '18rem' }}>
                                {<Card.Img variant="top" src={element.image} />}
                                {<Card.Body>
                                    <Card.Title>{element.label}</Card.Title>
                                    <Card.Text>
                                        <p>Ingrediants : </p>
                                        {

                                         element.ingredientLines.map((element) => {
                                                  return <p>{element}</p>
                                              }
                                        )
                                          }                                    
                                        <p>Calories : {element.calories}</p>
                                        <p>meal Type : {element.mealType}</p>
                                        <p>dish Type : {element.dishType}</p>

                                    </Card.Text>
                                </Card.Body>}
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayCardDate;
