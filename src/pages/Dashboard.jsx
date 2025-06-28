import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />

        <main className="flex-1 px-6 py-10 space-y-16">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              Welcome, {user?.name || 'Hooper'} 🏀
            </h1>
            <p className="text-gray-300">
              Your hooper portfolio starts here. Upload highlights, track your park games, and level up.
            </p>
          </header>

          {/* Highlights Section */}
          <section className="p-6">
            <h2 className="text-2xl font-semibold text-blue-300 mb-6">🎬 Highlights</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-40 bg-blue-900 flex items-center justify-center text-blue-400 text-sm"
                >
                  Placeholder #{index + 1}
                </div>
              ))}
            </div>
          </section>

          {/* Court Activity Section */}
          <section className="bg-blue-950 rounded-lg p-6 shadow-md border border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">📍 Court Activity</h2>
            <p className="text-sm text-gray-400 mb-4">
              Track which parks and gyms you've hooped at. Build your own map.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
              View Map
            </button>
          </section>

          {/* Stats Section */}
          <section className="bg-blue-950 rounded-lg p-6 shadow-md border border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">📊 Stats & Progress</h2>
            <p className="text-sm text-gray-400 mb-4">
              Track your performance, game history, and skill growth over time.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
              View Stats
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
