import Navbar from "@/components/Header/Navbar";
import LeaderboardSection from "@/components/LeaderBoard/Section";
import { NewsCard } from "@/components/News/NewsCard";
import TeamShowcase from "@/components/TeamShowcase/Showcase";
import UpcomingTournaments from "@/components/Upcomming/Section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <NewsCard />
      <UpcomingTournaments />
      <TeamShowcase />
      <LeaderboardSection />
    </>
  );
}
