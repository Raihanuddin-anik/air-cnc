import { faCheck, faHandsWash, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { InfoContext, UserContext } from '../../../App';


const FlatText = () => {
    const [flatDetails, setflatDetails] = useContext(UserContext);
    const [userInfo, setUserInfo] = useContext(InfoContext)

    return (
        <div  className="row" >
        
            <div className="col-md-10 col-10">
                <h4>{flatDetails.description}</h4>
                <b>Dhaka Bangladesh</b>
                <p>{flatDetails.facility}</p>
               <div className="d-flex ">
                   <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                   <div className="ps-3" >
                        <b>Entire Home</b>
                        <p>{flatDetails.rules1}</p>
                   </div>
               </div>
               <div className="d-flex ">
                   <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                   <div className="ps-3" >
                        <b>Self Check-In</b>
                        <p>{flatDetails.rules2}</p>
                   </div>
               </div>
               <div className="d-flex ">
                   <FontAwesomeIcon icon={faHandsWash}></FontAwesomeIcon>
                   <div className="ps-3" >
                        <b>Sprakling Clean</b>
                        <p>{flatDetails.about}</p>
                   </div>
               </div>
               <div className="d-flex ">
                   <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                   <div className="ps-3" >
                        <b>Entire Home</b>
                        <p>{flatDetails.rules1}</p>
                   </div>
               </div>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into
                       electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus 
                   PageMaker including versions of Lorem Ipsu</p>
                
            </div>
            <div className="col-md-2 col-2">
                <Image src={userInfo.photo}/>
                
            </div>
         
            
            
        </div>
         
    );
};

export default FlatText;