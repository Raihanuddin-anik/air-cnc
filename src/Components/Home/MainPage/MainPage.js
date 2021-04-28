import React from 'react';
import picture1 from '../../../img/picture1.jpg';
import picture2 from '../../../img/picture2.jpg';
import picture3 from '../../../img/picture3.jpg';
import picture4 from '../../../img/picture4.jpg';
import pic1 from '../../../img/york1.jpg';
import pic2 from '../../../img/york2.jpg';
import pic3 from '../../../img/york3.jpg'
import Experience from '../Experience/Experience';
import Homes from '../Homes/Homes';

const MainPage = () => {
    const experience = [
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.        ',
            price: '35',
            authorImg: picture2,
            date: '23 April 2019'
        },
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: picture2,
            date: '23 April 2019'
        },
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: picture3,
            date: '23 April 2019'
        },
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: picture4,
            date: '23 April 2019'
        },

    ]
    const homes = [
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: pic1,
            date: '23 April 2019'
        },
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: pic2,
            date: '23 April 2019'
        },
        {
            destination: 'NEW YORK',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
            price: '35',
            authorImg: pic3,
            date: '23 April 2019'
        },
    ]
    return (

        <div >
            <div className="row pt-5" >
                <h3 className="pb-3">Experience</h3>
                {experience.map(data => <Experience data={data}></Experience>)}
            </div>
            <div className="row mt-3">
            <h3 className="pb-3">Homes</h3>
                {homes.map(datas => <Homes dt={datas}></Homes>)}
            </div>
            

        </div>
    );
};

export default MainPage;