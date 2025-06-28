import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUpload, FaMapMarkerAlt, FaChartBar } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { label: 'Upload', icon: <FaUpload />, path: '/upload' },
    { label: 'Courts', icon: <FaMapMarkerAlt />, path: '/courts' },
    { label: 'Stats', icon: <FaChartBar />, path: '/stats' },
  ];

  return (
    <aside className="h-screen w-64 bg-black border-r border-blue-600 text-white p-5">
      <h2 className="text-2xl font-bold text-blue-400 mb-10">NextBucket</h2>

      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-800 text-blue-300'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
