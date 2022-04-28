import React from 'react';
import RegisterForm from './RegisterForm';

export default function Register() {

    return (
      <div className="_register-page">
        <div
          className="d-flex p-5 justify-content-center align-items-center"
          style={{ height: "88vh" }}
        >
          <RegisterForm />
        </div>
      </div>
    );
}

