
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotesForm from './components/NotesForm';
import AllNotes from './components/AllNotes'
function App() {
  return (
    <div className="">
      <Routes>
          <Route path='/' element={<NotesForm />}/>
          <Route path='/notes' element={<AllNotes />} />
      </Routes>
    </div>
  );
}

export default App;
