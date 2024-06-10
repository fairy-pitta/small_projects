const style = {
    backgroundColor: "#c6e5d9",
    height: "30px",
    width: "400px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
};

export const InputTodo = (props) => {
    const {todoText, onChange, onClick, disabled} = props;
    return (
        <div style = {style}>
        <input disabled = {disabled} placeholder="input todo" value={todoText} onChange={onChange}/>
        <button disabled={disabled} onClick = {onClick}>Add</button>
        </div>
    );
};