import React, { useState } from "react";
import Card from "./Card"
import CardReducer from "../reducers/CardReducer"
import Title from "./base/Title"
import EmptyError from "./errors/EmptyError";

export default function CardList() {
    let [cards, setCards] = useState(CardReducer([], {filter:"list"}))

    const DeleteCard=(e)=>{
        let id=e.target.parentElement.parentElement.getAttribute("id")

        setCards(CardReducer(cards,{filter:"filter",id:parseInt(id)}))
    }

    let list = () => (
        <>
            <Title text={"Turlarımız"} borderBottom={true} />
            {
                cards.length>0 ?
                cards.map(card =>(<Card key={card.id} id={card.id} clc={DeleteCard} imageUrl={card.imageUrl} title={card.title} mainText={card.mainText} price={card.price} />))
                :
                (<EmptyError/>)
            }
        </>
    )


    return (
        <>
            {
                list()
            }
        </>
    )
}