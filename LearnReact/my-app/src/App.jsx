// componentの名前は大文字はじまり

import { useEffect, useState } from "react";
import { ColourfulMessage } from "./components/ColourfulMessage";

export const App = () => {

    const [num, setNum] = useState(0);

    const [isShowHAHA, setIsShowHAHA] = useState(false);

    const onCLickButton = () => {
        setNum((prev)=>prev+1);
    };

    const onClickShow = () => {
        setIsShowHAHA(!isShowHAHA);
    }

    const contentStyle = {
        color: "blue",
        fontSize: "24px",
        
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                isShowHAHA || setIsShowHAHA(true);
            }
            else {
                isShowHAHA && setIsShowHAHA(false);
            }
        }
    }, [num]);



    return (
        <>
            <h1 style = {contentStyle}>Hello</h1>
            <ColourfulMessage color="blue">This is me</ColourfulMessage>
            <ColourfulMessage color = "red">Who is this</ColourfulMessage>
            <button onClick={onCLickButton}>Press</button>
            <p>{num}</p>
            <button onClick={onClickShow}> on/off</button>
            {isShowHAHA && <p>HAHAHAHAHAHHAHA</p>}
            
        </>
    );
};