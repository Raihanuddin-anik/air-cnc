import React, { useEffect, useState } from 'react';
import './SidePage.css';
import { enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SidePage = () => {
        const [startDate, setStartDate] = useState(new Date())
        const [endDate, setEndDate] = useState();
        const [adult, setAdult] = useState(1);
        const [child, setChild] = useState(1);
        const [baby, setBaby] = useState(1);
        const [location, setLocation] = useState(1);
  const getValue = () =>{
        const location = document.getElementById('location').value;
        setLocation(location)
  }
   const totalPerson = adult + child + baby;
        const data = {
                startDate: (startDate).toDateString(),
                endDate  : endDate,
                adult    : adult,
                child    : child,
                baby     : baby,
                location : location,
                totalPerson : totalPerson
        }
     const handleSendData = () =>{
        sessionStorage .setItem('user', JSON.stringify(data));
       
       
     }
               

        return (
                <div style={{ boxSizing: "border-box", width: "320px" }}>
                        <h4>where do you want to go</h4>
                        <div className="location pe-5 ps-5 p-2">
                                <h6>LOCATION</h6>
                                <input onBlur={getValue} className="location-input w-100" id="location"  placeholder="Add city landmark or Address" type="text" size="30" />
                        </div>
                        <div className="mt-3">
                                <DateRangePicker
                                        startDate={startDate}
                                        endDate={endDate}
                                        onStartDateChange={setStartDate}
                                        onEndDateChange={setEndDate}
                                        minimumDate={new Date()}
                                        minimumLength={1}
                                        format='dd MMM yyyy'
                                        locale={enGB}
                                >
                                        {({ startDateInputProps, endDateInputProps, focus }) => (
                                                <div className='row date-range'>
                                                        <div className="col-md-6 input-div">
                                                                <div className="d-flex">

                                                                        <div >
                                                                                <small>Arrive</small>
                                                                                <input
                                                                                        className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                                                                        {...startDateInputProps}
                                                                                        placeholder='Start date'
                                                                                />
                                                                        </div>

                                                                        <div>
                                                                                <FontAwesomeIcon icon={faCalendar} />
                                                                        </div>


                                                                </div>
                                                        </div>

                                                        <div className="col-md-6 input-div" >
                                                                <div className="d-flex">

                                                                        <div>
                                                                                <small>Arrive</small>
                                                                                <input
                                                                                        className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                                                                        {...endDateInputProps}
                                                                                        placeholder='End date'
                                                                                />
                                                                        </div>

                                                                        <div>
                                                                                <FontAwesomeIcon icon={faCalendar} />
                                                                        </div>


                                                                </div>
                                                        </div>
                                                </div>
                                        )}
                                </DateRangePicker>
                                <div className="toggle-box mt-3 p-2">
                                        <div className="guest">
                                                <small>Guest</small>
                                                <br />
                                                <b>{adult} ADULTS {child} CHILD</b>
                                        </div>
                                        <div className="d-flex mt-5">
                                                <div>
                                                     <b>ADULTS</b>
                                                </div>
                                                <div className="ms-auto">
                                                       <FontAwesomeIcon style={{cursor:'pointer'}} icon={faMinus} onClick={()=>setAdult(adult-1)}/> <b className="p-3">{adult}</b> <FontAwesomeIcon style={{cursor:'pointer'}} href="#" onClick={()=>setAdult(adult+1)} icon={faPlus}/> 
                                                </div>
                                        </div>
                                        <div className="d-flex mt-5">
                                                <div>
                                                <b>CHILD</b>
                                                </div>
                                                <div className="ms-auto">
                                                <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>setChild(child-1)} icon={faMinus}/> <b className="p-3">{child}</b> <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>setChild(child+1)} icon={faPlus}/>   
                                                </div>
                                        </div>
                                        <div className="d-flex mt-5">
                                                <div>
                                                <b>BABIES</b>
                                                </div>
                                                <div className="ms-auto">
                                                <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>setBaby(baby-1)} icon={faMinus}/> <b className="p-3">{baby}</b> <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>setBaby(baby+1)} icon={faPlus}/>  
                                                </div>
                                               
                                        </div>
                                        
                                               <div>
                                                       
                                                   <Link onClick={handleSendData} to="/map" className=" btn mt-5 w-100">Apply</Link>
                                               </div>
                                       
                                      
                                </div>

                        </div>
                </div>
        );
};

export default SidePage;