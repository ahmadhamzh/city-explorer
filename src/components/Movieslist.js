'use strict'
import React from 'react';
import Card from 'react-bootstrap/Card'

class Movieslist extends React.Component {

    render() {

        let listOfMovies = this.props.moviesList

        console.log(listOfMovies)

        return (

            listOfMovies.map (element => {

            return(

                <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${element.imgUrl}`} />
                    <Card.Body>
                    <Card.Title>movie Name : {element.title}</Card.Title>
                    <Card.Text>
                    <p>overview : {element.overview}</p>
                    <p>average_votes : {element.voteAvarege}</p>
                    <p>totalVotes : {element.totalVotes}</p>
                    <p>popularity : {element.popularity}</p>                                           
                    <p>releaseDate : {element.releaseDate}</p>                                           
                </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                )
            })


        )
    }

}

export default Movieslist;