import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home  from './pages/Home';
import Contact  from './pages/Contact';
import About  from './pages/About';
import NotFound  from './pages/NotFound';
import Contacts from './pages/Contacts';
import NewContact from './pages/NewContact';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      
      {/* nested route */}
      <Route path='/contact' element={ <Contacts />}>
        <Route path=':id' element={<Contact />}></Route>
        {/* <Route index element={<Contacts />}></Route> */}
        <Route path='new' element={<NewContact />}></Route>
      </Route>

      <Route path='/about' element={<About />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </>
  );
}

export default App;
