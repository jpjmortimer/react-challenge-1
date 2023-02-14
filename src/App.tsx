import { useState } from "react";
import type { Todo } from "./app.types";
import { AddTodoForm } from "./components/add-todo-form";
import { TodoItem } from "./components/todo-item";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(todo: Todo) {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  function handleToggle(todo: Todo) {
    const id = todo.id;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const todosNotCompleted = todos.filter((todo) => !todo.completed);
  const todosCompleted = todos.filter((todo) => todo.completed);

  return (
    <>
      <h1>My Todos</h1>
      <section>
        <article>
          <AddTodoForm onAdd={handleAdd} />
        </article>
      </section>
      {todosNotCompleted.length > 0 && (
        <section>
          <ul>
            {todosNotCompleted.map((todo) => (
              <TodoItem
                onToggle={handleToggle}
                key={todo.id}
                id={todo.id}
                title={todo.title}
                tags={todo.tags}
                completed={todo.completed}
              />
            ))}
          </ul>
        </section>
      )}
      {todosCompleted.length > 0 && (
        <section>
          <h2>Completed</h2>
          <ul>
            {todosCompleted.map((todo) => (
              <TodoItem
                onToggle={handleToggle}
                key={todo.id}
                id={todo.id}
                title={todo.title}
                tags={todo.tags}
                completed={todo.completed}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default App;
