import React from "react";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className="container">
                    <a className="navbar-brand" href="#">CURRENT WEATHER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" >
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.google.com/maps">Maps</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </nav>
            
            
        </>
    )
}
export default Navbar;