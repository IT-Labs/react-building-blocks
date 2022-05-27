import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import { Wrapper } from "./TodoList.style";
import { TodoType } from "./types/TodoTypes";

const TodoList = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    const addNewTodo = (todoNote: string) => {
        setTodoList([...todoList, { id: Date.now(), isDone: false, text: todoNote }]);
    }
    const checkTodo = (id: number, checked: boolean) => {
        setTodoList(todoList.map(i => {
            if (i.id === id)
                return { ...i, isDone: checked };
            return i;
        }))
    }

    return (
        <Wrapper>
            <h1>My Todo List!</h1>
            <AddTodo addTodo={addNewTodo} />
            <TodoItems todoList={todoList} checkTodo={checkTodo}></TodoItems>
        </Wrapper>)
}
export default TodoList;