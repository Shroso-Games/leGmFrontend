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


export interface IHeadshot{
  "first_name": string,
  "last_name": string,
  "image_url": string
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
  home_team: number;
  away_team: number;
  user: number;
  date: string,
  location: string;
}

export interface IMatchTeam {
  name:    string;
  abbr:    string;
  wins:    number;
  losses:  number;
  players: IMatchPlayer;
}

export interface IMatchPlayer {
  id: number;
  name:      string;
  offRating: number;
  defRating: number;
}

export interface IMatchResponse {
  "gameID": number;
  "homeTeam": ITeam,
  "awayTeam": ITeam,
  "date": string;
  "location": string;
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

export interface GamePlayer {
  gamePlayerID: number;
  lastName: string;
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
  player: IPlayer; // Assuming Player is another interface or type
  game: IGame; // Assuming Game is another interface or type
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