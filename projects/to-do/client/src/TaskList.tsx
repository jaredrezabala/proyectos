type TaskListProps = {
  tasks: string[];
  onDelete: (index: number) => void;
  onEditStart: (index: number) => void;
  editingIndex: number | null;
  editText: string;
  onEditTextChange: (text: string) => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
}

function TaskList({
  tasks,
  onDelete,
  onEditStart,
  editingIndex,
  editText,
  onEditTextChange,
  onCancelEdit,
  onSaveEdit
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>
          {editingIndex === i ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => onEditTextChange(e.target.value)}
              />
              <button onClick={onSaveEdit}>Guardar</button>
              <button onClick={onCancelEdit}>Cancelar</button>
            </>
          ) : (
            <>
              {task}
              <button onClick={() => onEditStart(i)}>✏️</button>
              <button onClick={() => onDelete(i)}>🗑️</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
