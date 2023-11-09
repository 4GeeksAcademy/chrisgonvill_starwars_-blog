import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";


const Home = () => {

    const { actions, store } = useContext(Context)
    console.log(store.character)




    return (
        <div>
            {store.character.map((item, index) => (
                <div class="card" key={index} style={{ width: "18rem" }}>
                    <img src="https://swapi.dev/api/people/1" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-primary">Learn More</button>
                            <button class="btn btn-warning me-md-2" type="button">
                            <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}

export default Home