import React, { Component } from "react";
import API from "../axios/Api";
// import Header from "./Header";

// export class AddProduct extends Component {
//   state = {
//     name: "",
//     description: "",
//     image: "",
//     id_category: "",
//     quantity: ""
//     // date_added: ""
//   };

  function AddProduct() {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState('')
    const [id_category, setId_category] = React.useState('')
    const [quantity, setQuantity] = React.useState('')

  // handlerChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  const handlerSubmit = async () => {
    var JWTToken = localStorage.getItem("auth");
    const newData = {name, description, image, id_category, quantity}
    window.event.preventDefault();
    await API.post("/products/users", newData, {
      headers: { auth: `${JWTToken}` }
    });
    // console.log(this.state);
    window.location.replace("/products");
  };

  // render() {
    return (
      <div className="container">
        <h2>Add Product</h2>

        <form onSubmit={handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value= {name}
                    className="form-control"
                    onChange={e => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <select
                    id="list"
                    name="description"
                    value={description}
                    className="form-control"
                    onChange={e => setDescription(e.target.value)}
                  >
                    <option value="">----- Description -----</option>
                    <option value="Registered">Registered</option>
                    <option value="Unregistered">Unregistered</option>
                    <option value="In Process">In Process</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input
                    type="text"
                    name="image"
                    className="form-control"
                    onChange={e => setImage(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Category</td>
                <td>
                  <select
                    id="list"
                    name="id_category"
                    className="form-control"
                    onChange={e => setId_category(e.target.value)}
                  >
                    <option value="">----- Category -----</option>
                    <option value="1" name="id_category">
                      Bed
                    </option>
                    <option value="2" name="id_category">
                      Sofa
                    </option>
                    <option value="3" name="id_category">
                      Chest
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    onChange={e => setQuantity(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="Add"
                    // className="form-control"
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

export default AddProduct;
