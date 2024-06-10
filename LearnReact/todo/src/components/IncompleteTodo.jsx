export const IncompleteTodo = (props) => {
    const { todos, onComplete, onDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">Incomplete todo</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        // keyは一意である必要がある
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onComplete(index)}>Done</button>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
