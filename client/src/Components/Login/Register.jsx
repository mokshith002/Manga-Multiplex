import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import ManagerOnly from '../ManagerOnly';

export default function Register() {

    const history = useHistory();

    const [authorized, setAuthorized] = useState(false)

    if(!localStorage.getItem('userId')){
      history.push('/login');
    }

    else if(localStorage.getItem('userRole') == 'manager'){
      if(!authorized)
        setAuthorized(true);
    }

    return (
      <div className="_register-page">
        <div
          className="d-flex p-5 justify-content-center align-items-center"
          style={{ height: "88vh" }}
        >
          {authorized ? <RegisterForm /> 
            : <ManagerOnly />
            }
        </div>
      </div>
    );
}

