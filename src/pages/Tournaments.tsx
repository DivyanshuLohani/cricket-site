import Footer from "@/components/Footer";
import Navbar from "@/components/Header/Navbar";
import TournamentFilterSection from "@/components/Tournaments/TournamentFilter";
import TournamentCardsGrid from "@/components/Tournaments/TournamentsGrid";

export default function Tournaments() {
  return (
    <>
      <Navbar />
      <TournamentFilterSection />
      <TournamentCardsGrid />
      <Footer />
    </>
  );
}
