import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Room = ({ rooms }) => {
    const key = rooms.key;
    
    return (
        <Link to={'/flatdetails/'+key} className="row" style={{textDecoration: 'none',color:"black"}} >
            <div className="col-md-6 p-2" >
                <Card.Img style={{ borderRadius: "20px" }} variant="top" src={rooms.Img} />
            </div>
            <div className="col-md-6">
                <div>
                    <h6>{rooms.description}</h6>

                    <small>{rooms.facility}</small>
                    <small>{rooms.facility2}</small>
                    <br></br>
                    <br></br>
                    <small>{rooms.facility3}</small>
                </div>
                <br/>
              
                <div className="d-flex" >
                    <p className="ms-auto" >{rooms.price}$/<b>night</b></p></div>
            </div>
        </Link>
    );
};

export default Room;