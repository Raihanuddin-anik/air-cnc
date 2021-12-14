import React, { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faSmoking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Review.css'
import { UserContext } from '../../App';

const Review = () => {

    const [flatDetails, setflatDetails] = useContext(UserContext);
    var arr = JSON.parse(localStorage.getItem('user'));
    const totalPrice = flatDetails.price * arr.totalPerson
  
    return (
        <div className='container'>
            <h6 className="heading fs-5"><span  style={{color:"black"}} >1.Reviews House Rules</span> {'>'} &nbsp;<span >2.Who's Coming </span> {'>'} &nbsp;<span> 3.Confirm and Pay</span></h6>
            <div className="row" style={{ boxSizing: "border-box" }}>
                <div className=" col-md-6 mt-3">
                    <h2>Review House and Rules</h2>
                    <h4 className="mt-4">3 Night in Dhaka</h4>
                    <div className="d-flex justify-content-between mt-3 mb-4">
                        <div className="d-flex">
                            <b className="d-flex align-items-center me-2 p-2" style={{ backgroundColor: '#eaeaea' }}>{arr.startDate} </b>
                            <p >Monday Check-In<br></br> After 12 am</p>
                        </div>
                        <div className="d-flex">
                            <b className="d-flex align-items-center me-2 p-2" style={{ backgroundColor: '#eaeaea' }}>{arr.endDate}</b>
                            <p >Monday Check-Out<br></br> After 12 am</p>
                        </div>

                    </div>
                    <p >Self Check-in with Building stuff</p>
                    <hr />
                    <h4 className="mb-3">Things to keep in mind</h4>
                    <div className="d-flex">
                        <FontAwesomeIcon className="font" icon={faBabyCarriage} />
                        <p>Suitable for Children an Infants</p>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon className="font" icon={faPaw} />
                        <p>Pet Allowed</p>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon className="font" icon={faWineBottle} />
                        <p>No party or Events</p>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon className="font" icon={faSmoking} />
                        <p>Smoking Allowed</p>
                    </div>
                    <a className="pb-3" href="#">See more..</a>
                    <br />
                    <br />
                    <Link to="/information"  className="btn w-50">Agree and Continue</Link>
                </div>
                <div className="col-md-6" style={{ paddingLeft: '50px' }}>
                <Card className="cart" style={{ width: '25rem',marginTop:"20px" }}>
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
                               
                               { arr.endDate? <div >
                                <b>end date</b>
                                    <input className="p-2" style={{ width: '100%', height: '40px', borderRadius: '8px' }} value={arr.endDate}
                                        placeholder="dd-mm-yyyy" />
                                </div> : <p>please provide end date</p>}
                            </div>
                            <br />
                            <h6>Guests </h6>
                            <input className="p-2" style={{ width: '100%', height: '40px', borderRadius: '8px' }} value={arr.totalPerson} />
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
                                <p className="ms-auto">{totalPrice + 15+10}</p>
                            </div>
                            
                        </Card.Text>
                    
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    );
};

export default Review;