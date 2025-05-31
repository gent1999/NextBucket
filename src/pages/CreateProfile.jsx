import { useNavigate } from 'react-router-dom';

function CreateProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // collect input values here if needed
    navigate('/player-experience');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Create Your Player Profile</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Player Name"
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />
        <input
          type="text"
          placeholder="Position (e.g. PG, SG)"
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />
        <input
          type="text"
          placeholder="Height (e.g. 6'2)"
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
