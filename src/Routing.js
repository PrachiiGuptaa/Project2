import React from 'react'
import {Route,Routes} from 'react-router-dom'
import App from './App'
import Traning from './Component/Traning'
import AboutUs from './Component/AboutUs'
import Priseing from './Component/Priseing'
import Navbar from './Component/Navbar'
import JoinWithUs from './Join/JoinWithUs'
import JoinUs from './Join/JoinUs'


function Routing(){
    return(
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/traning' element={<Traning />}/>
            <Route path='/aboutus' element={<AboutUs />}/> 
            <Route path='/priseing' element={<Priseing />}/>
            <Route path='/joinus' element={<JoinUs />}/>
            <Route path='/joinwithus' element={<JoinWithUs />}/>
        </Routes>
        </>

    )

}
export default Routing