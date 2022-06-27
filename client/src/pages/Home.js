import React from 'react';
import Search from '../components/Card/CardList/Search';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <div className='h-full'>
                <div className='flex justify-center mb-5 '>
                    <img src="https://tcgmachines.com/_next/image?url=https%3A%2F%2Fmarketing-production.azureedge.net%2Fstrapi%2Fassets%2Fsmall_logo_flat_design_9721338312.png&w=256&q=75" alt='TCG INC machines logo' />
                </div>
                <Search />
                <Footer />
            </div>
        </>
    )
}

export default Home;