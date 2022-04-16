import React, { useEffect, useState } from 'react';
import pic1 from '../../../images/pic1.jpg';
import pic2 from '../../../images/pic2.jpeg';
import pic3 from '../../../images/pic3.jpg';
import Room from '../Room/Room';


const Hotel = () => {

    const [apt, setApt] = useState([]);

    useEffect(() => {
        fetch("https://guarded-taiga-37234.herokuapp.com/products")
            .then(res => res.json()
                .then(data => {
                    setApt(data)
                }))
    }, [])




    return (
        <div className="container">
            {apt.length == 0 && <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>}
            {
                apt.map(room => <Room rooms={room}></Room>)
            }
        </div>
    );
};

export default Hotel;