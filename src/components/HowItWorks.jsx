import { MapPin, Video, Trophy } from 'lucide-react';

function HowItWorks() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div>
          <MapPin size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Tag Your Court</h3>
          <p className="text-gray-400">
            Choose where you hooped — park, gym, or league.
          </p>
        </div>
        <div>
          <Video size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Upload Highlights</h3>
          <p className="text-gray-400">
            Share clips, plays, or full games with tags.
          </p>
        </div>
        <div>
          <Trophy size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Build Your Legacy</h3>
          <p className="text-gray-400">
            Track your growth, get seen, and stand out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
