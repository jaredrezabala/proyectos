import './App.css'
import TaskList from './TaskList'
import SaveTaskButton from './SaveTask'
import { useState } from 'react'

function App() {
   const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState<string[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState("")

   function handleSave() {
    if (task.trim() === "") return
    setTaskList(prev => [...prev, task])
    setTask("") // limpia el input
  }
  function deleteTask(index: number){
          setTaskList(prev => prev.filter((_, i) => i !== index))
    }
  function startEditing(index: number){
    setEditingIndex(index)
    setEditText(taskList[index])
  }
  function cancelEditing(){
    setEditingIndex(null)
    setEditText("")
  }

function saveEdit(){
  if (editingIndex === null || editText.trim() === "") return
      setTaskList(prev => {
      const updated = [...prev]
      updated[editingIndex] = editText
      return updated
        })
      setEditingIndex(null)
      setEditText("")
}
  return (
    <>
      <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="task">Enter a task</label>
          <input type="text" id='task' name='task' value={task} onChange={(e) => setTask(e.target.value)}/>
        </form>
        <SaveTaskButton onSave={handleSave}/>
        <TaskList  tasks={taskList}
        onDelete={deleteTask}
        onEditStart={startEditing}
        editingIndex={editingIndex}
        editText={editText}
        onEditTextChange={setEditText}
        onCancelEdit={cancelEditing}
        onSaveEdit={saveEdit}/>
      </div>
      
    </>
  )
}
export default App
