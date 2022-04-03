import React from "react";

export default function Title({ text ,borderBottom=true}) {
 
    const bottom=borderBottom ? "border-bottom":"";

    return (
        <>
            <h1 className={"title-head "+bottom}>
                {text}
            </h1>
        </>
    )
}