import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../src/context/AuthContext';

const AdminHeader = () => {
  const { isAuthenticatedAdmin, admin, adminLogout } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="flex justify-between px-[2rem] py-[1rem] mb-[1rem] text-stone-950 font-[700]">
      <div>
        <Link to='/admin'>MERN+AUTH - ADMIN</Link>
      </div>
      {isAuthenticatedAdmin ? (
        <ul className="flex gap-[2rem]">
          <li>
            <Link to='/admin/home'>Home</Link>
          </li>
          <li>
            <div>
              <button onClick={() => setDropdown(!dropdown)} className='relative'>
                {admin ? `Welcome, ${admin.name}!` : 'Loading...'}
              </button>
              {dropdown && (
                <div className="profile absolute right-[120px] bg-white px-[1rem] py-[.1rem] rounded-[5px] text-center">
                  <Link to='/admin/profile'>Admin Profile</Link>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link to='/admin/login' onClick={adminLogout}>Logout</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-[2rem]">
          <li>
            <Link to='/admin/login'>Login</Link>
          </li>
          <li>
            <Link to='/admin/register'>Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default AdminHeader