import './App.css';
import NavBar from './Component/Navbar';
import Home from './Component/Home'
import AboutUs from './Component/AboutUs';
import Traning from './Component/Traning';
import Trainer from './Component/Trainer';
import Priseing from './Component/Priseing';
import Footer from './Component/Footer'
import JoinUs from './Join/JoinUs'
import JoinWithUs from './Join/JoinWithUs'


function App() {
  return (
    <>
    {/* <NavBar /> */}
    <Home />
    {/* <AboutUs /> */}
    <Traning />
    <Trainer />
    <div id='priseing'>
    <Priseing />
    </div>
    <Footer />
    {/* <JoinUs /> */}
    {/* <JoinWithUs /> */}
    

    </>
    
    
  );
}

export default App;
