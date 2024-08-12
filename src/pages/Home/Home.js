import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Inventory from '../../components/Inventory/Inventory';
import Perfect from '../../components/Perfect/Perfect';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Inventory></Inventory>
            <Services></Services>
            <Perfect></Perfect>
            <About></About>
        </>
    );
};

export default Home;