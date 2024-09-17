import { Calendar, Gamepad2, MapPin, Trophy } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";

const UpcomingTournaments = () => {
  const tournaments = [
    {
      name: "Falcon Premier League",
      dates: "Nov 12 - Dec 05, 2024",
      location: "Sky Harbor Stadium, Auroria",
      format: "T20",
    },
    {
      name: "Nimbus Trophy Showdown",
      dates: "Jan 14 - Feb 02, 2025",
      location: "Stormfield Grounds, Zyon",
      format: "ODI",
    },
    {
      name: "Crystal Cup Championship",
      dates: "Mar 10 - Apr 02, 2025",
      location: "Velosium Park, Corvith",
      format: "Test",
    },
  ];

  return (
    <section className="py-12 px-10 relative">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Upcoming Tournaments
      </h2>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 bg-opacity-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full top-10 right-10 transform rotate-45" />
        <div className="absolute w-40 h-40 bg-opacity-10 bg-gradient-to-br from-blue-500 to-blue-600  rounded-full bottom-10 left-10 transform rotate-45" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {tournaments.map((tournament) => (
          <BackgroundGradient className="sm:p-10 shadow-lg rounded-lg cursor-pointer relative bg-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{tournament.name}</h3>
              <Trophy
                className="text-yellow-500 text-2xl"
                fill="currentColor"
              />
            </div>
            <div className="mt-4 text-muted-foreground">
              <p className="flex items-center mb-2">
                <Calendar className="mr-2" /> {tournament.dates}
              </p>
              <p className="flex items-center mb-2">
                <MapPin className="mr-2" /> {tournament.location}
              </p>
              <p className="flex items-center">
                <Gamepad2 className="mr-2" /> Format: {tournament.format}
              </p>
            </div>
            <div className="mt-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-all ">
                View Details
              </button>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTournaments;
