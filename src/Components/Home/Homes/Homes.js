import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Homes = ({ dt }) => {
    return (
        <div className="col-md-4">
            <divs >
                <Card.Img variant="top" src={dt.authorImg} />
                <small>{dt.destination}</small>

                <h6>Some quick example text to </h6>
                
             <p>{dt.price}$ per Person</p>


            </divs>
        </div>
    );
};

export default Homes;