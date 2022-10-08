import React from 'react';
import Search from '../components/Card/CardList/Search';
import Footer from '../components/Footer';
import image from '../assets/image.jpeg';


const Home = () => {
    return (
        <>
            <div className='h-full'>
                <div className='flex justify-center mb-5 '>
                    <img src={image} style={{ height: "200px" }} alt='TCG INC machines logo' />
                </div>
                <Search />
                <Footer />
            </div>
        </>
    )
}

export default Home;