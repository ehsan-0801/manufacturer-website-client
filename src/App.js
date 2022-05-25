import Navbar from './Components/Header/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import Portfolio from './Components/Pages/Portfolio';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/Pages/NotFound';

function App() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/dashboard" element={ <Dashboard></Dashboard> }></Route>
        <Route path="/blog" element={ <Blog></Blog> }></Route>
        <Route path="/portfolio" element={ <Portfolio></Portfolio> }></Route>
        <Route path="/signin" element={ <SignIn></SignIn> }></Route>
        <Route path="/signup" element={ <SignUp></SignUp> }></Route>
        <Route path="*" element={ <NotFound></NotFound> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
