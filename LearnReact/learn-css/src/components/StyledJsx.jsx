
export const StyledJsx = () => {

    return (

        <>
        <div className="container">
            <p className="title">--Styled JSX--</p>
            <button className="button">Press!!</button>
        </div>

        <style jsx="true">{`      
            .container {
                border: solid 2px #333;
                border-radius: 16px;
                padding: 8px; 
                margin: 8px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .title {
            color: blue;
            }

            .button {
            background-color: skyblue;
            border: none;
            border-radius: 16px;
            padding: 8px;

            }
        `}</style>
        </>
    )
}