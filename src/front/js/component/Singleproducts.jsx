import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleProducts = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [singleproducts, setsingleproducts] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/singleproducts/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setsingleproducts(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [params.uid])

    return (<>
        <div className="jumbotron jumbotron-fluid bg-light border rounded w-75 mx-auto mt-5 p-3 text-center">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" alt="Character Image" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="singleCardTitle">{people.name ? people.name : ""} | UID # {params.uid}</h1>
                        <p className="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare lacus nec magna suscipit dictum. Nullam sit amet viverra metus. Praesent facilisis dictum ipsum eu venenatis. Pellentesque imperdiet nunc non pulvinar viverra. Suspendisse sollicitudin egestas nisl at mattis. Nullam quis rutrum massa. Integer non turpis at felis facilisis viverra sit amet et mi. Mauris mattis magna turpis, nec consectetur erat congue quis. Phasellus eu nibh vitae arcu gravida maximus sagittis imperdiet massa. Aenean maximus eu velit ac tempus. Mauris at massa sed orci tempor auctor. Nunc auctor sapien non sem convallis cursus et quis lacus. Donec eleifend tellus vel lacinia consequat. Pellentesque ex felis, placerat non accumsan placerat, sagittis eget eros. Sed luctus turpis eu placerat pharetra. Pellentesque eleifend ac odio non ornare.</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <p className="text-danger">Something</p>
                        <p className="text-danger">{ }</p>
                    </div>
                    <div className="col-md-3">
                        <p className="text-danger">Something</p>
                        <p className="text-danger">{ }</p>
                    </div>
                    <div className="col-md-3">
                        <p className="text-danger">Something</p>
                        <p className="text-danger">{ }</p>
                    </div>
                    <div className="col-md-3">
                        <p className="text-danger">Something</p>
                        <p className="text-danger">{ }</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>

    </>)
}

export default People