import { NavLink } from 'react-router-dom'
import logoImg from '../assets/Img/litvak-logo.png'


// import { UserMsg } from './UserMsg.jsx'
// import { LoginSignup } from './LoginSignup.jsx'
// import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
// import { logout } from '../store/actions/user.actions.js'


export function AppHeader() {

  return (
    <header className="app-header main-layout flex space between">
      {/* <section className="header-container  flex justify-between"> */}
      {/* <h1 className='logo-header'>Mister Toy</h1> */}
      <img className="logo-img" src={logoImg} />

      <nav className="app-nav">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/toy" >Toys</NavLink>

      </nav>

      {/* </section> */}

      {/* <UserMsg /> */}
    </header>
  )
}
