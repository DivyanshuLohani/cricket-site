import { BackgroundGradient } from "../ui/background-gradient";
import TeamCard from "../Teams/TeamCard";

const TeamShowcase = () => {
  const teams = [
    {
      logo: "https://via.placeholder.com/100", // Replace with actual team logos
      name: "Storm Warriors",
      captain: "Zorak Allard",
      performance: "Won 7 of last 10 matches",
      colors: {
        primary: "#3498db", // blue
        secondary: "#2ecc71", // green
        accent: "#f1c40f", // yellow
      },
    },
    {
      logo: "https://via.placeholder.com/100",
      name: "Thunder Eagles",
      captain: "Vera Nightshade",
      performance: "Won 5 of last 10 matches",
      colors: {
        primary: "#e74c3c", // red
        secondary: "#95a5a6", // gray
        accent: "#8e44ad", // purple
      },
    },
    {
      logo: "https://via.placeholder.com/100",
      name: "Falcon Blades",
      captain: "Arius Nightfang",
      performance: "Won 8 of last 10 matches",
      colors: {
        primary: "#2c3e50", // dark blue
        secondary: "#f7dc6f", // golden yellow
        accent: "#e67e73", // orange-red
      },
    },
  ];

  return (
    <section className="py-12 relative px-5 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8 ">Meet the Teams</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {teams.map((team, index) => (
          <BackgroundGradient key={index} baseColor={team.colors.accent}>
            <TeamCard
              teamName={team.name}
              logo={team.logo}
              captainName={team.captain}
              recentPerformance={team.performance}
            />
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
