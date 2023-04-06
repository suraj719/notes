
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotesForm from './components/NotesForm';
import AllNotes from './components/AllNotes'
import Updateform from './components/Updateform';
function App() {
  return (
    <div className="">
      <Routes>
          <Route path='/' element={<NotesForm />}/>
          <Route path='/notes' element={<AllNotes />} />
          <Route path='/edit/:id' element={<Updateform />} />
      </Routes>
    </div>
  );
}

export default App;
