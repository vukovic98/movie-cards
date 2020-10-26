import React, {useState} from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export default function MovieComponent({data, update}) {

    const [movie, setMovie] = useState(data);
    
    const deleteMovie = (id) => {
        update(id);
    }

    const changeRating = ( newRating, name ) => {
        const newRatingCalc = (parseFloat(movie.rating)!==0) ? 
        ((parseFloat(movie.rating)+parseFloat(newRating))/2) : (newRating);
        setMovie({...movie, rating: newRatingCalc});
    }

    console.log(movie);

    return(
        <div style={{'height':'500px'}} className="col-md-3 float-left mt-3">
            <Card>
                <Card.Header>
                <img className="card-img-top" style={{'height': '100px'}} src={movie.imageUrl} alt="" />
                    <h3>{data.title}</h3>
                </Card.Header>
                <Card.Body>
                    <b>Subtitle:</b> {movie.subtitle} <br/>
                    <b>Year:</b> {movie.year} <br/>
                    <b>Description:</b> {movie.description} <br/>
                    <b>Rate:</b> {movie.rating.toFixed(2)} <br/>
                </Card.Body>

                <Card.Footer>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteMovie(movie.id)}
                    >Delete</Button><br/>
                    <StarRatings
                        rating={movie.rating}
                        starDimension="40"
                        starSpacing="15"
                        changeRating={changeRating}
                        name='rating'
                    />
                </Card.Footer>
            </Card>
        </div>
    );
}