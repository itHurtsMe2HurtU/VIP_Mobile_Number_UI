import React from 'react';
import GIFbanner from '../components/GIFbanner';
import NavBar from '../components/NavBar';
import NewLaunchesCarousel from '../components/NewLaunchesCarousel';
import SearchBar from '../components/SearchBar';
import StepsToGetVipNumber from '../components/StepsToGetVipNumber';
import TopBanner from '../components/TopBanner';

const Home = () => {
    return (
        <>
            <NavBar />
            <TopBanner />
            <SearchBar />
            <NewLaunchesCarousel />
            <StepsToGetVipNumber />
            <GIFbanner />
        </>
    )
}

export default Home;