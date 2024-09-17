import { Input } from "../ui/input";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";

const TournamentFilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [format, setFormat] = useState(searchParams.get("format") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: searchQuery, format, status, sortBy });
  }, [searchQuery, format, status, sortBy, setSearchParams]);

  return (
    <section className="py-8 px-5 md:px-10">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <Input
          type="text"
          placeholder="Search tournament by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Filter by Tournament Format */}
        <Select value={format} onValueChange={setFormat}>
          <SelectTrigger>
            <SelectValue placeholder="All Formats" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">All Formats</SelectItem>
            <SelectItem value="T20">T20</SelectItem>
            <SelectItem value="ODI">ODI</SelectItem>
            <SelectItem value="Test">Test</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter by Tournament Status */}
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">All Statuses</SelectItem>
            <SelectItem value="Upcoming">Upcoming</SelectItem>
            <SelectItem value="Ongoing">Ongoing</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort By Dropdown */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="popularity">Most Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default TournamentFilterSection;
