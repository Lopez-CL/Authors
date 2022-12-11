import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AuthorEdit from './components/AuthorEdit';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import { BrowserRouter, Routes, Route }  from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AuthorList/>}/>
        <Route path='/new' element={<AuthorForm/>}/>
        <Route path='/edit/:_id' element={<AuthorEdit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
