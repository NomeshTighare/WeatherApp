import React from 'react'
import One from "./img/one.jpg"
import Two from "./img/two.jpg"
import Three from "./img/three.jpg"
import Four from "./img/four.jpg"
import Five from "./img/five.jpg"


export default function Slider() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-7">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={One} className="d-block w-100 rounded" alt="..." width="700px" height="300px" />
                    </div>
                    <div className="carousel-item">
                        <img src={Two} className="d-block w-100 rounded" alt="..." width="700px" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Three} className="d-block w-100 rounded" alt="..." width="700px" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Four} className="d-block w-100 rounded" alt="..." width="700px" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Five} className="d-block w-100 rounded" alt="..." width="700px" height="300px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button><br/>
            </div>
        </div>    
        </div>
            </div>
    )
}