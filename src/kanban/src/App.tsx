import { Route, Routes } from 'react-router'
import './App.css'
import KanbanBoard from './components/KanbanBoard'
import BoardsPage from './components/BoardsPage'

function App() {
  return (
    <Routes>
      <Route index element={<BoardsPage />} />
      <Route path="/boards/:boardId" element={<KanbanBoard/>}/>
    </Routes>
  )
}

export default App
