import React from 'react';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import Map from '../Map/Map';
import './Location.css'

const Location = () => {
    return (
       <div className="container">
           <Header></Header>
            <div className="row">
            <div className="col-md-6">
                <Hotel></Hotel>
            </div>
            <div className="col-md-6">
                <Map></Map>
            </div>
        </div>
       </div>

    );
};

export default Location;