import React from "react";
import API from "../axios/Api";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

  export function Register () {
    const [full_name, setFull_name] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  

  const handlerSubmit = async () => {
    const newData = {full_name, email, password}
    // var JWTToken = localStorage.getItem("auth");
    window.event.preventDefault();
    await API.post("/register", newData);

    confirmAlert({
      title: "Register Success",
      message: "Wanna Access Products?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            window.location.replace("/login");
          }
        },
        {
          label: "No",
          onClick: () => {
            window.location.replace("/home");
          }
        }
      ]
    });
  };

    return (
      <div className="container">
        <h2>Register</h2>

        <form onSubmit={handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>
                  <input
                    type="text"
                    name="full_name"
                    onChange={e => setFull_name(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
// }

export default Register;
