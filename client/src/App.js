import 'antd/dist/antd';
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './componenets/ProtectedRoutes';
import PublicRoute from './componenets/PublicRoute'
function App() {
  const {loading} =useSelector((state)=>state.alerts)
  return (
    
    <BrowserRouter>
      {loading && 
      <div className='spinner-parent'>
        <div class="spinner-border text-warning" role="status"></div>
      </div>
      }
      
      <Toaster position='top-center' reverseOrder={false}/>
      <Routes>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/' element={ <ProtectedRoutes><Home/></ProtectedRoutes> }/>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
