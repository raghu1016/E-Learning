// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CourseList from './pages/CourseList'; 
import CourseDetails from './pages/CourseDetails';
import Payment from './pages/Payment';
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute.jsx'


function App() {

  return (
    <>

     <Router>
      <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/courses"  element={<CourseList/>} />
          <Route element={<PrivateRoute/>}>
          <Route path="/courses/:id"  element={<CourseDetails/>} />
          </Route>
          

          <Route path="/payment"  element={<Payment/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
