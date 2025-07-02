import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUpload, FaMapMarkerAlt, FaDumbbell, FaUsers, FaChartBar } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  const mainNav = [
    { label: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { label: 'Upload', icon: <FaUpload />, path: '/upload' },
  ];

  const courtsNav = [
    { label: 'Courts', icon: <FaMapMarkerAlt />, path: '/courts' },
    { label: 'Gyms', icon: <FaDumbbell />, path: '/gyms' },
    { label: 'Leagues', icon: <FaUsers />, path: '/leagues' },
  ];

  const statsNav = [
    { label: 'Stats', icon: <FaChartBar />, path: '/stats' },
  ];

  const renderNav = (items) =>
    items.map((item) => (
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
    ));

  return (
    <aside className="h-screen w-64 bg-black border-r border-blue-600 text-white p-5">
      <h2 className="text-2xl font-bold text-blue-400 mb-10">NextBucket</h2>

      <ul className="space-y-4 mb-6">{renderNav(mainNav)}</ul>

      <hr className="border-t border-blue-700 mb-6" />

      <ul className="space-y-4 mb-6">{renderNav(courtsNav)}</ul>

      <hr className="border-t border-blue-700 mb-6" />

      <ul className="space-y-4">{renderNav(statsNav)}</ul>
    </aside>
  );
}

export default Sidebar;
