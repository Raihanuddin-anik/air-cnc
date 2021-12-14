import React from 'react';

import { Card, Button } from 'react-bootstrap';

const Experience = ({ data }) => {
    return (

        <div className="col-md-3 col-6">
            <div >
                <Card.Img variant="top" src={data.authorImg} />
                <small >{data.destination}</small>

                <h6 className="heading">Some quick example text to </h6>

                <p>{data.price}$ per Person</p>
            </div>
        </div>

    );
};

export default Experience;