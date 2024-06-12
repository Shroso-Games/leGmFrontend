import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './_components/home/Homepage'
import { TeamSelection } from './_components/newgame/TeamSelection'
import { ContextManager } from './_contexts/ContextManager'
import { ITeam } from './_common/models'
import { Dashboard } from './_components/game/Dashboard'
import Layout from './_components/game/Layout'
import { PlayGame } from './_components/game/PlayGame'
import { MatchResults } from './_components/game/MatchResults'
import { Roster } from './_components/gamepage/Roster'


function App() {

  const team : ITeam = localStorage.getItem("team") && JSON.parse(localStorage.getItem('team') as string) != "{}" ?
   JSON.parse(localStorage.getItem("team") as string) : null;

  console.log(team);

  return (
    <>
      <ContextManager>
        {team ? 
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/sim' element={<PlayGame/>}/>
              <Route path='/match_outcome' element={<MatchResults/>}/>
              <Route path='/roster' element={<Roster/>}/>
            </Routes>
          </BrowserRouter>
        </Layout>

        : 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/chooseteam' element={<TeamSelection/>}/>
          </Routes>
        </BrowserRouter>}
      </ContextManager> 
    </>
  )
}

export default App
