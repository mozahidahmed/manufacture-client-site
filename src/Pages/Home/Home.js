import React from 'react';
import Banner from './Banner';
import BussnesSummary from './BussnesSummary';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-12 mt-12'>
               <Banner></Banner>
               <Services></Services>
               <BussnesSummary></BussnesSummary>
               <Reviews></Reviews>

        </div>
    );
};

export default Home;