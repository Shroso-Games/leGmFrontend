export interface ITeam {
  id:           number;
  name:         string;
  nickname:     string;
  code:         string;
  city:         string;
  logo:         string;
  allStar:      boolean;
  nbaFranchise: boolean;
}

export interface IResponseTeams {
  response : ITeam[];
}


export interface IInjury {
  name: string;
  injury: string;
  duration: number;
}

export interface IGame {
  awayTeam: string,
  homeTeam: string,
  enemyTeamRecord: string,
  days : number

}

export interface IHeadline {
  story: string;
  date : string
}

/**========================================================================
 * !                              WARNING
 *   The following models are only for test purposes and will not remain
 *   when the Backend is ready.
 *
 *========================================================================**/

export interface IStanding {
  league:           string;
  season:           number;
  team:             ITeam;
  conference:       {};
  division:         {};
  win:              Win;
  loss:             Loss;
  gamesBehind:      string;
  streak:           number;
  winStreak:        boolean;
  tieBreakerPoints: null;
}


export interface Win {
  home:       number;
    away:       number;
    total:      number;
    percentage: string;
    lastTen:    number;
}

export interface Loss {
  home:       number;
    away:       number;
    total:      number;
    percentage: string;
    lastTen:    number;
}

export interface IResponseStandings {
  get:        string;
  parameters: {};
  errors:     any[];
  results:    number;
  response:   IStanding[];
}

export interface StandingTeams {
  name: string,
  win: number,
  loss: number
}


export const INJURY_DATA: IInjury[] = [
  {
    name: "Curry",
    injury: "Sprained Ankle",
    duration: 14 // in days
  },
  {
    name: "James",
    injury: "Torn ACL",
    duration: 180 // in days
  },
  {
    name: "Harden",
    injury: "Concussion",
    duration: 7 // in days
  },
  {
    name: "Leonard",
    injury: "Fractured Wrist",
    duration: 30 // in days
  },
  {
    name: "Durant",
    injury: "Hamstring Strain",
    duration: 21 // in days
  }
];

export const GAME_DATA: IGame[] = [
  {
    awayTeam: "vs Lakers",
    homeTeam: "Warriors",
    enemyTeamRecord: "30-10",
    days: 1
  },
  {
    awayTeam: "@ Clippers",
    homeTeam: "Nuggets",
    enemyTeamRecord: "25-15",
    days: 3
  },
  {
    awayTeam: "@ Bulls",
    homeTeam: "Knicks",
    enemyTeamRecord: "20-20",
    days: 5
  },
  {
    awayTeam: "vs Celtics",
    homeTeam: "Heat",
    enemyTeamRecord: "28-12",
    days: 2
  },
  {
    awayTeam: "@ Rockets",
    homeTeam: "Trail Blazers",
    enemyTeamRecord: "15-25",
    days: 4
  }
];

export const HEADLINES_DATA: IHeadline[] = [
  {
    story: "LeBron James Sidelined with Ankle Injury, Expected to Miss Several Weeks of Action",
    date: "2024-03-21"
  },
  {
    story: "Kevin Durant Announces Retirement from Professional Basketball After Distinguished 15-Year Career",
    date: "2024-03-20"
  },
  {
    story: "Stephen Curry Sets New NBA Record for Three-Pointers Made in Single Game, Leading Warriors to Victory",
    date: "2024-03-19"
  },
  {
    story: "Giannis Antetokounmpo Wins MVP Award for Third Consecutive Year, Solidifying His Place Among NBA Greats",
    date: "2024-03-18"
  },
  {
    story: "James Harden Traded to New York Knicks in Blockbuster Deal, Shifting Power Dynamics Across the League",
    date: "2024-03-17"
  }
];

