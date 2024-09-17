import { Calendar, Gamepad2, MapPin, Trophy } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";
import { Tournament } from "@/lib/types";

export default function TournamentCard({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <BackgroundGradient className="sm:p-10 shadow-lg rounded-lg cursor-pointer relative bg-card">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{tournament.name}</h3>
        <Trophy className="text-yellow-500 text-2xl" fill="currentColor" />
      </div>
      <div className="mt-4 text-muted-foreground">
        <p className="flex items-center mb-2">
          <Calendar className="mr-2" /> {tournament.dates}
        </p>
        <p className="flex items-center mb-2">
          <MapPin className="mr-2" />{" "}
          {tournament.matches[Object.keys(tournament.matches)[0]]}
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
  );
}
