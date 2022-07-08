import { useState } from "react";

const Form = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [checked, setChecked] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (text && day) {
            const task = {
                text,
                day,
                reminder: checked
            }
            await onAdd(task)
            setText('');
            setDay('');
            setChecked(false);            
        } else {
            alert('Please complete inputs');
        }
    }

    const onChangeText = (e) => {
        setText(e.target.value);
    }

    const onChangeDay = (e) => {
        setDay(e.target.value);
    }

    const onChangeChecked = (e) => {
        setChecked(e.currentTarget.checked);
    }


  return (
    <div className="form">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-block">
                <label htmlFor="text">Task</label>
                <input type="text" name="text" placeholder="Add Task" value = {text} onChange={onChangeText}/>
            </div>
            <div className="form-block">
                <label htmlFor="day">Day & Time</label>
                <input type="text" name="day" placeholder="Add Day & Time" value = {day} onChange={onChangeDay}/>
            </div>
            <div className="form-flex">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" name="reminder" className="checkbox" checked={checked} value = {checked} onChange={onChangeChecked}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-lg" />
        </form>
    </div>
  )
}

export default Form
