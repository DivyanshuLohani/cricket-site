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

export interface Tournament {
  name: string;
  dates: string;
  format: string;
  teams: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  matches: any;
  winner?: string;
}

export interface Match {
  date: string;
  venue: string;
  teams: Team[];
  result: string;
}
