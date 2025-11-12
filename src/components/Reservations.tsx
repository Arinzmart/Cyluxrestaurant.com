import { UtensilsCrossed } from "lucide-react";

const Reservations = () => {
  return (
    <section
      id="reservations"
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/interior-ls.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          {/* Left Column: Opening Hours */}

          {/* Right Column: Reservation Form */}
          <div className="bg-background/50 border border-white/10 p-8 md:p-12 rounded-lg text-white">
            <h2 className="font-play text-4xl md:text-5xl text-brand-accent mb-4 text-center">
              Book Your Table
            </h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8 text-center">
              We welcome you to reserve your table for an unforgettable dining
              experience.
            </p>
            <form className="text-sm space-y-6 max-w-lg mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="No of Guests"
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input
                  type="time"
                  placeholder="Select Time"
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <textarea
                placeholder="Special Requests (optional)"
                rows={4}
                className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 rounded-md focus:outline-none focus:border-brand-accent transition-colors resize-none"
              ></textarea>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-brand-accent text-background font-fred font-bold tracking-widest uppercase px-8 py-4 rounded-md hover:bg-opacity-80 transition-all"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
