import React from 'react';
import Banner from '../Header/Banner';
import Products from '../Products/Products';
import BusinessSummary from './BusinessSummary';
import ManufacturingVideos from './ManufacturingVideos';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ManufacturingVideos></ManufacturingVideos>
        </div>
    );
};

export default Home;