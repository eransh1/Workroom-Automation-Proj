import React from 'react'
import "../css/Navbar.css"
import Logo from "../images/Logo"


const Navbar = () => {
  return (
    <section id='navbar'>
<div className='logo'><Logo /></div>
<h1 className='brand'>Workroom</h1>
<p className='cto'><span className='special'>|</span>CTQ System</p>
<div className=' bell ms-auto'>
<div>
<i class="fa-regular fa-bell"></i>
<div className='circle'></div>
</div>
</div>
<div className='usericon'><div className="circlee"><i class="fa-solid fa-user user"></i></div></div>
<div className='user-name'>
  <p className='name'>Ansh Bansal</p>
  <p className='position'>Admin</p>
</div>

    </section>
  )
}

export default Navbar