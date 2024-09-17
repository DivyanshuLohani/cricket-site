import { motion } from "framer-motion";
import { Users, Award } from "lucide-react"; // Import Lucide icons

interface TeamCardProps {
  logo: string;
  teamName: string;
  captainName: string;
  recentPerformance: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  logo,
  teamName,
  captainName,
  recentPerformance,
}) => {
  return (
    <motion.div
      className="relative bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Team Logo */}
      <motion.img
        src={logo}
        alt={teamName}
        className="w-16 h-16 object-contain mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Team Info */}
      <div className="flex flex-col">
        <motion.h3
          className="text-lg font-semibold mb-2 text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {teamName}
        </motion.h3>

        {/* Captain Information */}
        <motion.div
          className="flex items-center mb-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Users className="w-5 h-5 text-muted-foreground mr-2" />
          <p className="text-muted-foreground">Captain: {captainName}</p>
        </motion.div>

        {/* Performance Information */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Award className="w-5 h-5 text-muted-foreground mr-2" />
          <p className="text-muted-foreground">Recent: {recentPerformance}</p>
        </motion.div>
      </div>

      {/* View Profile Button */}
      <motion.button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg self-start"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        View Profile
      </motion.button>
    </motion.div>
  );
};

export default TeamCard;
