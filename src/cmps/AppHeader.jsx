import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import logoImg from '../assets/Img/litvak-logo.png'


import { UserMsg } from './UserMsg.jsx'
import { LoginSignup } from './LoginSignup.jsx'
import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { logout } from '../store/actions/user.actions.js'


export function AppHeader() {
  const user = useSelector(storeState => storeState.userModule.loggedInUser)

  function onLogout() {
    logout()
      .then(() => {
        showSuccessMsg('logout successfully')
      })
      .catch((err) => {
        showErrorMsg('OOPs try again')
      })
  }

  function onToggleCart(ev) {
    ev.preventDefault()
    dispatch({ type: TOGGLE_CART_IS_SHOWN })
  }

  return (
    <header className="app-header main-layout flex space between">

      <img className="logo-img" src={logoImg} />

      <nav className="app-nav">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/toy" >Toys</NavLink>
        <NavLink title='Reviews' to="/review">Reviews</NavLink>
        {/* <a onClick={onToggleCart} href="#">🛒 Cart</a> */}
      </nav>
      {user ? (
        < section className='login-name' >
          <span className='full-name-login' to={`/user/${user._id}`}>Hello {user.fullname}
          </span>
          <button className='logout-btn' onClick={onLogout}>Logout</button>
        </ section >
      ) : (
        <section>
          <LoginSignup />
        </section>
      )}
      <UserMsg />

    </header>
  )
}
