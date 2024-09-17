import { matches } from "@/lib/tournaments";
import TournamentCard from "./TournamentCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { filterTournaments } from "@/lib/utils";

const TournamentCardsGrid = () => {
  const [searchParams] = useSearchParams();
  const [display, setDisplay] = useState(matches);
  useEffect(() => {
    setDisplay(
      filterTournaments(
        searchParams.get("q") || "",
        searchParams.get("format") || ""
      )
    );
  }, [searchParams]);
  return (
    <section className="py-8 px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {display.map((tournament, index) => (
          <TournamentCard key={index} tournament={tournament} />
        ))}
      </div>
    </section>
  );
};

export default TournamentCardsGrid;
