import React from 'react'
import CardsList from '../Components/CardsList';

const Cards = () => {
    const Baba = [
        {
            id: 'b1',
            header: 'Book 1 Name',
            image: 'https://source.unsplash.com/m-D_PAxLcTo',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        },
        {
            id: 'b2',
            header: 'Book 2 Name',
            image: 'https://source.unsplash.com/random',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        },
        {
            id: 'b3',
            header: 'Book 3 Name',
            image: 'https://source.unsplash.com/eeSdJfLfx1A',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        },
        {
            id: 'b4',
            header: 'Book 4 Name',
            image: 'https://source.unsplash.com/m-D_PAxLcTo',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        },
        {
            id: 'b5',
            header: 'Book 5 Name',
            image: 'https://source.unsplash.com/m-D_PAxLcTo',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        },
        {
            id: 'b6',
            header: 'Book 6 Name',
            image: 'https://source.unsplash.com/m-D_PAxLcTo',
            discription: 'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day',
        }
    ];


    return (
        <div>
            <CardsList books={Baba}/>
        </div>
    )
}

export default Cards
