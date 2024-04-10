import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './_components/home/Homepage'
import { TeamSelection } from './_components/newgame/TeamSelection'
import { ContextManager } from './_contexts/ContextManager'
import { ITeam } from './_common/models'

function App() {

  const team : ITeam = localStorage.getItem("team") ? JSON.parse(localStorage.getItem("team") as string) : null;

  console.log(team);

  return (
    <>
      <ContextManager>
        {team ? 
        <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
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
