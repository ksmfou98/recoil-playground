import { RecoilRoot } from "recoil";
import CharacterCounter from "./CharacterCounter";
import TodoList from "./TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
