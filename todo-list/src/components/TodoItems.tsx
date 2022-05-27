import { TodoItem } from './TodoItems.style';
import { TodoType } from './types/TodoTypes';
interface TodoItemsProps {
    todoList: TodoType[],
    checkTodo: (id: number, checked: boolean) => void;
}

const TodoItems = ({ todoList, checkTodo }: TodoItemsProps) => {

    return (
        <div>
            {todoList.length > 0 && <h3>Todo list:</h3>}

            {
                todoList.map(x => {
                    return (
                        <TodoItem key={x.id} isChecked={x.isDone}>
                            <span className='todo-text'>{x.text}</span>
                            <input type="checkbox" checked={x.isDone} onChange={(e) => {
                                checkTodo(x.id, e.currentTarget.checked);
                            }} />
                        </TodoItem>)
                })
            }
        </div>
    )
}
export default TodoItems;