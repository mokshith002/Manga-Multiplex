import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory, Link } from "react-router-dom";

export default function RegisterForm(params) {
  const URL = process.env.REACT_APP_SERVER;

  const id = localStorage.getItem('userId');

  const history = useHistory();

  const [options, setOptions] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    empName: "",
    contactNo: "",
    education: "",
  });

  const submitRegister = async () => {
    
    await axios.put(`${URL}/employees/${id}`, formData);
    history.push('/my-profile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitRegister();
  };

  const getDetails = async () => {
    const res = await axios.get(`${URL}/employees/${id}`);
    setFormData({
      empName: res.data.empname,
      email: res.data.email,
      contactNo: res.data.contactno,
      education: res.data.education
    })
  }

  useEffect(() => {
    getDetails();
  },[])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  return (
    <div class="flex-shrink needs-validation _update-form" noValidate>
      <form onSubmit={handleSubmit}>
        <div class="row">
          {" "}
          <h2>Edit Profile</h2>{" "}
        </div>

        <div class="mb-3 mt-3">
          <label for="validationCustom01" class="form-label">
            Name
          </label>
          <input
            type="tel"
            class="form-control"
            id="validationCustom01"
            value={formData.empName}
            onChange={handleChange}
            name="empName"
            required
          />
          <div class="invalid-feedback">Please enter a name.</div>
        </div>

        <div class="row">
          <div class="mb-3 col">
            <label for="regMail" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="regMail"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
            <div class="invalid-feedback">Please enter an email.</div>
          </div>

          <div class="mb-3 col">
            <label for="regPhone" class="form-label">
              Phone number
            </label>
            <input
              type="tel"
              class="form-control"
              id="regPhone"
              value={formData.contactNo}
              onChange={handleChange}
              name="contactNo"
              required
            />
            <div class="invalid-feedback">Please enter a mobileNo.</div>
          </div>
        </div>


        <div class="mb-3">
          <label for="education" class="form-label">
            Education
          </label>
          <input
            type="tel"
            class="form-control"
            id="education"
            value={formData.education}
            onChange={handleChange}
            name="education"
            required
          />
          <div class="invalid-feedback">Please enter education.</div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
       
      </form>
    </div>
  );
}
