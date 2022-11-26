import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Card from './Card/Card';


const Home = () => {
    const cardData = useLoaderData().data;
    // console.log(cardData)
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-7xl text-center mt-20'>Quiz</h1>
            <hr />
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                    cardData.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
            

        </div>
    );
};

export default Home;