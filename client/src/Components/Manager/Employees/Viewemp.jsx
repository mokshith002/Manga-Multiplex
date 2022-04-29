import React, {useState} from 'react';
import Grid from './EmpTable';
import { useHistory } from 'react-router-dom';
import ManagerOnly from '../../ManagerOnly';

export default function Viewemp() {

    const history = useHistory();

    const [authorized, setAuthorized] = useState(false);

    if (!localStorage.getItem("userId")) {
      history.push("/login");
    } else if (localStorage.getItem("userRole") == "manager") {
        if(!authorized)
        setAuthorized(true);
    }

    return (
      <div>
        {authorized ? (
          <Grid />
        ) : (
          <div>
            <div className="_register-page">
              <div
                className="d-flex p-5 justify-content-center align-items-center"
                style={{ height: "88vh" }}
              >
                <ManagerOnly />
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

