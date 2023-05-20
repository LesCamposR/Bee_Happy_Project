import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import useFetch from "../store/flux";
import "../../styles/home.css";
import background from "../../img/Green.jpg";

export const RegisterForm = () => {
  const { store, actions } = useContext(Context);

  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("username");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");
    const birthday = formData.get("birthday");
    const gender = formData.get("gender");

    let { respuestaJson, response } = await actions.useFetch("/api/register", {
      name,
      lastName,
      email,
      password,
      phoneNumber,
      birthday,
      is_active: true,
    });

    console.log("Registration response:", response);
    console.log("Registration response JSON:", respuestaJson);
  };

  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="row justify-content-center mt-4">
        <div className="register col-sm-4 rounded-3 m-5 p-3">
          <h3 className="row justify-content-center text-white">
            Registration Form
          </h3>
          <form
            id="registerForm"
            action="/register"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-outline">
                  <label
                    className="userName form-label text-white"
                    htmlFor="username"
                  >
                    Username:
                  </label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="form-label text-white" htmlFor="lastName">
                    Last Name:
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="form-label text-white" htmlFor="email">
                Email:
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label text-white" htmlFor="password">
                Password:
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label text-white" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                name="phoneNumber"
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-6">
                <label htmlFor="birthday" className="form-label text-white">
                  Birthday
                </label>
                <input
                  name="birthday"
                  type="date"
                  className="form-control"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="gender" className="form-label text-white">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="submit"
                className="btn btn-outline-light btn-lg mt-5"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
