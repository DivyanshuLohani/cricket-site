import TournamentCard from "./TournamentCard";
import { getUpcomingTournaments } from "@/lib/utils";
import { useEffect, useState } from "react";
import CricketLoadingAnimation from "../Loader";

const UpcomingTournaments = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="py-12 px-10 relative">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Upcoming Tournaments
      </h2>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 top-10">
        <div className="absolute w-32 h-32 bg-opacity-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full top-10 right-10 transform rotate-45" />
        <div className="absolute w-40 h-40 bg-opacity-10 bg-gradient-to-br from-blue-500 to-blue-600  rounded-full bottom-10 left-10 transform rotate-45" />
      </div>

      {/* Grid Layout */}
      {loading ? (
        <CricketLoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {getUpcomingTournaments(9).map((tournament, i) => (
            <TournamentCard key={i} tournament={tournament} />
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingTournaments;
