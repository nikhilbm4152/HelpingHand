import React from 'react'
import CardTabs from './CardTabs'

const CardsList = (props) => {
    console.log(props);
    if (props.books.length===0) {
        return(
            <h1>
                No cards to be found 
            </h1>
        )
        
    }
    
    
    return (
        <ul>
            {props.books.map(items=>(
                <CardTabs key={items.id}
                Header={items.header}
                Description={items.discription}
                Image={items.image}/>
            ))}
        </ul>
    )
}

export default CardsList
