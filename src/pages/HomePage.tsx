import Footer from "@/components/Footer";
import Navbar from "@/components/Header/Navbar";
import LeaderboardSection from "@/components/LeaderBoard/Section";
import { NewsCard } from "@/components/News/NewsCard";
import TeamShowcase from "@/components/TeamShowcase/Showcase";
import UpcomingTournaments from "@/components/Upcomming/Section";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <NewsCard />
      <UpcomingTournaments />
      <TeamShowcase />
      <LeaderboardSection />
      <section className="relative py-16">
        {/* Cricket-themed background with a gradient overlay */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Take the Field?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 mb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Register your team today and compete in the most exciting cricket
            tournaments!
          </motion.p>

          <motion.a
            href="/register" // Link to registration form
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }} // Button animation
            whileTap={{ scale: 0.95 }} // Button shrink on click
          >
            Register Now
          </motion.a>
        </div>
      </section>
      <Footer />
    </>
  );
}
