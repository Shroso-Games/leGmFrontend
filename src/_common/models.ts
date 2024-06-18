export interface ITeam {
  teamID:      number;
    name:        string;
    code:        string;
    city:        string;
    logo:        string;
    offRating:   number;
    defRating:   number;
    coachingLvl: number;
    medicalLvl:  number;
    scoutingLvl: number;
}



export interface IPlayerTeam {
  teamID : number;
  playerID: number;
  startDate : Date,
  endDate: Date,
}

export interface IGamePlayer {
  stats: IMatchResponsePlayer;
  player: IPlayer;
  game: IGame
}

export interface IPlayer {
  playerID: number,
  userID: number,
  firstName: string,
  lastName : string,
  birthdate: string,
  college: string,
  height: number,
  weight: number,
  handles: number,
  passing: number,
  rebounding: number,
  threePointer: number,
  midRange: number,
  post: number,
  finishing: number,
  speed: number,
  stamina: number,
  offIQ: number,
  defIQ: number,
  intangibles: number,
  position: string
}

export interface IMatch {
  home_team: IMatchTeam;
  away_team: IMatchTeam;
  my_team: number;
}

export interface IMatchTeam {
  name:    string;
  abbr:    string;
  wins:    number;
  losses:  number;
  players: IMatchPlayer;
}

export interface IMatchPlayer {
  name:      string;
  offRating: number;
  defRating: number;
  position: string;
}

export interface IMatchResponse {
  "home_team": IMatchResponseTeam,
  "away_team": IMatchResponseTeam,
  "who_won": number;
  "whoami": number;
}

export interface IMatchResponseTeam {
  "score": number,
  "stats": IMatchResponsePlayer[]
}

export interface IMatchResponsePlayer {
  "3pt_made":     number;
    position:     string;
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


export interface ISave {
  userID: any,
  email: string,
  password: string
}

export interface IStats {
  minute: number;
  pts: number;
  ast: number;
  treb: number;
  oreb: number;
  dreb: number;
  stl: number;
  turno: number;
  fgper: number;
  threepper: number;
  ftper: number;
}

export interface IPlayerTeam {
  teamID: number;
  userID: number;
  startDate: Date; // Assuming the date is in ISO string format
  playerID: number;
  endDate: Date;
}



export interface IGame {
    gameID: number;
    awayTeam: ITeam;
    homeTeam: ITeam;
    date: string; // Assuming the date is in ISO string format
    location: string;
    gamePlayerList: IGamePlayer[];
}

export interface IGamePlayer {
    gamePlayerID: number;
    minute: number;
    pts: number;
    ast: number;
    oreb: number;
    dreb: number;
    stl: number;
    turno: number;
    fga: number;
    fgm: number;
    threepa: number;
    threepm: number;
    fta: number;
    ftm: number;
    player: IPlayer;
    game: IGame;

}