import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory, Link } from "react-router-dom";
import "./ShowForm.css";

export default function AddShowForm(params) {
  const history = useHistory();
  const URL = process.env.REACT_APP_SERVER;

  const [reload, setReload] = useState(false);
  const [newMovie, setNewMovie] = useState('');
  const [movieOptions, setMovieOptions] = useState([]);
  const [hallOptions, setHallOptions] = useState([]);
  const [formData, setFormData] = useState({
    movieId: 0,
    hallNo: 0,
    time: "00:00",
    price: 0,
  });

  const getMovies = async () => {
    const res = await axios.get(`${URL}/movie`);
    setMovieOptions(
      res.data.map((movie) => ({
        value: movie.movieid,
        label: movie.moviename,
      }))
    );
  };

  const getHalls = async () => {
    const _res = await axios.get(`${URL}/hall/all/id`);
    setHallOptions(
      _res.data.map((hall) => ({
        value: hall.id,
        label: hall.id,
        name: "hallNo",
      }))
    );
  };

  useEffect(() => {
    getMovies();
    getHalls();
  }, [reload]);

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleNewMovieChange = (event) => {
    const { value } = event.target;
    setNewMovie(value);
  };

  const handleOptionChange = (event) => {
    const { name, value } = event;
    name === "hallNo"
      ? setFormData((prev) => ({ ...prev, hallNo: value }))
      : setFormData((prev) => ({ ...prev, movieId: value }));
  };

  const addMovieHandler = async () => {
    if (newMovie == "") {
      alert("Enter a Movie to add!");
      return;
    }
    await axios.post(`${URL}/movie`, { movieName: newMovie });
  };

  useEffect(() => {
    console.log(newMovie);
  },[newMovie])

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const addShow = async () => {
    await axios.post(`${URL}/show`, formData);
    history.push('/movies');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formData.movieId){
      alert("Select Movie");
      return;
    }
    else if(!formData.hallNo){
      alert('Select Hall ID');
      return;
    }
    addShow();
  }

  return (
    <div class="flex-shrink needs-validation mt-1 pt-5" noValidate>
      <form>
        <div class="row">
          {" "}
          <h2>Add Show</h2>{" "}
        </div>

        <div class="mb-3">
          <label for="regPass1" class="form-label">
            Add a new Movie
          </label>
          <div className="_add-movie-row row">
            <input
              type="text"
              className="form-control _add-movie-input col-12 "
              id="regPass1"
              value={newMovie}
              onChange={handleNewMovieChange}
              name="password"
            />
            <button
              className="btn btn-success _add-movie-btn col-4"
              onClick={addMovieHandler}
            >
              Add
            </button>
          </div>
        </div>

        <div class="mb-3 mt-3">
          <label for="select1" class="form-label">
            Select Movie
          </label>
          <Select
            class="form-select"
            id="select1"
            name="theaterId"
            onChange={handleOptionChange}
            options={movieOptions}
            required
          />
          <div class="invalid-feedback">Please enter a name.</div>
        </div>

        <div class="row">
          <div class="mb-3 col">
            <label for="select1" class="form-label">
              Select Hall ID
            </label>
            <Select
              class="form-select"
              id="select1"
              onChange={handleOptionChange}
              name="hallNo"
              options={hallOptions}
              required
            />
            {/* <select value={formData.hallNo} onChange={handleChange} className="form-select" id="select1" name="hallNo">
              {
                hallOptions.map((hall) => (
                  <option value={hall.value}>{hall.label}</option>
                ))
              }
            </select> */}
          </div>

          <div class="mb-3 col">
            <label for="regPhones" class="form-label">
              Show Time
            </label>
            <input
              type="time"
              class="form-control"
              id="regPhones"
              value={formData.time}
              onChange={handleChange}
              name="time"
              required
            />
          </div>

          <div class="mb-3 col">
            <label for="regPhone" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
              id="regPhone"
              value={formData.price}
              onChange={handleChange}
              name="price"
              required
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
