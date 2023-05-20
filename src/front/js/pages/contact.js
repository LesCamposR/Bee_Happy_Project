import React, {
    useState
} from "react";
import background from "../../img/Sunset.jpg";

export const Contact = () => {
    const [message, setMessage] = useState("");

<<<<<<< HEAD
    return ( <
        div style = {
            {
                backgroundImage: `url(${background})`,
            }
        } >
        <
        div className = "container mt-5" >
        <
        div className = " row justify-content-center mt-5" >
        <
        h3 className = "row title justify-content-center text-white" > {
            " "
        }
        Contact {
            " "
        } <
        /h3>{" "} <
        div className = "Contanct col-sm-4 rounded-3 m-3 p-3 border" >
        <
        form >
        <
        label className = "form-label fs-5" > Full Name < /label>{" "} <
        input type = "text"
        className = "form-control mb-3"
        placeholder = "Enter Full Name" /
        >
        <
        label className = "form-label fs-5" > Email < /label>{" "} <
        input type = "email"
        className = "form-control mb-3"
        placeholder = "Enter email" /
        >
        <
        label htmlFor = "phone"
        className = "form-label fs-5" >
        Phone {
            " "
        } <
        /label>{" "} <
        input type = "text"
        className = "form-control mb-3"
        placeholder = "Enter phone" /
        >
        <
        label htmlFor = "phone"
        className = "form-label fs-5" >
        Comentario {
            " "
        } <
        /label>{" "} <
        textarea type = "text-area"
        class = "form-control mb-3"
        placeholder = "Enter your commit" >
        < /textarea>{" "} <
        div className = "d-flex justify-content-center" >
        <
        button type = "button"
        className = "button-save col-md-6 btn btn-outline-light fs-6 fw-bold" >
        Enviar {
            " "
        } <
        /button>{" "} <
        /div>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};
=======
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mt-5">
        <h3 className="title"> Contact </h3>
        <div className="col-sm-4 rounded-3 m-3 p-3 border">
          <form>
            <label className="form-label fs-5">Nombre Completo</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Full Name"
            />
            <label className="form-label fs-5">Correo</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email"
            />
            <label htmlFor="phone" className="form-label fs-5">
              Telefono
            </label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter phone"
            />
            <label htmlFor="phone" className="form-label fs-5">
              Comentario
            </label>
            <textarea
              type="text-area"
              className="form-control mb-3"
              placeholder="Enter your commit"
            ></textarea>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="button-save col-md-6 btn btn-primary fs-6 fw-bold"
              >
                Enviar{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
>>>>>>> Jonathan
