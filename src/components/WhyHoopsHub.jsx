function WhyHoopsHub() {
    return (
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why HoopsHub?</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
          {/* Player Portfolio Preview */}
          <div>
            <img src="../assets/portfolio-phone.png" alt="Player portfolio preview" className="rounded-xl mx-auto mb-4 w-[90%]" />
            <h3 className="text-lg font-semibold">Your own player portfolio.</h3>
            <p className="text-gray-400 text-sm">Just like this.</p>
          </div>
  
          {/* Clip Grid Preview */}
          <div>
            <img src="/clips-grid.png" alt="Clip thumbnails" className="rounded-xl mx-auto mb-4 w-[90%]" />
            <h3 className="text-lg font-semibold">Clip your best moments.</h3>
            <p className="text-gray-400 text-sm">Court by court.</p>
          </div>
  
          {/* Map with Pins */}
          <div>
            <img src="../assets/map-pins.png" alt="Map with tags" className="rounded-xl mx-auto mb-4 w-[90%]" />
            <h3 className="text-lg font-semibold">Track your journey</h3>
            <p className="text-gray-400 text-sm">Every gym, park, and league you’ve touched.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyHoopsHub;
  