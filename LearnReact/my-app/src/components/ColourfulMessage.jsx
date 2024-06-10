export const ColourfulMessage = ({color, children}) => {

    const messageStyle = {
        color,
        fontSize: "20px"
    };
    
    return <p style = {messageStyle}> {children}</p>
}; 

