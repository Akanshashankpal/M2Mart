import React from 'react';
import CategorySection from './CategorySection';
import HeadContent from './HeadContent';
import BestSellingProducts from './BestSellingProducts';
import PromoPosters from './PromoPosters';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <HeadContent/>
            <CategorySection/>
        <BestSellingProducts/>
        <PromoPosters/>
        <Footer/>
        </div>
    );
}

export default LandingPage;
