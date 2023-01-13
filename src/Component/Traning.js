import React from "react";

import Carousel from 'better-react-carousel'
import Training from './Traning.module.css'

function Traning(){
    return(
        <>
        <div className={Training.head1}>

    <div id="training" className={Training.training}>
        <h1 className={Training.head}>Training Programs !</h1>
        <br />
       <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.one}>Cycling</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.two}>BenchPress</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.three}>Deadlift</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/7674497/pexels-photo-7674497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.four}>Deadlift</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.five}>Equipments</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.six}>Biceps</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}}src="https://images.pexels.com/photos/6388395/pexels-photo-6388395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.seven}>PushUp</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}}src="https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.eight}>Chest</p>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" style={{opacity:"50%"}} src="https://images.pexels.com/photos/3776144/pexels-photo-3776144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className={Training.nine}>Girls</p>
      </Carousel.Item>
      {/* <Carousel.Item>
        anything you want to show in the grid
      </Carousel.Item> */}
      {/* ... */}
    </Carousel>
    </div>
    </div>
  
        </>

    )
}
export default Traning