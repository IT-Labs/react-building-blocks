import { useState } from "react";

type AddTodoProps = {
    addTodo: (todoNote: string) => void;
}

const AddTodo = (props:AddTodoProps) => {

    const [todoText, setTodoText] = useState('');

    return (
        <div>
            <label>
                <span>Create todo:</span>
                <input type="text" value={todoText} onChange={(e) => {
                    setTodoText(e.currentTarget.value);
                }} />
                <button onClick={() => {
                    if (todoText.split(' ').join('')) {
                        props.addTodo(todoText);
                        setTodoText('');
                    }
                }}>Add todo</button>
            </label>
        </div>
    )
}
export default AddTodo;