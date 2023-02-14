import { useState, FormEvent } from "react";
import type { Todo } from "../app.types";
import { convertStringToTags, createId } from "../utils";

type AddTodoFormProps = {
  onAdd: (todo: Todo) => void;
};

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const todo: Todo = {
      id: createId(),
      completed: false,
      title: title,
      tags: convertStringToTags(tags)
    };

    setTitle("");
    setTags("");

    onAdd(todo);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Something to do..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
