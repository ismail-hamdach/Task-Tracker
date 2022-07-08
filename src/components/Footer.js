import {Link, useLocation} from 'react-router-dom'

const Footer = () => {
  const currentLocation = useLocation();

  return (
    <footer className="Footer">
        <p>Copyright &copy; 2022</p>
        {currentLocation.pathname === '/about' ? 
          '' 
        : 
          <Link to="/about">About</Link>
        }
    </footer>
  )
}

export default Footer