import Task from "./Task";
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div className="tasks">
       { 
            tasks.map((task) => (
                <div key={task.id} className="">
                    <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
                </div>
            ))
        }
    </div>
  )
}

export default Tasks