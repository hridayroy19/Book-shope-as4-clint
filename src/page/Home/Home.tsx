import React from 'react';
import Banner from '../../components/banner/Banner';
import PopularBooks from './PopularBooks';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularBooks/>
        </div>
    );
};

export default Home;