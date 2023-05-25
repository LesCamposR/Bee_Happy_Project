import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm();

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

    let { respuestaJson, response } = await actions.useFetch(
      "/api/register",
      {
        name,
        lastName,
        email,
        password,
        phoneNumber,
        birthday,
        is_active: true,
      },
      "POST"
    );

    console.log("Registration response:", response);
    console.log("Registration response JSON:", respuestaJson);

    setRegistrationSuccess(true);
  };

  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="row justify-content-center mt-4">
        <div className="register col-sm-8 col-md-6 col-lg-4 rounded-3 m-5 p-3">
          <h3 className="text-center text-white">Registro de usuario</h3>
          <form
            id="registerForm"
            action="/register"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-outline">
                  <label className="form-label text-white" htmlFor="username">
                    Nombre:
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
                    Apellido:
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
                Correo:
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
                Contraseña:
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
                Teléfono:
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
                  Fecha de nacimiento:
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
                  Género:
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Seleccciona</option>
                  <option value="male">Hombre</option>
                  <option value="female">Mujer</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              {registrationSuccess ? (
                <Link to="/Login" className="btn btn-success btn-lg mt-5">
                  Ir a Login
                </Link>
              ) : (
                <button
                  type="submit"
                  className="btn btn-outline-light btn-lg mt-5"
                >
                  Registrarte
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
