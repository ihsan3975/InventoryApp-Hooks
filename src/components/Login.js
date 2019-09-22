import React from "react";
import API from "../axios/Api";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

  function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

  const handlerSubmit = async () => {
    const newData = {email, password}
    window.event.preventDefault();
    await API.post("/login", newData).then(response =>
        localStorage.setItem('auth', response.data.token)
      )
      if (localStorage.getItem("auth") === "undefined") {
        confirmAlert({
          title: "Access Denied!",
          message: "Login Again?",
          buttons: [
            {
              label: "Yes",
              onClick: () => {}
            },
            {
              label: "No",
              onClick: () => {
                window.location.replace("/home");
              }
            }
          ]
        });
      } else {
        window.location.replace("/products");
      }
  };

    return (
      <div className="container">
        <h2>Login</h2>

        <form onSubmit={handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Enter Email'
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
                    placeholder='Password'
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Login"
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

export default Login;
