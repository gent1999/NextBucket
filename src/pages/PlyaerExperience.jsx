import { useState } from 'react';
import axios from 'axios';

function PlayerExperience() {
  const [name, setName] = useState('');
  const [playedHighSchool, setPlayedHighSchool] = useState(false);
  const [playedCollege, setPlayedCollege] = useState(false);
  const [highSchool, setHighSchool] = useState('');
  const [college, setCollege] = useState('');
  const [division, setDivision] = useState('');
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      playedHighSchool,
      highSchool,
      playedCollege,
      college,
      division,
    };

    console.log('Submitted:', data);

    try {
      const response = await axios.post('http://localhost:5000/api/stats', {
        name,
        college,
      });

      console.log('📊 Player stats:', response.data);
      setStats(response.data);
    } catch (err) {
      console.error('❌ Failed to fetch stats:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Your Basketball Experience</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
          required
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="highschool"
            checked={playedHighSchool}
            onChange={() => setPlayedHighSchool(!playedHighSchool)}
          />
          <label htmlFor="highschool">I played in high school</label>
        </div>

        {playedHighSchool && (
          <input
            type="text"
            placeholder="What high school did you play for?"
            value={highSchool}
            onChange={(e) => setHighSchool(e.target.value)}
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
          />
        )}

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="college"
            checked={playedCollege}
            onChange={() => setPlayedCollege(!playedCollege)}
          />
          <label htmlFor="college">I played in college</label>
        </div>

        {playedCollege && (
          <>
            <input
              type="text"
              placeholder="What college did you play for?"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
            />

            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
            >
              <option value="">Select division</option>
              <option value="D1">Division I</option>
              <option value="D2">Division II</option>
              <option value="D3">Division III</option>
              <option value="JUCO">JUCO</option>
              <option value="Other">Other</option>
            </select>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded"
        >
          Continue
        </button>
      </form>

      {stats && (
        <div className="mt-10 bg-gray-900 p-6 rounded w-full max-w-md border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Fetched Stats</h2>
          <p><strong>Name:</strong> {stats.name}</p>
          <p><strong>College:</strong> {stats.college}</p>
          <p><strong>Points/Game:</strong> {stats.pointsPerGame}</p>
          <p><strong>Rebounds/Game:</strong> {stats.reboundsPerGame}</p>
          <p><strong>Assists/Game:</strong> {stats.assistsPerGame}</p>
        </div>
      )}
    </div>
  );
}

export default PlayerExperience;
