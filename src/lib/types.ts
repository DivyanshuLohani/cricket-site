export interface Team {
  name: string;
  points: number;
  wins: number;
  runs: number;
  captain: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  performance: number;
  players: number;
  logo: React.ReactElement;
}
