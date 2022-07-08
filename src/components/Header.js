import {useLocation} from 'react-router-dom'

import Button from "./Button";

const Header = ({onToggle, opened}) => {
  const location = useLocation();
  return (
    <div className = 'flex'>
        <h1 >Task Tracker</h1>
        {location.pathname === '/' ?
          <Button text={opened ? 'Close' : 'Add'} color = {opened ? '#F76A53' : '#903AB7'} onToggle = {onToggle} />
        : 
          ''}
    </div>
  )
}

export default Header