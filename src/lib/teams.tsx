import {
  Shield,
  Flame,
  Wind,
  Sword,
  Moon,
  Sun,
  Snowflake,
  ShieldAlert,
  Gem,
  Star,
  Compass,
  Target,
  Anchor,
  Diamond,
  Feather,
  Ghost,
  Cloud,
  Leaf,
  Eye,
  Hammer,
  Heart,
  Clover,
  Zap,
  CupSoda,
  Bell,
  EyeOff,
  Plane,
  Rocket,
  CloudLightning,
} from "lucide-react";

export const teams = [
  {
    name: "Crimson Strikers",
    points: 18,
    wins: 5,
    runs: 2100,
    captain: "Aiden Walker",
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#FF5A00",
    },
    performance: 3,
    players: 15,
    logo: <Shield color="#FF0000" fill="#FF5A00" size={48} />,
  },
  {
    name: "Thunder Eagles",
    points: 20,
    wins: 6,
    runs: 2200,
    captain: "Ben Thompson",
    colors: {
      primary: "#00FF00",
      secondary: "#FFFFFF",
      accent: "#008000",
    },
    performance: 4,
    players: 16,
    logo: <CloudLightning color="#00FF00" fill="#008000" size={48} />,
  },
  {
    name: "Phoenix Flames",
    points: 16,
    wins: 4,
    runs: 2000,
    captain: "Charlie Baker",
    colors: {
      primary: "#FFD700",
      secondary: "#FFFFFF",
      accent: "#FFC400",
    },
    performance: 2,
    players: 14,
    logo: <Flame color="#FFD700" fill="#FFC400" size={48} />,
  },
  {
    name: "Storm Warriors",
    points: 24,
    wins: 8,
    runs: 2400,
    captain: "David Carter",
    colors: {
      primary: "#00468B",
      secondary: "#FFFFFF",
      accent: "#0066FF",
    },
    performance: 5,
    players: 17,
    logo: <Wind color="#00468B" fill="#0066FF" size={48} />,
  },
  {
    name: "Falcon Blades",
    points: 22,
    wins: 7,
    runs: 2300,
    captain: "Ethan Miller",
    colors: {
      primary: "#FF7F00",
      secondary: "#FFFFFF",
      accent: "#FFA500",
    },
    performance: 4,
    players: 16,
    logo: <Sword color="#FF7F00" fill="#FFA500" size={48} />,
  },
  {
    name: "Midnight Mavericks",
    points: 14,
    wins: 3,
    runs: 1900,
    captain: "Frank Johnson",
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      accent: "#666666",
    },
    performance: 2,
    players: 13,
    logo: <Moon color="#000000" fill="#666666" size={48} />,
  },
  {
    name: "Solar Sentinels",
    points: 12,
    wins: 2,
    runs: 1800,
    captain: "George King",
    colors: {
      primary: "#FFFF00",
      secondary: "#FFFFFF",
      accent: "#FFCC00",
    },
    performance: 1,
    players: 12,
    logo: <Sun color="#FFFF00" fill="#FFCC00" size={48} />,
  },
  {
    name: "Arctic Avengers",
    points: 10,
    wins: 1,
    runs: 1700,
    captain: "Henry Hill",
    colors: {
      primary: "#00FFFF",
      secondary: "#FFFFFF",
      accent: "#00CCCC",
    },
    performance: 0,
    players: 11,
    logo: <Snowflake color="#00FFFF" fill="#00CCCC" size={48} />,
  },
  {
    name: "Desert Defenders",
    points: 8,
    wins: 0,
    runs: 1600,
    captain: "Isaac Lewis",
    colors: {
      primary: "#C0C0C0",
      secondary: "#FFFFFF",
      accent: "#B0B0B0",
    },
    performance: 0,
    players: 10,
    logo: <ShieldAlert color="#C0C0C0" fill="#B0B0B0" size={48} />,
  },
  {
    name: "Emerald Enforcers",
    points: 6,
    wins: 0,
    runs: 1500,
    captain: "James Moore",
    colors: {
      primary: "#008000",
      secondary: "#FFFFFF",
      accent: "#00B000",
    },
    performance: 0,
    players: 9,
    logo: <Gem color="#008000" fill="#00B000" size={48} />,
  },
  {
    name: "Sapphire Scorchers",
    points: 18,
    wins: 5,
    runs: 2100,
    captain: "Karen Nelson",
    colors: {
      primary: "#0000FF",
      secondary: "#FFFFFF",
      accent: "#0066FF",
    },
    performance: 3,
    players: 15,
    logo: <Star color="#0000FF" fill="#0066FF" size={48} />,
  },
  {
    name: "Ruby Raiders",
    points: 20,
    wins: 6,
    runs: 2200,
    captain: "Laura Owens",
    colors: {
      primary: "#FF0000",
      secondary: "#FFFFFF",
      accent: "#FF5A00",
    },
    performance: 4,
    players: 16,
    logo: <Compass color="#FF0000" fill="#FF5A00" size={48} />,
  },
  {
    name: "Topaz Titans",
    points: 16,
    wins: 4,
    runs: 2000,
    captain: "Mark Parker",
    colors: {
      primary: "#FFFF00",
      secondary: "#FFFFFF",
      accent: "#FFCC00",
    },
    performance: 2,
    players: 14,
    logo: <Target color="#FFFF00" fill="#FFCC00" size={48} />,
  },
  {
    name: "Amethyst Assassins",
    points: 24,
    wins: 8,
    runs: 2400,
    captain: "Nicole Quinn",
    colors: {
      primary: "#00FFFF",
      secondary: "#FFFFFF",
      accent: "#00CCCC",
    },
    performance: 5,
    players: 17,
    logo: <Anchor color="#00FFFF" fill="#00CCCC" size={48} />,
  },
  {
    name: "Opal Outlaws",
    points: 22,
    wins: 7,
    runs: 2300,
    captain: "Olivia Roberts",
    colors: {
      primary: "#FFD700",
      secondary: "#FFFFFF",
      accent: "#FFC400",
    },
    performance: 4,
    players: 16,
    logo: <Diamond color="#FFD700" fill="#FFC400" size={48} />,
  },
  {
    name: "Eagle Guardians",
    points: 22,
    wins: 7,
    runs: 2500,
    captain: "Riley White",
    colors: {
      primary: "#4A90E2",
      secondary: "#FFFFFF",
      accent: "#1F66B2",
    },
    performance: 4,
    players: 16,
    logo: <Feather color="#4A90E2" fill="#1F66B2" size={48} />,
  },
  {
    name: "Ghost Knights",
    points: 20,
    wins: 6,
    runs: 2200,
    captain: "Elliot Clark",
    colors: {
      primary: "#B6B6B6",
      secondary: "#FFFFFF",
      accent: "#8C8C8C",
    },
    performance: 3,
    players: 15,
    logo: <Ghost color="#B6B6B6" fill="#8C8C8C" size={48} />,
  },
  {
    name: "Inferno Masters",
    points: 24,
    wins: 8,
    runs: 2700,
    captain: "Mason Black",
    colors: {
      primary: "#FF4500",
      secondary: "#FFFFFF",
      accent: "#CC3700",
    },
    performance: 5,
    players: 17,
    logo: <Flame color="#FF4500" fill="#CC3700" size={48} />,
  },
  {
    name: "Cloud Rangers",
    points: 18,
    wins: 5,
    runs: 2100,
    captain: "Blake Gray",
    colors: {
      primary: "#87CEEB",
      secondary: "#FFFFFF",
      accent: "#5DADEC",
    },
    performance: 3,
    players: 15,
    logo: <Cloud color="#87CEEB" fill="#5DADEC" size={48} />,
  },
  {
    name: "Forest Giants",
    points: 16,
    wins: 4,
    runs: 2000,
    captain: "Daniel Green",
    colors: {
      primary: "#228B22",
      secondary: "#FFFFFF",
      accent: "#196619",
    },
    performance: 2,
    players: 14,
    logo: <Leaf color="#228B22" fill="#196619" size={48} />,
  },
  {
    name: "Mystic Eyes",
    points: 12,
    wins: 2,
    runs: 1800,
    captain: "Avery Brown",
    colors: {
      primary: "#9400D3",
      secondary: "#FFFFFF",
      accent: "#7B00B2",
    },
    performance: 1,
    players: 12,
    logo: <Eye color="#9400D3" fill="#7B00B2" size={48} />,
  },
  {
    name: "Hammerheads",
    points: 10,
    wins: 1,
    runs: 1700,
    captain: "Zachary Collins",
    colors: {
      primary: "#FF6347",
      secondary: "#FFFFFF",
      accent: "#E5543F",
    },
    performance: 0,
    players: 11,
    logo: <Hammer color="#FF6347" fill="#E5543F" size={48} />,
  },
  {
    name: "Heartbreakers",
    points: 8,
    wins: 0,
    runs: 1600,
    captain: "Brooke Foster",
    colors: {
      primary: "#FF1493",
      secondary: "#FFFFFF",
      accent: "#DB127D",
    },
    performance: 0,
    players: 10,
    logo: <Heart color="#FF1493" fill="#DB127D" size={48} />,
  },
  {
    name: "Clover Champs",
    points: 6,
    wins: 0,
    runs: 1500,
    captain: "Logan Evans",
    colors: {
      primary: "#32CD32",
      secondary: "#FFFFFF",
      accent: "#28A428",
    },
    performance: 0,
    players: 9,
    logo: <Clover color="#32CD32" fill="#28A428" size={48} />,
  },
  {
    name: "Volt Warriors",
    points: 18,
    wins: 5,
    runs: 2100,
    captain: "Grayson Hall",
    colors: {
      primary: "#FFD700",
      secondary: "#FFFFFF",
      accent: "#E6B800",
    },
    performance: 3,
    players: 15,
    logo: <Zap color="#FFD700" fill="#E6B800" size={48} />,
  },
  {
    name: "Chalice Champions",
    points: 20,
    wins: 6,
    runs: 2200,
    captain: "Mia Carter",
    colors: {
      primary: "#8B4513",
      secondary: "#FFFFFF",
      accent: "#704000",
    },
    performance: 4,
    players: 16,
    logo: <CupSoda color="#8B4513" fill="#704000" size={48} />,
  },
  {
    name: "Golden Bells",
    points: 16,
    wins: 4,
    runs: 2000,
    captain: "Isabella James",
    colors: {
      primary: "#FFD700",
      secondary: "#FFFFFF",
      accent: "#E6B800",
    },
    performance: 2,
    players: 14,
    logo: <Bell color="#FFD700" fill="#E6B800" size={48} />,
  },
  {
    name: "Shadow Stalkers",
    points: 24,
    wins: 8,
    runs: 2700,
    captain: "Emily White",
    colors: {
      primary: "#4B0082",
      secondary: "#FFFFFF",
      accent: "#32006B",
    },
    performance: 5,
    players: 17,
    logo: <EyeOff color="#4B0082" fill="#32006B" size={48} />,
  },
  {
    name: "Sky Pilots",
    points: 22,
    wins: 7,
    runs: 2500,
    captain: "Jack King",
    colors: {
      primary: "#87CEEB",
      secondary: "#FFFFFF",
      accent: "#5DADEC",
    },
    performance: 4,
    players: 16,
    logo: <Plane color="#87CEEB" fill="#5DADEC" size={48} />,
  },
  {
    name: "Rocket Blasters",
    points: 18,
    wins: 5,
    runs: 2100,
    captain: "Luke Harrison",
    colors: {
      primary: "#FF4500",
      secondary: "#FFFFFF",
      accent: "#CC3700",
    },
    performance: 3,
    players: 15,
    logo: <Rocket color="#FF4500" fill="#CC3700" size={48} />,
  },
];
