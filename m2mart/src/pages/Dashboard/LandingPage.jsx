import React from 'react';
import CategorySection from './CategorySection';
import HeadContent from './HeadContent';
import BestSellingProducts from './BestSellingProducts';
import PromoPosters from './PromoPosters';

const LandingPage = () => {
    return (
        <div>
            <HeadContent/>
            <CategorySection/>
        <BestSellingProducts/>
        <PromoPosters/>
        </div>
    );
}

export default LandingPage;
