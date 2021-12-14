import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import FlatText from '../FlatText/FlatText';
import './FlatFooter.css'

const FlatFooter = () => {
    const [flatDetails, setflatDetails] = useContext(UserContext);
    var arr = JSON.parse(localStorage.getItem('user'));
    console.log(arr)
    const totalPrice = flatDetails.price * arr.totalPerson
   

    return (

        <div className="row mt-5">
            <div className="col-md-6">
                <FlatText></FlatText>
            </div>
            <div className="col-md-6" style={{ paddingLeft: '50px' }}>
                <div className="cart" style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>{flatDetails.price}$ </Card.Title>
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
                            <Link to="/review" className="btn w-100">Place</Link>
                        </Card.Text>
                        <p className="text-center">Your Won't be Charge Yet</p>
                    </Card.Body>
                </div>
            </div>

        </div>

    );
};

export default FlatFooter;