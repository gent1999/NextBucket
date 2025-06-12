import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4 min-h-[65vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/court-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          Build Your Game.<br />
          <span className="text-blue-400">Share Your Journey.</span>
        </h2>
        <p className="text-gray-300 max-w-xl mb-6">
          Create your own hooper portfolio and show off your best moments from every court you’ve touched.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-6 rounded shadow-md transition duration-300"
          onClick={() => navigate('/create-profile')}
        >
          Create Your Portfolio
        </button>
      </div>
    </section>
  );
}

export default Hero;
