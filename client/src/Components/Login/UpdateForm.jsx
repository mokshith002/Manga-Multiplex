import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useHistory, Link} from 'react-router-dom';

export default function UpdateForm(params) {

    const URL = `http://localhost:${5000}`;

    const history = useHistory();

    const [options, setOptions] = useState([]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPass: '',
        empName: '',
        contactNo: '',
        role: '',
        education: ''
    })


    const submitUpdate = () => {

        if(formData.password !== formData.confirmPass){
            alert("Passwords do not match!");
            return;
        }

        axios.post(`${URL}/employees`,formData)
        .then(res => {
            if(res.data.success){
                history.push('/');
            }
            else{
                alert(res.data.message);
            }
        })
        .catch(
            err => console.log(err.message)
        );

        console.log(formData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitUpdate();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    return (
      <div class="flex-shrink needs-validation mt-5 pt-5 mt-3" noValidate>
        <form onSubmit={handleSubmit}>
          <div class="row">
            {" "}
            <h2>Update Employee</h2>{" "}
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

          <div class="row">
            <div class="mb-3 col">
              <label for="regPass1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="regPass1"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />
              <div class="invalid-feedback">Please enter a password.</div>
            </div>

            <div class="mb-3 col">
              <label for="regPass2" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="regPass2"
                value={formData.confirmPass}
                onChange={handleChange}
                name="confirmPass"
                required
              />
              <div class="invalid-feedback">Please enter confirm Password.</div>
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
          <div id="emailHelp" class="form-text">
            Already have an account? Login <Link to="/login">here</Link>.
          </div>
        </form>
      </div>
    );
};
