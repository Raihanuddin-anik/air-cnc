import React from 'react';
import MainPage from '../MainPage/MainPage';
import SidePage from '../SidePage/SidePage';

const HomePage = () => {
        return (
                
               <div className="container">
                        <div className="row">
                        <div className="col-md-4 pe-4">
                                <SidePage></SidePage>
                        </div>
                        <div className="col-md-8">
                                <MainPage></MainPage>
                        </div>
     
                </div>
               </div>
        );
};

export default HomePage;