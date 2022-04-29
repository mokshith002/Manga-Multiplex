import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory, Link, useParams } from "react-router-dom";
import "./ShowForm.css";

export default function AddShowForm(params) {
  const history = useHistory();
  const URL = process.env.REACT_APP_SERVER;

  const {id} = useParams();

  const [newMovie, setNewMovie] = useState("");
  const [movieName, setMovieName] = useState("");
  const [hallOptions, setHallOptions] = useState([]);
  const [formData, setFormData] = useState({
    movieId: 0,
    hallNo: 0,
    startTime: "00:00",
    price: 0,
  });


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

  const getData = async () => {
      const res = await axios.get(`${URL}/show/${id}/movie-name`);
      console.log(res.data);
      setMovieName(res.data.moviename);
      setFormData({
        movieId: res.data.movieid,
        hallNo: res.data.hallno,
        startTime: res.data.starttime,
        price: res.data.price
      });
  }

  useEffect(() => {
    getHalls();
    getData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };


  useEffect(() => {
    console.log(newMovie);
  }, [newMovie]);

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const updateShow = async () => {
    await axios.put(`${URL}/show/${id}`, formData);
    history.push("/all-shows");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.movieId) {
      alert("Select Movie");
      return;
    } else if (!formData.hallNo) {
      alert("Select Hall ID");
      return;
    }
    updateShow();
  };

  return (
    <div class="flex-shrink needs-validation mt-1 pt-5" noValidate>
      <form onSubmit={handleSubmit}>
        <div class="row">
          {" "}
          <h2>Update Show</h2>{" "}
        </div>

        <div class="mb-3 mt-3">
          <label for="select1" class="form-label">
            Movie Name
          </label>
          <input
            type="text"
            class="form-control"
            id="select1"
            value={movieName}
            onChange={handleChange}
            name="time"
            required
          />
          <div class="invalid-feedback">Please enter a name.</div>
        </div>

        <div class="row">
          <div class="mb-3 col">
            <label for="select1" class="form-label">
              Select Hall ID
            </label>
            {/* <Select
              class="form-select"
              id="select1"
              onChange={handleOptionChange}
              name="hallNo"
              options={hallOptions}
              required
            /> */}
            <select className="form-select" id="select1" onChange={handleChange} value={formData.hallNo} name="hallNo" required>
                {
                    hallOptions.map((id) => (
                        <option value={id.value}>{id.label}</option>
                    ))
                }
            </select>
            
          </div>

          <div class="mb-3 col">
            <label for="regPhones" class="form-label">
              Show Time
            </label>
            <input
              type="time"
              class="form-control"
              id="regPhones"
              value={formData.startTime}
              onChange={handleChange}
              name="startTime"
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

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
