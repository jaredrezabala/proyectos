type SaveTaskButtonProps = {
  onSave: () => void;
}

function saveTaskButton({ onSave }: SaveTaskButtonProps) {  
    return (
        <button onClick={onSave}>Save</button>

    )
}

export default saveTaskButton