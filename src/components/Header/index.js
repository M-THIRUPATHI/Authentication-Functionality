// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="unordered-list">
      <Link to="/">
        <li className="home-list">Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </div>
)
export default withRouter(Header)
