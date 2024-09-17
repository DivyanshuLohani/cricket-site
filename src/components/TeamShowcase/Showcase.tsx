import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import TeamCard from "../Teams/TeamCard";
import { teams } from "@/lib/teams";

const TeamShowcase = () => {
  return (
    <section className="py-12 relative px-5 md:px-10">
      {/* Animate the section title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Meet the Teams
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {teams.slice(0, 9).map((team, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
          >
            <BackgroundGradient baseColor={team.colors.accent}>
              <TeamCard team={team} />
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
