import React from 'react';
import MovieComponent from './MovieComponent';

export default function Movies({movies, update}) {
    console.log(movies);
    const changeMovies = (id) => {

        const newMovies = movies.filter((movie) => movie.id != id);

        update(newMovies);
    }

    return(
        <div>
            {
                movies.map((movie) => {
                    return(<MovieComponent key={movie.id} data={movie} update={changeMovies}/>);
                })
            }
        </div>
    );
}