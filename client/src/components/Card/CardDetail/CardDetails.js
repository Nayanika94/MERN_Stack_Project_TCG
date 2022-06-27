import React from 'react';

//-----------display card details for each and every card----------
const CardDetails = ({ card }) => {

    return (
        <>
            {/**-----using tailwind css for animation of flipping the cards------ */}
            <section className='bg-gray-900  flex justify-center text-white '>
                <div className='w-[300px] h-[400px] bg-transparent  cursor pointer group perspective '>
                    <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <div className='absolute group-hover:opacity-75 backface-hidden w-full h-full '>

                                <img src={card.image_uris ? card.image_uris.normal : 'https://c1.scryfall.com/file/scryfall-cards/normal/front/e/5/e5b2176d-8925-4474-9d3e-1c97192715fb.jpg?1654567775'} className='w-full h-full' alt='card image'></img>
                            </div>
                        </div>
                        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-tcg'>
                            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
                                <h1 className='text-3xl font-bold'>{card.name}</h1>
                                <p className='my-2 font-semibold'>{card.rarity}</p>
                                <p className='font-semibold'>{card.set_name}</p>
                                <p className='font-semibold'>{card.collector_number}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CardDetails;