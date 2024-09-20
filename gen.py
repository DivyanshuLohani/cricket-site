from datetime import datetime, timedelta
import random
import json

venues = [
    "Orion Stadium",
    "Thunderfield Arena",
    "Stellar Grounds",
    "Titan Coliseum",
    "Mirage Park",
    "Phoenix Pavilion",
    "Eclipse Arena",
    "Nebula Stadium",
    "Zenith Fields",
    "Radiant Grounds",
    "Horizon Park",
    "Meteor Stadium",
    "Summit Arena",
    "Vanguard Field",
    "Astro Stadium",
    "Nova Arena",
    "Aurora Grounds",
    "Galaxy Park",
    "Stellar Court",
    "Quantum Stadium",
    "Titan Grounds",
    "Infinity Arena",
    "Comet Park",
    "Eclipse Grounds",
    "Odyssey Stadium",
    "Vertex Arena",
    "Pinnacle Field",
    "Crest Park",
    "Mirage Stadium",
    "Apex Arena",
    "Nebula Field",
    "Celestial Grounds",
    "Spectrum Stadium",
    "Vanguard Arena",
    "Horizon Grounds",
    "Radiance Park",
    "Zenith Arena",
    "Spectrum Field",
    "Astral Stadium",
    "Nova Grounds",
    "Horizon Stadium",
    "Equinox Park",
    "Quantum Arena",
    "Meteor Grounds",
    "Titan Stadium",
    "Ascend Field",
    "Nebula Park",
    "Aurora Arena",
    "Vertex Stadium",
    "Stellar Park"
]


# Helper function to generate a date range
def generate_date_range(start_date_str, end_date_str):
    start_date = datetime.strptime(start_date_str, "%b %d, %Y")
    end_date = datetime.strptime(end_date_str, "%b %d, %Y")
    delta = end_date - start_date
    dates = [start_date + timedelta(days=i) for i in range(delta.days + 1)]
    return [date.strftime("%b %d, %Y") for date in dates]

# Helper function to generate a random date


def generate_random_date(start_date_str, end_date_str):
    start_date = datetime.strptime(start_date_str, "%b %d, %Y")
    end_date = datetime.strptime(end_date_str, "%b %d, %Y")
    delta = end_date - start_date
    random_date = start_date + timedelta(days=random.randint(0, delta.days))
    return random_date.strftime("%b %d, %Y")

# Helper function to generate fake tournament names


def generate_fake_tournament_name():
    prefixes = ["Grand", "Epic", "Ultimate", "Champion", "Legendary", "Prime"]
    suffixes = ["Cup", "Trophy", "Tournament",
                "Challenge", "Series", "Showdown"]
    return f"{random.choice(prefixes)} {random.choice(suffixes)}"

# Function to generate tournament data


def generate_tournament_data(teams, formats, number_of_tournaments):
    now = datetime.now()
    tournaments = []

    for _ in range(number_of_tournaments):
        format = random.choice(formats)
        team_list = random.sample(teams, 2)  # Choose 2 random teams

        if format == "T20":
            dates = [generate_random_date("May 01, 2024", "May 31, 2024")]
        elif format == "ODI":
            dates = generate_date_range("Jul 01, 2024", "Jul 31, 2024")
        elif format == "Test":
            dates = generate_date_range("Mar 01, 2025", "Apr 30, 2025")
        else:
            continue

        matches = {date: random.choice(venues) for date in dates}
        winner = team_list[0] if any(datetime.strptime(
            date, "%b %d, %Y") < now for date in dates) else None

        tournament = {
            "name": generate_fake_tournament_name(),
            "dates": f"{dates[0]} - {dates[-1]}" if len(dates) > 1 else dates[0],
            "format": format,
            "teams": team_list,
            "matches": matches
        }

        if winner:
            tournament["winner"] = winner

        tournaments.append(tournament)

    return tournaments


# Example usage
team_names = [
    "Crimson Strikers",
    "Thunder Eagles",
    "Phoenix Flames",
    "Storm Warriors",
    "Falcon Blades",
    "Midnight Mavericks",
    "Solar Sentinels",
    "Arctic Avengers",
    "Desert Defenders",
    "Emerald Enforcers",
    "Sapphire Scorchers",
    "Ruby Raiders",
    "Topaz Titans",
    "Amethyst Assassins",
    "Opal Outlaws",
    "Eagle Guardians",
    "Ghost Knights",
    "Inferno Masters",
    "Cloud Rangers",
    "Forest Giants",
    "Mystic Eyes",
    "Hammerheads",
    "Heartbreakers",
    "Clover Champs",
    "Volt Warriors",
    "Chalice Champions",
    "Golden Bells",
    "Shadow Stalkers",
    "Sky Pilots",
    "Rocket Blasters",
]
formats = ["T20", "ODI", "Test"]
number_of_tournaments = 100

tournament_data = generate_tournament_data(
    team_names, formats, number_of_tournaments)

with open("data.json", "w") as f:
    json.dump(tournament_data, f, indent=4)
