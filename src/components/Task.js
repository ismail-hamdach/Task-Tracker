import { MdDelete } from "react-icons/md";

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task shadow flex ${task.reminder ? 'reminder' : '' }`} onDoubleClick = {() => onToggle(task.id)}>
        <div>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
        <MdDelete style={{cursor: 'pointer'}} color="#F76A53" onClick={() => onDelete(task.id)}/>
    </div>
  )
}

export default Task