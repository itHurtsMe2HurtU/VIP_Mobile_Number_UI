import React from 'react';
import AlternateNavbar from '../components/AlternateNavbar';
import AltNavbar222 from '../components/AltNavbar222';
import CustomizeNumber from '../components/CustomizeNumber';
import Footer from '../components/Footer';
import GIFbanner from '../components/GIFbanner';
import NavBar from '../components/NavBar';
import NewLaunchesCarousel from '../components/NewLaunchesCarousel';
import SearchBar from '../components/SearchBar';
import StepsToGetVipNumber from '../components/StepsToGetVipNumber';
import Testimonial from '../components/Testimonial';
import TopBanner from '../components/TopBanner';


const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            {/* <AlternateNavbar /> */}
            <AltNavbar222 />
            <TopBanner />
            <NewLaunchesCarousel />
            <StepsToGetVipNumber />
            <GIFbanner />
            <CustomizeNumber />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home;