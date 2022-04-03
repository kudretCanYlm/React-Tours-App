import React, { useState } from "react";
import TextPrice from "../components/TextPrice"
import ButtonCard from "./base/ButtonCard"

export default function TextMain({ title, main, price }) {

    const firstButtonText = "Read More";
    let [mainText, setMainText] = useState(main.slice(0, 250) + " ")
    let [buttontext, setButtonText] = useState(firstButtonText)

    function clickBtn() {
        if (firstButtonText === buttontext) {
            setMainText(main + "  ");
            setButtonText("read less");
        }
        else {
            setMainText(main.slice(0, 250) + " ");
            setButtonText(firstButtonText);
        }

    }


    return (

        <div className="text-main">
            <div className="title">
                <div className="title-left">
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className="title-right">
                    <TextPrice price={price} />
                </div>
            </div>
            <div className="text-main-content">
                {
                    mainText
                }
                
                <ButtonCard text={buttontext}  clickEvent={clickBtn} />
            </div>

        </div>
    )


}