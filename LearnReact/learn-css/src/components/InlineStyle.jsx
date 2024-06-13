export const InlinieStyle = () => {

    const containerStyle = {
        border: "solid 2px #333",
        borderRadius: "16px",
        padding: "8px", 
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alighItems: "center",
    }

    const titleStyle = {
        margin: 0,
        color: "blue",
    };

    const buttonStyle = {
        backgroundColor: "skyblue",
        border: "none",
        padding: "8px",
        borderRadius: "16px",
    };

    return (
        <>
        <div style={containerStyle}>
            <p style = {titleStyle}>- Inline Styles -</p>
            <button style={buttonStyle}>Press</button>
        </div>
        </>
    )
}