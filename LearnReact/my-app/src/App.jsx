// componentの名前は大文字はじまり

export const App = () => {

    const onCLickButton = () => {
        alert();
    };

    const contentStyle = {
        color: "blue",
        fontsize: "18px"
        
    };

    return (
        <>
            <h1 style = {contentStyle}>Hello</h1>
            <p>How are you</p>
            <button onClick={onCLickButton}>Press</button>
        </>
    );
};