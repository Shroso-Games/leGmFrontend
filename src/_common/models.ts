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

export interface IMatch {
  home_team: IMatchTeam;
  away_team: IMatchTeam;
}

export interface IMatchTeam {
  name:    string;
  abbr:    string;
  wins:    number;
  losses:  number;
  players: IMatchPlayer[];
}

export interface IMatchPlayer {
  name:      string;
  offRating: number;
  defRating: number;
}

export interface IMatchResponse {
  "home_team": IMatchResponseTeam,
  "away_team": IMatchResponseTeam
}

export interface IMatchResponseTeam {
  "score": number,
  "stats": IMatchResponsePlayer[]
}

export interface IMatchResponsePlayer {
  "3pt_made":     number;
    assists:        number;
    blocks:         number;
    fga:            number;
    fgm:            number;
    fgpct:          number;
    minutes_played: number;
    name:           string;
    points:         number;
    rebounds:       number;
    steals:         number;
}