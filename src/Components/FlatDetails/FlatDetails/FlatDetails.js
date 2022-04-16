import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import FlatFooter from '../FlatFooter/FlatFooter';
import FlatHeader from '../FlatHeader/FlatHeader';
import FlatMain from '../MainFlat/FlatMain';

const FlatDetails = () => {
    const flatkey = useParams();
    const key =  flatkey.faltkey;

    const [flatDetails, setflatDetails] = useContext(UserContext);

    console.log(flatDetails)
    useEffect(()=>  {
        fetch('https://guarded-taiga-37234.herokuapp.com/homeData/'+ key)
        .then(res =>res.json())
        .then(data => setflatDetails(data))
    }, [key])


    return (
        <div className="container">
            <FlatHeader ></FlatHeader>
            <FlatMain ></FlatMain>
           <FlatFooter ></FlatFooter>
        </div>
    );
};

export default FlatDetails;