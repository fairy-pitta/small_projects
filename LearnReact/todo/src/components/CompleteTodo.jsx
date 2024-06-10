export const CompleteTodo = (props) => {
    const { todos, onBack } = props
    return (
        <div className="complete-area">
            <p className="title">Completed todo</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onBack(index)}>Back</button>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};