import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black border-b border-blue-600 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="../assets/logo_transparent.png" alt="NextBucket Logo" className="h-10 w-auto" />
        <h1 className="text-xl text-white font-bold">NextBucket</h1>
      </div>

      {/* Right side: conditional */}
      {isDashboard ? (
        <div className="text-sm text-blue-300 font-medium">
          {user?.name ? `👤 ${user.name}` : 'User'}
        </div>
      ) : (
        <ul className="flex gap-7 text-sm text-slate-200">
          <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">Home</li>
          <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">About</li>
          <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">FAQ</li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded shadow-md transition duration-300">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
