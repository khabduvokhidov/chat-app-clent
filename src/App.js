import { Navigate, Route, Routes } from 'react-router-dom';
import { useInfoContext } from './context/Context';
import Auth from './pages/auth/Auth';
import {Chat} from './pages/chat/Chat';
import Home from './pages/home/Home';
import {Profile} from './pages/profile/Profile';
import SearcUsers from './components/searcUsers/SearcUsers';

import './App.css';

function App() {
  const {user} = useInfoContext()
  return (
    <div className='App'>
      <div className='blur' style={({top: "-18%", right: "0"})}></div>
      <div className='blur' style={({top: "36%", left: "-128px"})}></div>
     <Routes>

      <Route path='/' element={user ? <Navigate to="/home"/> : <Navigate to="/auth"/> } />

      <Route path='/home' element={user ? <Home /> : <Navigate to="/auth" />}  />

      <Route path='/auth' element={user ? <Navigate to="/home" /> : <Auth />}  />

      <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to="/auth" />}  />

      <Route path='/chat' element={user ? <Chat /> : <Navigate to="/auth" />}  />

      <Route path='/followers' element={user ? <SearcUsers /> : <Navigate to="/auth"/> } />
      
      <Route path='*' element={
        <main>
          <h1> MAN BILAN OYIN OYNASHGA YOSHLI QLASAN HALI </h1>
        </main>
      } />

     </Routes>
    </div>
  );
}

export default App;
