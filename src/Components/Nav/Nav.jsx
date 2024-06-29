
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { useContext } from 'react';
import { ContextUse } from '../AuthContext/AuthContext';
const Nav = () => {
  const {user,logOut} = useContext(ContextUse);
    const navLinks = <>
     <NavLink to='/'><li>Home</li></NavLink>
     <NavLink to='/allCars?brand=All'><li>All Cars</li></NavLink>
     <NavLink to='/addCar'><li>Add Products</li></NavLink>
     <NavLink to='/myCart'><li>My Cart</li></NavLink>
    </>
    const handleLogOut=()=>{
      logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
      });
    }
    return (
      <div className='bg-black'>
          <div className="navbar container rounded-t-2xl lg:pr-10 font-poppins">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-lg font-semibold   rounded-box z-[1] mt-3 w-52 pl-5 pt-5 shadow">
       {navLinks}
      </ul>
    </div>
   <Link><img className='w-32' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold flex gap-8">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?  <button onClick={handleLogOut} className="btn bg-sky-400 text-white">Log Out</button> :<Link to='/login'><button className="btn bg-sky-400 text-white">Login</button></Link>
   }
  </div>
</div>
      </div>
    );
};

export default Nav;