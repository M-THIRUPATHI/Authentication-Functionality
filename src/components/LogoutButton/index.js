// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogOutButton = () => {
    Cookies.remove('jws-token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogOutButton}>
      Logout
    </button>
  )
}

export default LogoutButton
