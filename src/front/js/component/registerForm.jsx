import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import axios from "axios";
import "../../styles/home.css";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post("/api/register", {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        is_active: formData.get("is_active"),
      })
      .then((response) => {
        console.log("User registered successfully");
        // add any additional code to handle successful registration here
      })
      .catch((error) => {
        console.log("Registration error:", error);
        // add any additional code to handle errors here
      });
  };
  return (
    <div className="background-image">
      <div className="row justify-content-center mt-4">
        <div className="register col-sm-4 rounded-3 m-5 p-3">
          <h3 className="row justify-content-center">Registration Form</h3>
          <form
            id="registerForm"
            action="/register"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="userName form-label" htmlFor="username">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div className="form-outline">
                  <label className="form-label" htmlFor="lastName">
                    Last Name:
                  </label>
                  <input
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
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group row mb-3">
              <div className="col-sm-6">
                <label htmlFor="birthday" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
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
                className="btn btn-outline-dark btn-lg mt-5"
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
