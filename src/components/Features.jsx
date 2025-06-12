import {
  UserCircle,
  Map,
  Flame,
  MessageCircle,
  BadgeCheck,
  Search,
} from "lucide-react";

function Features() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
    <div className="h-1 bg-gradient-to-r from-orange-500 to-transparent w-48 mx-auto mb-12 rounded-full" />
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div>
          <UserCircle size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Player Portfolios</h3>
          <p className="text-gray-400">
            Your own page with highlights, stats, and court history.
          </p>
        </div>
        <div>
          <Map size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Park & Gym Mapping</h3>
          <p className="text-gray-400">
            Upload clips tagged by real parks or leagues.
          </p>
        </div>
        <div>
          <Flame size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Trending Clips</h3>
          <p className="text-gray-400">
            Get noticed by rising to the top of the feed.
          </p>
        </div>
        <div>
          <MessageCircle size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Like & Comment</h3>
          <p className="text-gray-400">
            Get props and feedback from the community.
          </p>
        </div>
        <div>
          <BadgeCheck size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Custom Achievements</h3>
          <p className="text-gray-400">
            Earn badges for your top plays and activity.
          </p>
        </div>
        <div>
          <Search size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Discover Players</h3>
          <p className="text-gray-400">
            Browse hoopers, their clips, and courts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
