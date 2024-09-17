import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { teams } from "@/libs/teams";

const LeaderboardSection = () => {
  const [sortBy, setSortBy] = useState("Most Wins"); // Default sorting by Most Wins
  const [displayTeams, setTeams] = useState(teams);

  useEffect(() => {
    setTeams((prev) =>
      prev.sort((a, b) => {
        if (sortBy === "Most Wins") return b.wins - a.wins;
        else if (sortBy === "Highest Runs") return b.runs - a.runs;
        else if (sortBy === "Highest Points") return b.points - a.points;
        return 0;
      })
    );
  }, [sortBy]);

  return (
    <section className="py-12 bg-card">
      <motion.div
        className="container mx-auto px-4"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Leaderboard
        </motion.h2>

        {/* Sorting Options */}
        <motion.div
          className="flex justify-end mb-6"
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <select
            className="border border-blue-500 rounded-md p-2 bg-input text-foreground"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Most Wins">Most Wins</option>
            <option value="Highest Runs">Highest Runs</option>
            <option value="Highest Points">Highest Points</option>
          </select>
        </motion.div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <AnimatePresence>
            <Table className="shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="py-3 px-4 text-left">
                    Team Name
                  </TableHead>
                  <TableHead className="py-3 px-4 text-left">Points</TableHead>
                  <TableHead className="py-3 px-4 text-left">
                    Matches Won
                  </TableHead>
                  <TableHead className="py-3 px-4 text-left">
                    Runs Scored
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayTeams.slice(0, 5).map((team, index) => (
                  <TableRow key={index}>
                    <TableCell className="py-3 px-4 flex items-center gap-10">
                      {team.logo} {team.name}
                    </TableCell>
                    <TableCell className="py-3 px-4">{team.points}</TableCell>
                    <TableCell className="py-3 px-4">{team.wins}</TableCell>
                    <TableCell className="py-3 px-4">{team.runs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AnimatePresence>
        </div>

        {/* Full Leaderboard Button */}
        <motion.div
          className="flex justify-center mt-8"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md transition-all">
            Full Leaderboard
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeaderboardSection;
