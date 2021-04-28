import React, { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import MakePayment from '../Payment/MakePayment';
import Payment from '../Payment/Payment';


const Confirm = () => {

    const [flatDetails, setflatDetails] = useContext(UserContext);
    var arr = JSON.parse(localStorage.getItem('user'));
    const totalPrice = flatDetails.price * arr.totalPerson
    return (
        <div className="container">
            <h6 className="heading fs-5"><span style={{ color: "black" }}>1.Reviews House Rules</span> {'>'} &nbsp;<span style={{ color: "black" }}>2.Who's Coming  {'>'} </span> &nbsp;<span style={{ color: "black" }}> 3.Confirm and Pay</span></h6>
            <div className="row">
                <div className="col-md-6">
                    <MakePayment></MakePayment>
                </div>


                <div className="col-md-6" style={{ paddingLeft: '50px' }}>
                    <Card className="cart" style={{ width: '25rem' }}>
                        <Card.Body>
                            <div className="d-flex">
                                <Card.Title> {flatDetails.description}</Card.Title>
                                <Card.Img className="ms-auto img-fluid w-50" src={flatDetails.Img}></Card.Img>
                            </div>
                            <Card.Subtitle className="mb-2">5 Rating</Card.Subtitle>
                            <Card.Text>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <b>start date</b>

                                        <input className="p-2" style={{ width: '100%', height: '40px', borderRadius: '8px' }} value={arr.startDate}
                                            placeholder="dd-mm-yyyy" />

                                    </div>

                                    {arr.endDate ? <div >
                                        <b>end date</b>
                                        <input className="p-2" style={{ width: '100%', height: '40px', borderRadius: '8px' }} value={arr.endDate}
                                            placeholder="dd-mm-yyyy" />
                                    </div> : <p>please provide end date</p>}
                                </div>
                                <br />
                                <h6>Guests </h6>
                                <input className="p-2" style={{ width: '100%', height: '40px', borderRadius: '8px' }} value="3 Guest" />
                                <br />
                                <br />
                                <div className="d-flex">
                                    <small>${flatDetails.price}  X {arr.totalPerson}</small>
                                    <small className="ms-auto">${totalPrice}</small>

                                </div>
                                <hr></hr>
                                <div className="d-flex">
                                    <small>Cleaning Fee</small>
                                    <small className="ms-auto">$15</small>

                                </div>
                                <hr></hr>
                                <div className="d-flex">
                                    <p>Service Fee</p>
                                    <p className="ms-auto">$10</p>

                                </div>
                                <div className="d-flex">
                                    <h5>Total</h5>
                                    <p className="ms-auto">{totalPrice + 15 + 10}</p>
                                </div>

                            </Card.Text>
                            
                        </Card.Body>
                        <button className="btn w-100">Place</button>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Confirm;