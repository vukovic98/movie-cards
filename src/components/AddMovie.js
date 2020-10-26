import React, {useState} from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';

export default function AddMovie({movies, update}) {

    const [movie, setMovie] = useState({'id':'', 'title':'', 'subtitle':'', 'description':'', 'year':'', 'imageUrl':'', 'rating':0});

    const resetMovie = () => {
        setMovie({'id':'', 'title':'', 'subtitle':'', 'description':'', 'year':'', 'imageUrl':'', 'rating':0});
    }

    const submitMovie = () => {
        const newMovies = movies.map((movieLi) => {
            return movieLi;
        })

        newMovies.push(movie);

        update(newMovies);
    }

    return(
        <div className="mt-3">
            <Form onSubmit={submitMovie} onReset={resetMovie}>
                <Card>
                    <Card.Header>
                        Add Movie
                    </Card.Header>

                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="number"
                                    required
                                    placeholder="Insert Movie ID"
                                    name="movie[id]"
                                    value={movie.id}
                                    onChange={(e) => setMovie({...movie, id: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="text"
                                    required
                                    placeholder="Insert Movie Title"
                                    name="movie[title]"
                                    value={movie.title}
                                    onChange={(e) => setMovie({...movie, title: e.target.value})}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="text"
                                    required
                                    placeholder="Insert Movie Subtitle"
                                    name="movie[subtitle]"
                                    value={movie.subtitle}
                                    onChange={(e) => setMovie({...movie, subtitle: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="text"
                                    required
                                    placeholder="Insert Movie Description"
                                    name="movie[description]"
                                    value={movie.description}
                                    onChange={(e) => setMovie({...movie, description: e.target.value})}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="number"
                                    required
                                    placeholder="Insert Movie Year"
                                    name="movie[year]"
                                    value={movie.year}
                                    onChange={(e) => setMovie({...movie, year: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="text"
                                    required
                                    placeholder="Insert Movie Image Url"
                                    name="movie[imageUrl]"
                                    value={movie.imageUrl}
                                    onChange={(e) => setMovie({...movie, imageUrl: e.target.value})}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>

                    <Card.Footer className="text-right">
                    <Button
                        size="sm"
                        variant="success"
                        type="submit"
                        className="mr-2"
                    >
                        Submit
                    </Button>
                    <Button size="sm" variant="info" type="reset">
                        Reset
                    </Button>
                    </Card.Footer>
                </Card>
            </Form>
        </div>
    );
}