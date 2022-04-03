import React from "react";
import TextMain from "./TextMain";
import ButtonCard from "./base/ButtonCard"

export default function Card({id=0, imageUrl, title, mainText, price, clc = f => f }) {

  return (
    <div id={id} className="card">
      <div className="card-pic">
        <img alt={title} src={imageUrl} />
      </div>
      <div className="card-text">
        <TextMain
          title={title}
          main={mainText}
          price={price} />
      </div>
      <div className="card-button">
        <ButtonCard mode="mode-2" clickEvent={clc} />
      </div>
    </div>
  )




}