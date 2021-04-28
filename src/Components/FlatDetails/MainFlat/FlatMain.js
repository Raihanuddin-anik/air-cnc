import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../../App';
import buildingImg from '../../../images/building3.jpeg';
import pic1 from '../../../images/pic1.jpg'
import './FlatMain.css'
const FlatMain = () => {
    const [flatDetails, setflatDetails] = useContext(UserContext);

    return (
        <div className="container " >
            <div className="row" >
                <div className="col-md-6" >
                    <Card.Img  src={buildingImg} />
                </div>
                <div className="col-md-6 ">
                    <Card.Img  src={flatDetails.Img} />
                </div>
            </div>
        </div>
    );
};

export default FlatMain;