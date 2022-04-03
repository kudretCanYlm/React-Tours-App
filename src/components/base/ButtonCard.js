import Button from "../../style/base/Button.css"

export default function ButtonCard({ text="Not Interested", mode="mode-1",clickEvent=t=>t}) {

    return (
        <>
            <button onClick={clickEvent} className={"btn "+mode} >
                {
                    text
                }
            </button>

        </>


    )



}