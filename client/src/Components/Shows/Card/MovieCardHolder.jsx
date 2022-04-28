import React, { Component, useState, useEffect } from 'react';
import Card from './MovieCard';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import "./Cards.css"

export default function CardHolder(props) {
    
    const history = useHistory();

    if(!localStorage.getItem('userId')) history.push('/login');

    const O_URL = process.env.REACT_APP_OMDB_URL;
    const O_KEY = process.env.REACT_APP_OMDB_KEY;
    const S_URL = process.env.REACT_APP_SERVER;

    const [cards, setCards] = useState([]);
    const [movies, setMovies] = useState([]);
    const [details, setDetails] = useState({
        id:null,
        title: '',
        poster: '',
        plot: ''
    })

    useEffect(() => {
        if(!details.id) return;

        setCards((prev) => [
            ...prev,
            <Card name={details.title} plot={details.plot} id={details.id} poster={details.poster} handleClick={handleNavigate}/>
        ])
    },[details]);

    const apiCall = async (movieName, id) => {
        const res = await axios.get(`${O_URL}/?t=${movieName}&apikey=${O_KEY}`);
        setDetails({
            id: id,
            title: res.data.Title,
            poster: res.data.Poster,
            plot: res.data.Plot,
        });
    }

    
    const getDetails = async () => {
        await movies.forEach(movie => {
            const {moviename, movieid} = movie;
            const queryName = moviename.split(' ').join('+');
            apiCall(queryName, movieid);
        })
    }

    useEffect(() => {
        if(!movies.length) return;
        // console.log(movies);
        getDetails();
    }, [movies]);

    const getMovies = async () => {
        const result = await axios.get(`${S_URL}/movie`);
        console.log(result.data);
        setMovies(result.data);
    }

    useEffect(() => {
        console.log("Hello");
        getMovies();
    }, []);
    
    
    
    const handleNavigate = (movieId) => {
        history.push(`/movie/${movieId}`);
    }

   

    return (
      <div className="_movie-card-container">
        <div className="row text-center __bg">
          <h2 className="mb-3 mt-5 _movie-heading ">Select Movie</h2>
        </div>
        <div className="container p-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
            {cards}
          </div>
        </div>
      </div>
    );
};