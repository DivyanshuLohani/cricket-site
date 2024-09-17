import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { matches } from "./tournaments";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUpcomingTournaments(n: number) {
  return matches
    .filter((e) => {
      const date = new Date(e.dates.split(" - ")[0]);
      const today = new Date();
      return date > today;
    })
    .slice(0, n);
}

export function getPastTournaments(n: number) {
  return matches
    .filter((e) => {
      const date = new Date(e.dates.split(" - ")[0]);
      const today = new Date();
      return date < today;
    })
    .slice(0, n);
}

export function getTournamentByName(name: string) {
  return matches.find((e) => {
    return e.name === name;
  });
}

export function filterTournaments(query?: string, format?: string) {
  return matches.filter((e) => {
    const q = query ? e.name.toLowerCase().includes(query.toLowerCase()) : true;
    const f = format && format !== "null" ? e.format === format : true;
    return q && f;
  });
}
