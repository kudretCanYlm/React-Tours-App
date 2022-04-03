export default function TextPrice({price}){

    return(
        <>
        <span className="text-price">
            {
                "$"+price
            }
        </span>
        </>
    )


}