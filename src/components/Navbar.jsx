import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { login } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-black border-b border-blue-600 shadow-lg">
      <div>
        <img
          src="../assets/logo_transparent.png"
          alt="NextBucket Logo"
          className="h-14 w-auto"
        />
      </div>
      <ul className="flex gap-7 text-sm text-slate-200">
        <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">Home</li>
        <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">About</li>
        <li className="hover:text-blue-400 transition duration-200 cursor-pointer mt-1">FAQ</li>
        <li>
          <button 
            onClick={() => login()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded shadow-md transition duration-300">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
