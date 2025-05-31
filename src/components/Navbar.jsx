function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">🏀</span> HoopsHub
        </h1>
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">FAQ</li>
          <li>
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-1 px-4 rounded">
              Login
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  