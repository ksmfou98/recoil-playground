import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms/todoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
