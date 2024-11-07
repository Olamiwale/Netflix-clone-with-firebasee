import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between  p-4 z-[100] w-full absolute'>

      <div className='container mx-auto flex justify-between p-4'>

     

      <Link to='/' className='flex items-center'>
        
        <img src='./image.png' className='w-12' /><h1 className='text-slate-100 text-4xl font-bold cursor-pointer px-3'>Movie Tracker</h1>
      </Link>
      
      {user?.email ? 
      (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-slate-100 px-6 py-2 rounded cursor-pointer text-white'>
            Logout
          </button>
        </div>
      ) 
      : 
      (
        <div>
          <Link to='/login'>
          <button className='bg-slate-100 px-6 shadow-lg shadow-gray-600 py-3 font-semibold rounded cursor-pointer tracking-wider mx-5'>
              Log In
            </button>
          </Link>
          <Link to='/signup'>
            <button className='bg-slate-400 shadow-lg shadow-gray-600 px-6 py-3 font-semibold rounded tracking-wider cursor-pointer'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div> 
    </div>
  );
};

export default Navbar;