import './App.css';
import Registration from './components/registration/Registration';
import Home from './pages/home/Home';
import { Routes , Route} from 'react-router-dom';
function App() {
  return (
   <>
   
<Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/registration' element={<Registration/>}/>
</Routes>
   </>
  );
}

export default App;
