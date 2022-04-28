import React from 'react';
import UpdateForm from './UpdateForm';
import "../Login/Login.css"
import { useHistory } from 'react-router-dom';

export default function Register() {

    const history = useHistory();

    if(!localStorage.getItem('userId')) history.push('/login');

    return(
        
        <div className='_update-page'>
            <div className='d-flex p-5 justify-content-center align-items-center' style={{height: "88vh"}}>
                <UpdateForm/>
            </div>
        </div>
    )
}


