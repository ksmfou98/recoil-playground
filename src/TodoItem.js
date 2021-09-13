import { useRecoilState } from "recoil";
import { todoListState } from "./atoms/todoListState";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = ({ target: { value } }) => {
    const newList = todoList.map((todo) =>
      todo === item ? { ...item, text: value } : todo
    );

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map((todo) =>
      todo === item ? { ...item, isComplete: !item.isComplete } : todo
    );

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((todo) => todo !== item);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
