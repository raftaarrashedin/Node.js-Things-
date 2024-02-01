import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Login from '../../backend/model/login'

function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;