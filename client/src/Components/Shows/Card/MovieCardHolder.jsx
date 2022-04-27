import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function CardHolder(props) {

    const [cards, setCards] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [details, setDetails] = React.useState({
      plot: '',
      poster: ''
    })

    // const cardComponents = cardarr.map(card => (
    //     <div className="col-3" key={card._id}>
    //         <Card title={}/>
    //     </div>
    // ));

    const URL = `http://localhost:${3001}`;

    const getMovies = async () => {
        const res = await axios.get(`${URL}/movie`);
        setMovies(res.data);
        createCards();
    }

    const req = async(mn)=>{
        const res = await axios.get(`http://www.omdbapi.com/?t=${mn}&apikey=934ea8b2`);
        
        setDetails((prev)=>({
            ...prev,
            plot: res.data.Plot,
            poster: res.data.Poster,
        }))

    }
    const createCards = () => {
        setCards(() => {
            return movies.map((movie) => {
                const {movieid,moviename} = movie;
                
                const mn = moviename.split(' ').join('+');
                req(mn);        
                console.log(details);
    
                return( 
                    <MovieCard movieName = {moviename} key = {movieid} movieId = {movieid} moviePoster={details.poster} desc = {details.plot}/>
                )
            })
        });

        setLoading(false);
    }

    React.useEffect(() => {
        getMovies();
    },[loading])

    React.useEffect(()=>{

    },[details]);

    return (
        <div className="container p-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                {cards}
            </div>
        </div>
    );
};