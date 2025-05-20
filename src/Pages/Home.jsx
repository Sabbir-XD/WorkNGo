import React from 'react';
import BannerSlider from '../components/BannerSlider';
import HowItWorks from '../components/HowItWorks';
import PopularServices from '../components/PopularServices';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <BannerSlider/>
            <HowItWorks/>
            <PopularServices/>
            <Newsletter/>
        </div>
    );
};

export default Home;