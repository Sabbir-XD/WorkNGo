import React from 'react';
import BannerSlider from '../components/BannerSlider';
import HowItWorks from '../components/HowItWorks';
import PopularServices from '../components/PopularServices';

const Home = () => {
    return (
        <div>
            <BannerSlider/>
            <HowItWorks/>
            <PopularServices/>
        </div>
    );
};

export default Home;