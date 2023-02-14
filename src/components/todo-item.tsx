import type { Todo } from "../app.types";

type TodoProps = Todo & { onToggle: (todo: Todo) => void };

export function TodoItem({ onToggle, ...todo }: TodoProps) {
  const { title, tags = [], completed } = todo;

  function handleToggle() {
    onToggle(todo);
  }

  return (
    <li className={`todo ${completed ? "completed" : ""}`}>
      <div>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={completed ? true : false}
        />
        <span>{title}</span>
      </div>
      {tags.length > 0 && (
        <ul>
          {tags.map((tag, i) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
